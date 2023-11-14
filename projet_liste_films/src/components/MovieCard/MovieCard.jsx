import './MovieCard.scss';
import {useSelector} from "react-redux";

function MovieCard({film}){

    console.log(film);

    return <div className="MovieCard__container">
        <div className="MovieCard__imageContainer">
            <img
                src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                className="max-h-[300px] min-h-[300px]"
            />
        </div>
        <div>
            <div className="text-xl overflow-hidden break-words">
                {film.title}
            </div>
            <div>{}</div>
            <div>Note</div>
        </div>
    </div>;
}

export default MovieCard;