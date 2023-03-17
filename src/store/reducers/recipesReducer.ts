import { ADD, EDIT, DELETE } from "../actions/recipesActions.tsx";
import { actionProps, payloadProps } from "../../types/reducerPayload";
export const recipesReducer = (
  state: payloadProps[] = [],
  action: actionProps
) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];

    case EDIT:
      return [
        ...state.filter(
          (currentStateElement) => currentStateElement.id !== action.payload.id
        ),
        action.payload,
      ];

    case DELETE:
      return state.filter(
        (currentStateElement) => currentStateElement.id !== action.payload.id
      );

    default:
      console.warn(`Nie mamy akcji typu: ${action.type}`);

      return state;
  }
};
