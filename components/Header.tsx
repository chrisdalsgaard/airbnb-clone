import Image from "next/image";
import {
  SearchIcon,
  UsersIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
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
    </header>
  );
}
