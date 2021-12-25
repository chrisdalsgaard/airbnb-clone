import Image from "next/image";

export default function SmallCard({
  locationName,
  LocationDistance,
  distanceUnit,
  imageUrl,
}) {
  return (
    <div className="cursor-pointer">
      <div className="overflow-hidden w-64 lg:w-80 rounded-2xl">
        {/* card image */}
        <div className="relative h-44 lg:h-56">
          <Image
            src={`${imageUrl}`}
            alt={`Travel to ${locationName}`}
            layout="fill"
            objectPosition={"center center"}
          />
        </div>
        {/* card content */}
        <div className="h-44 lg:h-56 p-4 bg-airbnb-rausch text-white">
          <h1 className="font-bold text-xl">{locationName}</h1>
          <p>{`${LocationDistance} kilometers away`}</p>
        </div>
      </div>
    </div>
  );
}
