import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ReduxList } from "./screens/ReduxList.tsx";
import { NavBar } from "./components/Navbar";
import { ReduxAdd } from "./screens/ReduxAdd.tsx";
import { ReduxRecipe } from "./screens/ReduxRecipe.tsx";
import store from "./store/store.tsx";
import toolkitStore, { persistor } from "./store/ConfiguredStore.tsx";

export const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <NavBar />
          <Provider store={toolkitStore}>
            <PersistGate loading={null} persistor={persistor}>
              <Switch>
                <Route path="/reduxlist">
                  <ReduxList />
                </Route>
                <Route exact path="/reduxadd">
                  <ReduxAdd />
                </Route>
                <Route exact path="/reduxrecipe/:id">
                  <ReduxRecipe />
                </Route>
              </Switch>
            </PersistGate>
          </Provider>
        </div>
      </div>
    </Router>
  );
};

export default App;
