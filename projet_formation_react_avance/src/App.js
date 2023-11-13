import './App.css';
import MonComposant from "./components/MonComposant/MonComposant";
import withClickTracker from "./HOC/withClickTracker";

function App() {
  const MonComposantAvecTracker = withClickTracker(MonComposant);

  return (
    <div className="App">
      <MonComposantAvecTracker />
    </div>
  );
}

export default App;
