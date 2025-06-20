import { useState, useEffect } from "react";
import HouseContainer from "./components/HouseContainer.tsx";
import HouseInput from "./components/HouseInput.tsx";
import type { House } from "./shared/types/house.types.ts";
import type { HouseApiResponse } from "./shared/interfaces/house-api-response.interfaces.ts";
import { sleep } from "./shared/util/sleep.ts";

const FAKE_DELAY = 2000;

function mapResponseToHouses(response: HouseApiResponse[]): House[] {
  return response.map((house) => ({
    name: house.name,
    founder: house.founder,
    houseColours: house.houseColours,
    animal: house.animal,
    traits: house.traits.map((trait) => trait.name),
  }));
}

function App() {
  const [userInput, setUserInput] = useState<string>("");
  const [houses, setHouses] = useState<House[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(event.target.value);
  }

  useEffect(() => {
    async function fetchHouses() {
      setIsLoading(true);
      if (!userInput.trim()) {
        // If input is empty, fetch all houses (on load app, or on input clear)
        try {
          const response = await fetch("http://localhost:3000/houses");
          await sleep(FAKE_DELAY);
          const resData = await response.json();
          const houseArray = mapResponseToHouses(resData.reply);
          setHouses(houseArray);
          setIsLoading(false);
        } catch (error) {
          console.log("Error >>", error);
        }

        return;
      }

      try {
        setIsLoading(true);
        const response = await fetch(
          `http://localhost:3000/houses?name=${userInput}`
        );
        await sleep(FAKE_DELAY);
        const resData = await response.json();
        console.log(resData.reply);
        const house = mapResponseToHouses([resData.reply]);
        // console.log("HOUSES >>>", house);
        setHouses(house);
        setIsLoading(false);
      } catch (error) {
        console.log("Error >>", error);
      }
    }

    fetchHouses();
  }, [userInput]);

  return (
    <>
      <HouseInput userInput={userInput} onChangeInput={handleChange} />
      <HouseContainer houses={houses} isLoading={isLoading} />
    </>
  );
}

export default App;
