import {combineReducers, createStore} from "redux";

const initialState = {
    utilisateurs: [
        'Tom',
    ]
}

const monReducerRedux = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                utilisateurs: [...state.utilisateurs, action.payload]
            }
        case 'REMOVE_USER':
            return {
                ...state,
                utilisateurs: state.utilisateurs.filter((utilisateur) => utilisateur !== action.payload)
            }
        default:
            return state
    }
}

const reduxReducer = combineReducers({
    utilisateurs: monReducerRedux
});

const storeRedux = createStore(reduxReducer);
export default storeRedux;