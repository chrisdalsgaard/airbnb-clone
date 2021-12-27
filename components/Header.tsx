import Image from "next/image";
import {
  SearchIcon,
  UsersIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  PlusIcon,
  MinusIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import { DateRangePicker, DateRange, Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import IncrementButtons from "./IncrementButtons";
import { useRouter } from "next/router";

export default function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [adultVisitors, setAdultVisitors] = useState(0);
  const [childVisitors, setChildVisitors] = useState(0);
  const [infantVisitors, setInfantVisitors] = useState(0);
  const [petVisitors, setPetVisitors] = useState(0);

  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const visitorTypes = [
    {
      key: 1,
      title: "Adults",
      subHeading: "Ages 13 or above",
      value: adultVisitors,
      setterMethod: setAdultVisitors,
    },
    {
      key: 2,
      title: "Children",
      subHeading: "Ages 13 or above",
      value: childVisitors,
      setterMethod: setChildVisitors,
    },
    {
      key: 3,
      title: "Infants",
      subHeading: "Under 2",
      value: infantVisitors,
      setterMethod: setInfantVisitors,
    },
    {
      key: 4,
      title: "Pets",
      subHeading: "Bringing an assistance animal?",
      value: petVisitors,
      setterMethod: setPetVisitors,
    },
  ];

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 w-full">
      {/* Logo */}
      <div className="relative flex h-10 my-auto cursor-pointer items-center">
        <Image
          src="/../public/airbnblogo.svg"
          alt="Airbnb"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Search bar */}
      <div className="flex items-center md:border rounded-full py-2 md:shadow-lg">
        <input
          className="pl-5 bg-transparent outline-none flex-grow placeholder-black"
          type="text"
          placeholder="Start your search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-airbnb-rausch text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-end text-gray-500 space-x-4">
        <p className="hidden md:inline-flex">Become a host</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>

      {/* searchbox */}
      {searchInput && (
        <div className="bg-white absolute w-[35rem] top-20 left-0 right-0 mx-auto shadow-2xl border border-gray-200 rounded-3xl px-16 py-10">
          <div className="text-center">
            <DateRange
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#FF5A5F"]}
              onChange={handleSelect}
            />
          </div>
          <div className="mt-5">
            <h1 className="font-semibold text-lg">Guests</h1>
            <div className="mt-2 space-y-2">
              {visitorTypes?.map(
                ({ key, title, subHeading, value, setterMethod }) => (
                  <IncrementButtons
                    key={key}
                    title={title}
                    subHeading={subHeading}
                    value={value}
                    setterMethod={setterMethod}
                  />
                )
              )}
            </div>
          </div>
          <div className="mt-7 flex justify-around">
            <button
              className="px-10 py-2 border border-black rounded-3xl"
              type="button"
              onClick={() => setSearchInput("")}
            >
              Clear
            </button>
            <button
              className="px-10 py-2 border border-black rounded-3xl"
              onClick={() => {
                router.push({
                  pathname: "/search",
                  query: {
                    location: encodeURI(searchInput),
                    startDate: encodeURI(startDate.toISOString()),
                    endDate: encodeURI(endDate.toISOString()),
                    adults: adultVisitors,
                    children: childVisitors,
                    infants: infantVisitors,
                    pets: petVisitors,
                  },
                });
              }}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
