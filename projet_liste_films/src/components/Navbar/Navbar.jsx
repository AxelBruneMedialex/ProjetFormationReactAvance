import './Navbar.scss';
import Logo from "../Logo/Logo";
import {useDispatch, useSelector} from "react-redux";
import {setRecherche} from "../../stores/movieList.store";

function Navbar(){
    const listeFilmsStore = useSelector(
        (state) => state.listeFilms
    );
    const dispatch = useDispatch();

    return <div className="Navbar__container">
        <Logo />
        <div>
            <div className="relative w-full">
                <input
                    type="text"
                    className="Navbar__searchInput"
                    placeholder="Rechercher"
                    value={listeFilmsStore.recherche}
                    onChange={(e) => dispatch(setRecherche(e.target.value))}
                />
                <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"/>
                    </svg>
                </button>
            </div>
        </div>
        <div>
            <button className="Navbar__connectButton">Se connecter</button>
        </div>
    </div>
}

export default Navbar;