import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/rootReducer";
import { recipeSliceReducer } from "../rtk-demo/RecipeSlice.tsx";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, recipeSliceReducer);

const toolkitStore = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(toolkitStore);

export type RootState = ReturnType<typeof toolkitStore.getState>;

export default toolkitStore;
