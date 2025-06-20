type HouseInputProps = {
  userInput: string;
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function HouseInput({
  userInput,
  onChangeInput,
}: HouseInputProps) {
  return (
    <div className="flex justify-start">
      <input
        className="border border-gray-300 p-2 rounded-md"
        type="text"
        placeholder="Search houses"
        value={userInput}
        onChange={onChangeInput}
      />
    </div>
  );
}
