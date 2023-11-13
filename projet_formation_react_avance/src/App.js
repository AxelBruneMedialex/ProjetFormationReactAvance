import './App.css';
import MonComposant from "./components/MonComposant/MonComposant";
import withClickTracker from "./HOC/withClickTracker";
import MaModale from "./components/MaModale/MaModale";
import {MonContexte} from "./Contexts/MonContexte";
import {useState} from "react";
import MonBoutonModale from "./components/MonBoutonModale/MonBoutonModale";
import {Provider} from "react-redux";
import storeRedux from "./stores/Redux/reduxStore";
import MesUtilisateurs from "./components/MesUtilisateurs/MesUtilisateurs";

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
        <Provider store={storeRedux}>
            <MonContexte.Provider value={contexteData}>
                <MonComposantAvecTracker />
                <MonBoutonModale />
                <MaModale title="Test modale react portal">
                    Ceci est une modale fonctionnant avec react portal
                </MaModale>
            </MonContexte.Provider>
            <MesUtilisateurs />
        </Provider>
    </div>
  );
}

export default App;
