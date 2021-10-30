import {applyMiddleware, createStore} from "redux";
import reducers from "./reducers/rootReducers";
import thunk from "redux-thunk";

export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)
