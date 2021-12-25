import Image from "next/image";

export default function LargeCard() {
  return (
    <div className="overflow-hidden rounded-xl h-full w-full">
      {/* Large screen with grid verison */}

      <div className="hidden sm:inline">
        <Image
          src="https://a0.muscache.com/im/pictures/931d5140-30cd-4f96-a73a-cb31c76029a4.jpg?im_q=highq&im_w=2560"
          layout="responsive"
          width={2560}
          height={1280}
          alt="hello"
        />

        <div className="grid grid-cols-2 gap-0 absolute top-0 left-0 z-99 h-full w-full">
          <div className=" my-auto mx-auto text-center">
            <h3 className="text-base font-light">Introducing</h3>
            <h1 className="text-5xl lg:text-7xl 2xl:text-[6rem] mt-3 mx-auto font-semibold">
              Airbnb <br /> gift cards
            </h1>
            <button className="bg-gray-800 w-32 mx-auto rounded-lg mt-5 py-3 px-5 text-white hover:bg-black">
              Shop now
            </button>
          </div>
          <div className=""></div>
        </div>
      </div>

      {/* small screen layout */}

      <div className="sm:hidden w-full h-full relative">
        <Image
          src="https://a0.muscache.com/im/pictures/d6cecaa4-6334-40bc-a1aa-f4906ee2f724.jpg?im_q=highq&im_w=720"
          layout="responsive"
          width={720}
          height={1080}
          alt="hello"
        />
        <div className="absolute bottom-24 w-full text-center mx-auto">
          <h3 className="text-base font-light">Introducing</h3>
          <h1 className="text-5xl lg:text-7xl 2xl:text-[6rem] mt-3 mx-auto font-medium">
            Airbnb <br /> gift cards
          </h1>
          <button className="bg-gray-800 w-32 mx-auto rounded-lg mt-5 py-3 px-5 text-white hover:bg-black">
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
}
