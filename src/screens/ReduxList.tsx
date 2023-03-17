import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteRecipe } from "../store/actions/RecipesActions.tsx";
import { useSelector } from "react-redux";
import toolkitStore from "../store/ConfiguredStore.tsx";
import { recipeActions } from "../rtk-demo/RecipeSlice.tsx";
import { RootState } from "../store/ConfiguredStore";

export const ReduxList = () => {
  const dispatch = useDispatch();

  const handleDelete = (i) => {
    dispatch(recipeActions.delete(i));
  };

  //const recipeListRedux = useSelector((store) => store.recipeList);
  const recipeList = useSelector((state: RootState) => state.recipeList);

  return (
    <div className="add-recipe">
      <div>
        <h1>Lista przepisów</h1>
        {recipeList.length ? (
          recipeList.map((recipe, i) => {
            return (
              <div key={i}>
                <p>{recipe.title}</p>
                <br />
                <p>{recipe.category}</p>
                <br />
                <input
                  type="button"
                  value="Delete"
                  onClick={() => handleDelete(recipe.id)}
                />
                <br />
                <NavLink exact to={`/reduxrecipe/${recipe.id}`}>
                  <img src={recipe.url} alt={recipe.title} />
                </NavLink>
                <p>{recipe.desc}</p>
                <br />
                <hr />
              </div>
            );
          })
        ) : (
          <h1>Nie masz żadnych przepisów.</h1>
        )}
      </div>
    </div>
  );
};
