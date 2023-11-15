import './Navbar.scss';
import Logo from "../Logo/Logo";
import {useDispatch, useSelector} from "react-redux";
import {setRecherche} from "../../stores/movieList.store";
import {useTranslation} from "react-i18next";
import BoutonChangementLangue from "../BoutonChangementLangue/BoutonChangementLangue";
import {useAuth0} from "@auth0/auth0-react";

function Navbar(){
    const listeFilmsStore = useSelector(
        (state) => state.listeFilms
    );
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const {loginWithRedirect, logout, isAuthenticated} = useAuth0();

    console.log(isAuthenticated);

    return <div className="Navbar__container">
        <Logo />
        <div>
            <div className="relative w-full">
                <input
                    type="text"
                    className="Navbar__searchInput"
                    placeholder={t('search')}
                    value={listeFilmsStore.recherche}
                    onChange={(e) => dispatch(setRecherche(e.target.value))}
                />
                <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"/>
                    </svg>
                </button>
            </div>
        </div>
        <div className="flex items-center space-x-3">
            <div>
                <BoutonChangementLangue />
            </div>
            {
                !isAuthenticated ? <button className="Navbar__connectButton" onClick={() => loginWithRedirect()}>
                    {t('connect')}
                </button> : <button className="Navbar__connectButton" onClick={() => logout()}>
                    {t('logout')}
                </button>
            }
        </div>
    </div>
}

export default Navbar;