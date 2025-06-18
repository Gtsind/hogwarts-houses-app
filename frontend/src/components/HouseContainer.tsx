import HouseCard from "./HouseCard.tsx";
import type { House } from "../shared/types/house.types.ts";

type HouseContainerProps = {
  houses: House[];
};

export default function HouseContainer({ houses }: HouseContainerProps) {
  return (
    <section className="flex flex-col justify-center items-center mt-4">
      {houses.map((house) => (
        <HouseCard key={house.name} house={house} />
      ))}
    </section>
  );
}
