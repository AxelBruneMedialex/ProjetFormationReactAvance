import './App.css';
import MonComposant from "./components/MonComposant/MonComposant";
import withClickTracker from "./HOC/withClickTracker";
import MaModale from "./components/MaModale/MaModale";
import {MonContexte} from "./Contexts/MonContexte";
import {useState} from "react";
import MonBoutonModale from "./components/MonBoutonModale/MonBoutonModale";
import {Provider} from "react-redux";
import storeRedux from "./stores/Redux/reduxStore";
import {persistor, reduxToolkitStore} from "./stores/ReduxToolkit/reduxToolkitStore";
import MesUtilisateurs from "./components/MesUtilisateurs/MesUtilisateurs";
import MesUtilisateursToolkit from "./components/MesUtilisateurs/MesUtilisateursToolkit";
import MonBoutonPersonneAleatoire from "./components/MonBoutonPersonneAleatoire/MonBoutonPersonneAleatoire";
import {PersistGate} from "redux-persist/integration/react";
import MonBoutonRxJs from "./components/MonBoutonRxJs/MonBoutonRxJs";
import {fromEvent} from "rxjs";
import MonBoutonCompteur from "./components/MonBoutonCompteur/MonBoutonCompteur";

function App() {
    const MonComposantAvecTracker = withClickTracker(MonComposant);
    const [isModaleOpen, setIsModaleOpen] = useState(false);
    const [theme, setTheme] = useState('light');

    const contexteData = {
        isModaleOpen,
        openCloseModale: () => setIsModaleOpen(!isModaleOpen),
        theme,
        switchTheme: () => setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div className="App">
            <MonContexte.Provider value={contexteData}>
                <MonComposantAvecTracker/>
                <MonBoutonModale/>
                <MaModale title="Test modale react portal">
                    Ceci est une modale fonctionnant avec react portal
                </MaModale>
            </MonContexte.Provider>
            <Provider store={storeRedux}>
                <MesUtilisateurs/>
            </Provider>
            <Provider store={reduxToolkitStore}>
                <PersistGate loading={null} persistor={persistor}>
                    <MesUtilisateursToolkit/>
                    <MonBoutonPersonneAleatoire/>
                </PersistGate>
            </Provider><br/>
            <div style={{marginTop: '10px'}}>
                <MonBoutonRxJs />
            </div>
            <MonBoutonCompteur />
        </div>
    );
}

export default App;
