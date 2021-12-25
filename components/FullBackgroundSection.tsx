import Image from "next/image";

export default function FullBackgroundSection({
  title,
  backgroundUrl,
  buttonText,
  url,
}) {
  return (
    <section className="w-full h-[44rem] relative lg:rounded-2xl overflow-hidden">
      <Image
        src={`${backgroundUrl}`}
        layout="fill"
        objectFit="cover"
        alt="background cover"
        objectPosition={"center center"}
      />
      <div className="absolute m-10 w-11">
        <h1 className="text-white text-5xl font-semibold">{title}</h1>
      </div>
      <div>
        <button className="absolute bg-white px-5 py-3 rounded-lg bottom-10 left-5 hover:bg-gray-100">
          {buttonText}
        </button>
      </div>
    </section>
  );
}
