import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import {Provider} from "react-redux";
import Liste from "./components/Liste/Liste";
import {globalStore} from "./stores/global.store";
import './i18n';
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <Provider store={globalStore}>
                <Navbar/>
                <Liste />
            </Provider>
            <Footer />
        </>
    );
}

export default App;
