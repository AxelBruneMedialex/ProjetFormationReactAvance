import ReactDOM from "react-dom";
import {useState} from "react";
import './MaModale.css';

function MaModale({title, children}){
    const modalRoot = document.getElementById('modal-root');
    const [isVisible, setIsVisible] = useState(false);

    return isVisible ? ReactDOM.createPortal(
        <div className="MaModale__container">
            <div className="MaModale__contentContainer">
                <div className="MaModale__title">
                    {title}
                    <button className="MaModale__closeButton" onClick={() => setIsVisible(false)}>
                        <svg
                            width="25px"
                            height="25px"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 42 42"
                            fill="none"
                        >
                            <path
                                stroke="#000"
                                strokeMiterlimit={10}
                                strokeWidth={4}
                                d="m28.319 13-6.597 6.597M28.319 29.492l-6.597-6.597M11.98 13l6.61 6.597M11.98 29.492l6.61-6.597"
                            />
                        </svg>
                    </button>
                </div>
                <div className="MaModale__content">{children}</div>
            </div>
        </div>,
        modalRoot
    ) : <button onClick={() => setIsVisible(true)}>Ouvrir la modale</button>;
}

export default MaModale;