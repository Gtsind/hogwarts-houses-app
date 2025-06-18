import type { House } from "../shared/types/house.types.ts";

type HouseCardProps = {
  house: House;
};

export default function HouseCard({ house }: HouseCardProps) {
  return (
    <div className="border border-gray-300 mt-2 mb-2 w-md rounded-md p-3">
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
          placeholder="Search house traits"
          className="border border-gray-300 p-2 mt-1 rounded-md h-7"
        />
      </div>
      <div className="flex flex-row flex-wrap gap-2">
        {house.traits.map((trait) => (
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
