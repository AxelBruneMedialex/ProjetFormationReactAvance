import './MovieCard.scss';
import {useSelector} from "react-redux";
import {Rating} from "@mui/material";

function MovieCard({film}){
    const langStore = useSelector(
        (state) => state.lang
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
            <div className="text-xl max-h-7 overflow-hidden overflow-ellipsis whitespace-nowrap">
                {langStore.lang === 'en' && film.original_language === 'en' ? film.original_title : film.title}
            </div>
            <div>{`${film.release_date} | 2h45`}</div>
            <div className="flex justify-between">
                <Rating name="read-only" value={film.vote_average / 2} precision={0.1} size="small" readOnly />
                <p>
                    {`${film.vote_average / 2} (${film.vote_count} avis)`}
                </p>
            </div>
        </div>
    </div>;
}

export default MovieCard;