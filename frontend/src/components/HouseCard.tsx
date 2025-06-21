import { useState } from "react";
import type { House } from "../shared/types/house.types.ts";
import { getGradient } from "../shared/util/functions.ts";

type HouseCardProps = {
  house: House;
};

export default function HouseCard({ house }: HouseCardProps) {
  const [traitInput, setTraitInput] = useState<string>("");
  const [filteredTraits, setFilteredTraits] = useState<string[]>(house.traits);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;
    setTraitInput(newValue);
    setFilteredTraits(
      house.traits.filter((trait) => {
        trait.toLowerCase().includes(newValue.trim().toLowerCase());
      })
    );
  }

  return (
    <div className="border border-gray-300 shadow-md mt-2 mb-2 w-md rounded-md py-5 px-4">
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl text-shadow-md">
          <strong>{house.name}</strong>
        </h1>
        <p className="self-center text-shadow-md font-medium">{house.animal}</p>
      </div>
      <div className="mt-4">
        <div
          style={{
            backgroundImage: getGradient(house.houseColours),
          }}
          className="h-4 rounded-sm mt-2"
        ></div>
        <p className="mt-4">
          <span className="text-shadow-md">Founder: </span>
          <span className="font-bold text-shadow-md">{house.founder}</span>
        </p>
        <input
          type="text"
          className="border border-gray-300 p-2 mt-1 mb-2 rounded-md h-7 w-62"
          value={traitInput}
          onChange={handleInputChange}
          placeholder="Search house traits"
        />
      </div>
      <div className="flex flex-row flex-wrap gap-2">
        {filteredTraits.map((trait) => (
          <button
            key={trait}
            className="text-xs px-2 py-1 rounded-lg bg-gray-800 text-white"
            disabled
          >
            {trait}
          </button>
        ))}
      </div>
    </div>
  );
}
