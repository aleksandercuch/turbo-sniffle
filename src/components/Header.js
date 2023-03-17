import { useContext } from "react";
import { exampleContext } from "../index";

export const Header = () => {
  const { data, dispatchAction } = useContext(exampleContext);

  console.log(data);

  return (
    <header>
      cost Tam
      <div>
        <button
          onClick={() =>
            dispatchAction({
              type: "added",
              id: "testoweId",
              text: "tesktTestowy",
            })
          }
        >
          Add item to list
        </button>
      </div>
    </header>
  );
};
