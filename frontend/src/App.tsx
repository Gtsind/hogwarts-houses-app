import { useState } from "react";
import HouseContainer from "./components/HouseContainer.tsx";
import HouseInput from "./components/HouseInput.tsx";
import { useFetchHouses } from "./hooks/useFetchHouses.ts";

function App() {
  const [userInput, setUserInput] = useState<string>("");
  const { houses, isLoading, houseFound } = useFetchHouses(userInput);

  return (
    <main className="my-20 mx-40 flex justify-start ">
      <section>
        <HouseInput
          userInput={userInput}
          onChangeInput={(event) => {
            setUserInput(event.target.value);
          }}
        />
        {!houseFound && (
          <p className="text-center mt-20 font-bold">
            No houses matched your search, please try again!
          </p>
        )}
        <HouseContainer houses={houses} isLoading={isLoading} />
      </section>
    </main>
  );
}

export default App;
