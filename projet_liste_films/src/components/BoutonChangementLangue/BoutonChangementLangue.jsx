import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {setLang} from "../../stores/lang.store";

function BoutonChangementLangue(){
    const {i18n} = useTranslation();
    const langStore = useSelector(
        (state) => state.lang
    );
    const dispatch = useDispatch();

    const changerLangue = (langue) => {
        i18n.changeLanguage(langue).then(() =>  dispatch(setLang(langue)));
    };

    console.log(langStore);

    return <div className="flex items-center">
        {
            langStore.lang === 'fr'
                ? <button onClick={() => changerLangue('en')}>EN</button>
                : <button onClick={() => changerLangue('fr')}>FR</button>
        }
    </div>
}

export default BoutonChangementLangue;