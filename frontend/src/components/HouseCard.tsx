import { useState } from "react";
import type { House } from "../shared/types/house.types.ts";
import { availableColors } from "../shared/util/availableColors.ts";

type HouseCardProps = {
  house: House;
};

export default function HouseCard({ house }: HouseCardProps) {
  const [traitInput, setTraitInput] = useState<string>("");
  const [filteredTraits, setFilteredTraits] = useState<string[]>(house.traits);

  const [rawStartColor, rawEndColor] = house.houseColours.split(" and ");
  const startColor = rawStartColor.toLowerCase();
  const endColor = rawEndColor.toLowerCase();

  const areBothColorsValid =
    availableColors.includes(startColor) && availableColors.includes(endColor);

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
            backgroundImage: areBothColorsValid
              ? `linear-gradient(to right, ${startColor}, ${endColor})`
              : `linear-gradient(to right, white, black)`,
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
