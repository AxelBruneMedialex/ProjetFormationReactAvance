import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import {Provider} from "react-redux";
import Liste from "./components/Liste/Liste";
import {globalStore} from "./stores/global.store";
import './i18n';

function App() {
    return (
        <div className="">
            <Provider store={globalStore}>
                <Navbar/>
                <Liste />
            </Provider>
        </div>
    );
}

export default App;
