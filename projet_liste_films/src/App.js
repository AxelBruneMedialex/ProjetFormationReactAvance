import logo from './logo.svg';
import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import MovieCard from "./components/MovieCard/MovieCard";
import {Provider, useSelector} from "react-redux";
import {listeFilmsStore} from "./stores/movieList.store";
import Liste from "./components/Liste/Liste";

function App() {
    return (
        <div className="">
            <Provider store={listeFilmsStore}>
                <Navbar/>
                <Liste />
            </Provider>
        </div>
    );
}

export default App;
