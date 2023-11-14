import {configureStore, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import async from "async";

const initialState = {
    utilisateurs: [
        'Jean'
    ],
    randomPerson: null
};

export const fetchRandomPerson = createAsyncThunk(
    'maSliceToolkit/fetchRandomPerson',
    async () => {
        const response =  await fetch('https://randomuser.me/api');
        const data = await response.json();
        return data;
    }
)

export const maSliceToolkit = createSlice({
    name: 'maSliceToolkit',
    initialState,
    reducers: {
        addUtilisateur: (state, action) => {
            state.utilisateurs = [...state.utilisateurs, action.payload];
        },
        removeUtilisateur: (state, action) => {
            state.utilisateurs = state.utilisateurs.filter((utilisateur) => utilisateur !== action.payload);
        }
    },
    extraReducers: {
        [fetchRandomPerson.fulfilled]: (state, action) => {
            const identity = action.payload.results[0].name;
            state.randomPerson = `${identity.first} ${identity.last}`;
        }
    }
});

export const{
    addUtilisateur,
    removeUtilisateur,
} = maSliceToolkit.actions;

export const reduxToolkitStore = configureStore({
    reducer: {
        utilisateurs: maSliceToolkit.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});

