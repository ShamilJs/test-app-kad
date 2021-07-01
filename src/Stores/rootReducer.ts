import { combineReducers } from "redux";

import { appReduser } from "./appReduser";

export const rootReducer = combineReducers({ app: appReduser });