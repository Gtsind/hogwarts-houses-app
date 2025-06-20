import { useState, useEffect } from "react";
import {
  fetchAvailableHouses,
  mapResponseToHouses,
} from "../shared/util/functions.ts";
import type { House } from "../shared/types/house.types.ts";

const API_URL = import.meta.env.VITE_API_URL;

export function useFetchHouses(userInput: string) {
  const [houses, setHouses] = useState<House[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [houseFound, setHouseFound] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      async function fetchHouses() {
        setIsLoading(true);
        setHouseFound(true);

        try {
          const url = userInput.trim()
            ? `${API_URL}?name=${userInput}`
            : API_URL;
          const response = await fetchAvailableHouses(url);

          if (typeof response === "string") {
            setHouses([]);
            setHouseFound(false);
          } else {
            const houseArray = mapResponseToHouses(response);
            setHouses(houseArray);
            setHouseFound(true);
          }
        } catch (error) {
          console.log("Failed to fetch houses: ", error);
          setHouseFound(false);
        }

        setIsLoading(false);
      }
      fetchHouses();
    }, 1000);

    return () => clearTimeout(timer);
  }, [userInput]);

  return { houses, isLoading, houseFound };
}
