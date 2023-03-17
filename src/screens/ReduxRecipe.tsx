import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editRecipe } from "../store/actions/RecipesActions.tsx";
import { useSelector } from "react-redux";
import { recipeActions } from "../rtk-demo/RecipeSlice.tsx";
import { RootState } from "../store/ConfiguredStore";

export const ReduxRecipe = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const recipeList = useSelector((state: RootState) => state.recipeList);

  const recipe = recipeList.find((elem) => elem.id === Number(id));

  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(recipe.title);
  const [category, setCategory] = useState(recipe.category);
  const [desc, setDesc] = useState(recipe.desc);
  const [url, setUrl] = useState(recipe.url);

  const handleChangeEditMode = () => {
    setEditMode((prevState: boolean) => !prevState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const editedRecipe = {
      id: Number(id),
      title: title,
      category: category,
      desc: desc,
      url: url,
    };

    dispatch(recipeActions.edit(editedRecipe));

    setEditMode(false);
  };

  return (
    <div>
      {!editMode ? (
        <div>
          <p>{title}</p>
          <br />
          <p>{category}</p>
          <br />
          <img src={url} />
          <p>{desc}</p>
          <br />
          <hr />
          <button onClick={handleChangeEditMode}>Edit</button>
        </div>
      ) : (
        <div>
          <form action="/action_page.php" onSubmit={handleSubmit}>
            <label>Tytuł:</label>
            <br />
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <br />
            <label>Kategoria:</label>
            <br />
            <select
              name="category"
              id="category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value="cake">Ciasto</option>
              <option value="soup">Zupa</option>
              <option value="appetizer">Przystawka</option>
              <option value="drink">Napój</option>
            </select>
            <br />
            <label>Krótki opis:</label>
            <br />
            <textarea
              type="text"
              id="desc"
              name="desc"
              value={desc}
              onChange={(event) => setDesc(event.target.value)}
            />
            <br />
            <label>Zdjęcie:</label>
            <br />
            <input
              type="text"
              id="url"
              name="url"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
            />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      )}
    </div>
  );
};
