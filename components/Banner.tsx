import Image from "next/image";
import LargeCard from "./LargeCard";

export default function Banner() {
  return (
    <div className="relative h-screen md:h-[70vh] lg:h-screen md:rounded-xl overflow-hidden">
      <Image
        src="https://a0.muscache.com/im/pictures/53e51dcb-8fad-4ce8-b61c-8a7a369267bf.jpg?im_q=highq&im_w=2560"
        alt="Hero banner"
        layout="fill"
        objectFit="cover"
        width={2560}
        height={1280}
      />
      <div className="absolute top-2/3 w-full text-center">
        <p className="text-4xl  md:text-3xl lg:text-5xl text-white">
          Not sure where to go? Perfect.
        </p>
        <button className="mt-9 bg-white px-5 lg:px-8 py-3 lg:py-4 shadow-md hover:shadow-xl rounded-full font-bold hover:scale-110 ease-in-out duration-150">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6F019C] to-[#C6017E]">
            I'm flexible
          </span>
        </button>
      </div>
    </div>
  );
}
