import { useState } from "react";
import type { House } from "../shared/types/house.types.ts";

type HouseCardProps = {
  house: House;
};

export default function HouseCard({ house }: HouseCardProps) {
  const [traitInput, setTraitInput] = useState<string>("");
  const [filteredTraits, setFilteredTraits] = useState<string[]>(house.traits);

  function handleTraitChange(value: string) {
    setTraitInput(value);
  }

  function handleFilterTraits(filter: string) {
    const filtered = house.traits.filter((trait) =>
      trait.toLowerCase().includes(filter.trim().toLowerCase())
    );
    setFilteredTraits(filtered);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;
    handleTraitChange(newValue);
    handleFilterTraits(newValue);
  }

  return (
    <div className="border border-gray-300 mt-2 mb-2 w-sm rounded-md p-3">
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl">
          <strong>{house.name}</strong>
        </h1>
        <h4>{house.animal}</h4>
      </div>
      <div>
        <div className="h-4 bg-linear-to-r from-white to-black rounded-sm mt-2"></div>
        <p className="mt-2">
          Founder: <strong>{house.founder}</strong>
        </p>
        <input
          type="text"
          className="border border-gray-300 p-2 mt-1 rounded-md h-7"
          value={traitInput}
          onChange={handleInputChange}
          placeholder="Search house traits"
        />
      </div>
      <div className="flex flex-row flex-wrap gap-2">
        {filteredTraits.map((trait) => (
          <button
            key={trait}
            className="text-xs h-6 p-1 mt-2 rounded-lg bg-black text-white"
            disabled
          >
            {trait}
          </button>
        ))}
      </div>
    </div>
  );
}
