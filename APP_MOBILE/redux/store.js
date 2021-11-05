import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const initialState = {
    mode: {
        onLineMode: false,
        stateNetwork: false
    }
}


const store = createStore(reducers, initialState,applyMiddleware(thunk));

export default store;