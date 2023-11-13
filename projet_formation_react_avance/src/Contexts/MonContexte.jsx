import React, {useContext} from "react";

const MonContexte = React.createContext(null);

const useMonContexte = () => {
    return useContext(MonContexte);
}

export {MonContexte, useMonContexte};
