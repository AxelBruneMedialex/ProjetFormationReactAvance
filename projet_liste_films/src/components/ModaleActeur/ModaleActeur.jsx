import './ModaleActeur.scss';

function ModaleActeur({onClose, nom}) {
    return <div className="Modale__container">
        <div className="Modale__contentContainer">
            <div className="Modale__title">
                {nom}
                <button className="Modale__closeButton" onClick={onClose}>
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
            <div className="Modale__content">
                <p>
                    Prénom : Brad
                </p>
                <p>
                    Nom : Pitt
                </p>
                <p>
                    Age : 34 ans
                </p>
                <p>
                    Films : Fight Club, Seven
                </p>
            </div>
        </div>
    </div>
}

export default ModaleActeur;