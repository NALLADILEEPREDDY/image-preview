import {applyMiddleware, createStore,compose } from "redux";
import rootReducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer,composeEnhancers(applyMiddleware()));