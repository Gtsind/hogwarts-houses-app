import HouseCard from "./HouseCard.tsx";

export default function CardContainer() {
  return (
    <section className="flex flex-col justify-center items-center mt-4">
      <HouseCard />
      <HouseCard />
      <HouseCard />
      <HouseCard />
    </section>
  );
}
