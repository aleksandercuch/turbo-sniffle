import { combineReducers } from "redux";

import { recipesReducer } from "./recipesReducer.tsx";

export const rootReducer = combineReducers({
  recipeList: recipesReducer,
});
