import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchMovies} from "../../stores/movieList.store";
import MovieCard from "../MovieCard/MovieCard";

function Liste(){
    const listeFilmsStore = useSelector(
        (state) => state.listeFilms
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies(listeFilmsStore.recherche));
    }, [listeFilmsStore.recherche]);

    return <div className="flex flex-wrap justify-center mt-5">
        {listeFilmsStore.films.map((film, index) => {
            return <div className="mt-3 w-1/5 mx-2" key={`film-${index}`}>
                <MovieCard film={film} />
            </div>
        })}
    </div>;
}

export default Liste;