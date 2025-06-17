export default function HouseCard() {
  return (
    <div className="border border-gray-300 mt-2 mb-2 w-md rounded-md p-3">
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl">
          <strong>House Name</strong>
        </h1>
        <h4>House animal</h4>
      </div>
      <div>
        <div className="h-4 bg-linear-to-r from-white to-black rounded-sm mt-2"></div>
        <p className="mt-2">
          Founder: <strong>founder name</strong>
        </p>
        <input
          type="text"
          placeholder="Search house traits"
          className="border border-gray-300 p-2 mt-1 rounded-md h-7"
        />
      </div>
      <div className="flex flex-row flex-wrap gap-2">
        <button
          className="text-xs h-6 p-1 mt-2 rounded-lg bg-black text-white"
          disabled
        >
          Courage
        </button>
        <button
          className="text-xs h-6 p-1 mt-2 rounded-lg bg-black text-white"
          disabled
        >
          Bravery
        </button>
        <button
          className="text-xs h-6 p-1 mt-2 rounded-lg bg-black text-white"
          disabled
        >
          Intelligence
        </button>
      </div>
    </div>
  );
}
