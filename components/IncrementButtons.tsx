import { PlusIcon, MinusIcon } from "@heroicons/react/outline";

export default function IncrementButtons({
  title,
  subHeading,
  value,
  setterMethod,
}) {
  return (
    <div className=" flex justify-between items-center">
      <div>
        <p>{title}</p>
        <p className="font-extralight text-sm">{subHeading}</p>
      </div>
      <div className="flex space-x-5 w-36 justify-center">
        <button
          onClick={() => {
            setterMethod(value > 0 ? value - 1 : 0);
          }}
        >
          {value > 0 && (
            <MinusIcon className="rounded-full h-6 border border-black" />
          )}
          {value == 0 && (
            <MinusIcon className="rounded-full h-6 border  text-gray-400" />
          )}
        </button>
        <p>{value}</p>
        <button
          onClick={() => {
            setterMethod(value + 1);
          }}
        >
          <PlusIcon className="rounded-full h-6 border border-black" />
        </button>
      </div>
    </div>
  );
}
