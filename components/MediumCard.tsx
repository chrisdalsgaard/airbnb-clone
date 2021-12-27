import Image from "next/image";

export default function MediumCard({ title, url, backgroundUrl, buttonText }) {
  return (
    <div className="w-full h-[50rem] mt-10 md:h-[30rem] lg:h-[42rem] xl:h-[48rem] max-w-3xl rounded-2xl overflow-hidden">
      <div className="relative w-full h-full">
        <Image
          src={`${backgroundUrl}`}
          layout="fill"
          objectFit="cover"
          alt="something"
          objectPosition={"center center"}
        />
        <div className="absolute m-10 lg:m-20">
          <h1 className="text-white text-4xl w-52 lg:w-72 sm:text-3xl lg:font-semibold xl:text-5xl">
            {title}
          </h1>
          <button className="mt-5 text-black px-7 py-3 bg-white rounded-xl hover:bg-gray-200">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
