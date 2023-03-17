export const ADD = "ADD";
export const DELETE = "DELETE";
export const EDIT = "EDIT";

export const addRecipe = ({ title, category, desc, url }) => ({
  type: ADD,
  payload: {
    title,
    category,
    desc,
    url,
    id: Math.floor(Math.random() * 1234),
  },
});

export const deleteRecipe = (id) => ({
  type: DELETE,
  payload: {
    id,
  },
});

export const editRecipe = ({ id, title, category, desc, url }) => ({
  type: EDIT,
  payload: {
    id,
    title,
    category,
    desc,
    url,
  },
});
