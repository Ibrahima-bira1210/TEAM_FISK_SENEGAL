import { TOGGLE_MODE, TOGGLE_NETWORK } from "../constants/actions-type";


const initialState = {
    onLineMode: false,
    stateNetwork: false
}


const modeReducer = (state=initialState,action) => {
    let nextState;
    switch(action.type){
        case TOGGLE_MODE:
            nextState = {
                ...state,
                onLineMode: !state.onLineMode
            }
            return nextState;

        case TOGGLE_NETWORK:
            nextState = {
                ...state,
                stateNetwork: !stateNetwork
            }
            return nextState;
        
        default:
            return nextState || state;
    }
}

export default modeReducer;