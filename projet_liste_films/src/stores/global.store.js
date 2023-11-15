import {listeFilmsSlice} from "./movieList.store";
import {configureStore} from "@reduxjs/toolkit";
import {langSlice} from "./lang.store";

export const globalStore = configureStore({
    reducer: {
        listeFilms: listeFilmsSlice.reducer,
        lang: langSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});