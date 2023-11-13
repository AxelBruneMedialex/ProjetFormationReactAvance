import './App.css';
import MonComposant from "./components/MonComposant/MonComposant";
import withClickTracker from "./HOC/withClickTracker";
import MaModale from "./components/MaModale/MaModale";
import {MonContexte} from "./Contexts/MonContexte";
import {useState} from "react";
import MonBoutonModale from "./components/MonBoutonModale/MonBoutonModale";

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
            <MonComposantAvecTracker />
            <MonBoutonModale />
            <MaModale title="Test modale react portal">
                Ceci est une modale fonctionnant avec react portal
            </MaModale>
        </MonContexte.Provider>
    </div>
  );
}

export default App;
