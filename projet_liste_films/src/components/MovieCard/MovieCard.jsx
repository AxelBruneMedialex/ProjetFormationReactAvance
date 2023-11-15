import './MovieCard.scss';
import {useSelector} from "react-redux";
import {Rating} from "@mui/material";
import ActeurChip from "../ActeurChip/ActeurChip";
import Highlighter from "react-highlight-words";


function MovieCard({film}){
    const langStore = useSelector(
        (state) => state.lang
    );
    const listeFilmsStore = useSelector(
        (state) => state.listeFilms
    );

    return <div className="MovieCard__container">
        <div className="MovieCard__imageContainer">
            <img
                src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                className="max-h-[300px] min-h-[300px]"
                alt=""
            />
        </div>
        <div className="px-3">
            <div className="text-xl max-h-7 overflow-hidden overflow-ellipsis whitespace-nowrap" id="titre">
                <Highlighter
                    textToHighlight={langStore.lang === 'en' && film.original_language === 'en' ? film.original_title : film.title}
                    searchWords={[listeFilmsStore.recherche]}
                    autoEscape={true}
                />
            </div>
            <div className="text-gray-500">{`${film.release_date} | 2h45`}</div>
            <div className="flex justify-between">
                <Rating name="read-only" value={film.vote_average / 2} precision={0.1} size="small" readOnly />
                <p>
                    {`${film.vote_average / 2} (${film.vote_count} avis)`}
                </p>
            </div>
            <hr className="w-full h-1 my-2" />
            <div className="mb-2">
                <p className="text-gray-500 mb-1">Castings</p>
                <div className="space-x-1">
                    <ActeurChip nom="Brad Pitt" />
                    <ActeurChip nom="Angelina Jolie" />
                </div>
            </div>
            <div className="flex justify-end mb-2">
                <button
                    className="p-2 h-8 w-8 hover:rounded-full hover:bg-black hover:bg-opacity-20 flex justify-center items-center"
                >
                    ->
                </button>
            </div>
        </div>
    </div>;
}

export default MovieCard;