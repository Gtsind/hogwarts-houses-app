import HouseCard from "./HouseCard.tsx";
import { SpinnerCircular } from "spinners-react";
import type { House } from "../shared/types/house.types.ts";

type HouseContainerProps = {
  houses: House[];
  isLoading: boolean;
};

export default function HouseContainer({
  houses,
  isLoading,
}: HouseContainerProps) {
  return (
    <section className="flex flex-col justify-center items-center mt-2">
      {isLoading && (
        <div className="flex h-40">
          <SpinnerCircular color="black" />
        </div>
      )}
      {!isLoading &&
        houses.map((house) => <HouseCard key={house.name} house={house} />)}
    </section>
  );
}
