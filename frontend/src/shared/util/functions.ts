import type { HouseApiResponse } from "../interfaces/house-api-response.interfaces.ts";
import type { House } from "../types/house.types";
import { availableColors } from "./availableColors.ts";

const FAKE_DELAY = 1500;

export const sleep = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export function mapResponseToHouses(
  response: HouseApiResponse | HouseApiResponse[]
): House[] {
  const array = Array.isArray(response) ? response : [response];
  return array.map((house) => ({
    name: house.name,
    founder: house.founder,
    houseColours: house.houseColours,
    animal: house.animal,
    traits: house.traits.map((trait) => trait.name),
  }));
}

export async function fetchAvailableHouses(url: string) {
  const response = await fetch(url);
  const resData = await response.json();
  await sleep(FAKE_DELAY);

  if (!response.ok) {
    throw new Error("Failed to fetch houses");
  }

  return resData;
}

export function getGradient(colors: string) {
  const [startColor, endColor] = colors
    .split(" and ")
    .map((color) => color.toLowerCase());
  const isValid =
    availableColors.includes(startColor) && availableColors.includes(endColor);

  return isValid
    ? `linear-gradient(to right, ${startColor}, ${endColor})`
    : `linear-gradient(to right, white, black)`;
}
