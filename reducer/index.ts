import {combineReducers} from "redux";
import {LoginReducer} from "@/reducer/LoginReducer";

export const rootReducer = combineReducers({
    LoginReducer: LoginReducer
})