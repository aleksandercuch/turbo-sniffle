import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { recipeSliceReducer, recipeActions } from "../rtk-demo/RecipeSlice.tsx";
import { payloadProps } from "../types/reducerPayload";

export const ReduxAdd = () => {
  const [title, setTitle] = useState("example title");
  const [category, setCategory] = useState("cake");
  const [desc, setDesc] = useState("example description");
  const [url, setUrl] = useState(
    "https://staticsmaker.iplsc.com/smaker_prod_2010_02_15/dd023ff5266c280f0101a67156139734-lg.jpg"
  );
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const recipe: payloadProps = {
      title,
      category,
      desc,
      url,
      id: Math.floor(Math.random() * 1234),
    };

    dispatch(recipeActions.add(recipe));
  };
  return (
    <div className="add-recipe">
      <h1>Dodaj przepis</h1>
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
  );
};
