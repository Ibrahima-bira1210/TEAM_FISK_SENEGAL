import { combineReducers } from "redux";
import modeReducer from "./modeReducer";


const reducers = combineReducers({
    mode: modeReducer
});

export default reducers;