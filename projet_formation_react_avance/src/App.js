import './App.css';
import MonComposant from "./components/MonComposant/MonComposant";
import withClickTracker from "./HOC/withClickTracker";
import MaModale from "./components/MaModale/MaModale";

function App() {
  const MonComposantAvecTracker = withClickTracker(MonComposant);

  return (
    <div className="App">
        <MonComposantAvecTracker />
        <MaModale title="Test modale react portal">
            Ceci est une modale fonctionnant avec react portal
        </MaModale>
    </div>
  );
}

export default App;
