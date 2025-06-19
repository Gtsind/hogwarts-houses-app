import { useState, useEffect } from "react";
import HouseContainer from "./components/HouseContainer.tsx";
import HouseInput from "./components/HouseInput.tsx";
import type { House } from "./shared/types/house.types.ts";
import type { HouseApiResponse } from "./shared/interfaces/house-api-response.interfaces.ts";

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

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(event.target.value);
  }

  useEffect(() => {
    async function fetchHouses() {
      if (!userInput.trim()) {
        {
          // If input is empty, fetch all houses (on load app, or on input clear)
          try {
            const response = await fetch("http://localhost:3000/houses");
            const resData = await response.json();
            const houseArray = mapResponseToHouses(resData.reply);
            setHouses(houseArray);
          } catch (error) {
            console.log("Error >>", error);
          }
          return;
        }
      }

      try {
        const response = await fetch(
          `http://localhost:3000/houses?name=${userInput}`
        );
        const resData = await response.json();
        console.log(resData.reply);
        const house = mapResponseToHouses([resData.reply]);
        // console.log("HOUSES >>>", house);
        setHouses(house);
      } catch (error) {
        console.log("Error >>", error);
      }
    }

    fetchHouses();
  }, [userInput]);

  return (
    <>
      <HouseInput userInput={userInput} onChangeInput={handleChange} />
      <HouseContainer houses={houses} />
    </>
  );
}

export default App;
