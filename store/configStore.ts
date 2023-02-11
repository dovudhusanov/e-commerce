import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
// @ts-ignore
import {logger} from "redux-logger"
import {rootReducer} from "@/reducer";

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))