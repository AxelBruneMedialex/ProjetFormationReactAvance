import {Chip} from "@mui/material";
import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import ModaleActeur from "../ModaleActeur/ModaleActeur";

function ActeurChip({nom}){
    const modalRoot = document.getElementById('modal-root');
    const [isModaleOpen, setIsModaleOpen] = useState(false);

    return <>
        <Chip label={nom} onClick={() => setIsModaleOpen(true)} />
        {
            isModaleOpen && ReactDOM.createPortal(
                <ModaleActeur
                    onClose={() => setIsModaleOpen(false)}
                    nom={nom}
                />,
                modalRoot
            )
        }
    </>
}

export default ActeurChip;