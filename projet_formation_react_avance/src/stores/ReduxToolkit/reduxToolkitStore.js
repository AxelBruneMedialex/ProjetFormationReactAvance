import {configureStore, createSlice} from "@reduxjs/toolkit";

const initialState = {
    utilisateurs: [
        'Jean'
    ]
};

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

