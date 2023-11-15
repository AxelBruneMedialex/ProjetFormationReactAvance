import {configureStore, createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    films: [],
    recherche: '',
    loading: false
};

export const fetchMovies= createAsyncThunk(
    'listeFilmsSlice/fetchMovies',
    async (nom= null) => {
        const response =  await fetch(
            'https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1',
            {
                headers: {
                    accept: 'application/json',
                    "Authorization": `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGFjZmE0ZGI0MGIxY2VkMmM2ZjU4ZjZkMWRmZmFhMiIsInN1YiI6IjYwNGU0MGM1NjUxN2Q2MDAyOTIyMjJlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Do4GfoZH5m4S-ZNvRjgIttxPf7l49lECDVWXZmTp8jo`
                }
            }
        );
        const data = await response.json();
        return nom ? data.results.filter((film) => film.title.toLowerCase().includes(nom.toLowerCase())) : data.results;
    }
)

export const listeFilmsSlice = createSlice({
    name: 'listeFilmsSlice',
    initialState,
    reducers: {
        setFilms: (state, action) => {
            state.films = action.payload;
        },
        setRecherche: (state, action) => {
            state.recherche = action.payload;
        }
    },
    extraReducers: {
        [fetchMovies.pending]: (state) => {
            state.loading = true;
        },
        [fetchMovies.fulfilled]: (state, action) => {
            state.films = action.payload;
            state.loading = false;
        }
    }
});

export const {setFilms, setRecherche} = listeFilmsSlice.actions;