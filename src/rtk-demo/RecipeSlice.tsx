import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { payloadProps } from "../types/reducerPayload";

export interface RecipeState {
  recipeList: payloadProps[];
}

const initialState: RecipeState = {
  recipeList: [],
};

export const recipeSlice = createSlice({
  name: "recipeManager",
  initialState,
  reducers: {
    add: (state: RecipeState, action) => {
      state.recipeList = [...state.recipeList, action.payload];
    },
    edit: (state: RecipeState, action) => {
      state.recipeList = [
        ...state.recipeList.filter(
          (currentStateElement) => currentStateElement.id !== action.payload.id
        ),
        action.payload,
      ];
    },
    delete: (state: RecipeState, action) => {
      console.log(action.payload);
      state.recipeList = state.recipeList.filter(
        (currentStateElement) => currentStateElement.id !== action.payload
      );
    },
  },
});

export const recipeSliceReducer = recipeSlice.reducer;
export const recipeActions = recipeSlice.actions;
