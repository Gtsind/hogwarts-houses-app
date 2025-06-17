import { useState, useEffect } from "react";

export default function HouseInput() {
  const [userInput, setUserInput] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(event.target.value);
  }

  useEffect(() => {
    async function fetchHouses() {
      if (!userInput.trim()) return;

      try {
        const response = await fetch(
          `http://localhost:3000/houses?name=${userInput}`
        );
        const resData = await response.json();
        console.log(resData.reply.founder);
      } catch (error) {
        console.log("Error >>", error);
      }
    }

    fetchHouses();
  }, [userInput]);

  return (
    <div className="flex justify-center mt-20">
      <input
        className="border border-gray-300 p-2 rounded-md"
        type="text"
        placeholder="Search houses"
        value={userInput}
        onChange={handleChange}
      />
    </div>
  );
}
