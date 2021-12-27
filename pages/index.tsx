import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import FullBackgroundSection from "../components/FullBackgroundSection";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

const Home: NextPage = ({ inspirationLocationsHearby }) => {
  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
        <meta name="description" content="Airbnb clone project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="bg-black pb-64 w-full">
        <div className="md:pt-20 mx-5 lg:mx-20">
          <Banner />
        </div>
      </div>

      <div className="mx-5 lg:mx-20 relative -top-44 rounded-lg">
        <LargeCard />
      </div>

      <main className="mx-auto w-full">
        <section className="-mt-20 w-full">
          <div className="sm:mx-10">
            <h2 className="text-3xl lg:text-4xl mx-5 font-semibold">
              Inspiration for your next trip
            </h2>
            <div className="flex snap-center space-x-5 first-of-type:ml-5 last-of-type:mr-5 m-0 mt-10 overflow-scroll scrollbar-hide">
              {inspirationLocationsHearby?.map((item: location) => (
                <SmallCard
                  key={item.id}
                  locationName={item.locationName}
                  LocationDistance={item.distanceFromlocation}
                  distanceUnit={item.distanceUnit}
                  imageUrl={item.imageUrl}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="my-28 mx-5 sm:mx-10">
          <h2 className="text-3xl lg:text-4xl font-semibold">
            Discover Airbnb Experiences
          </h2>
          <div className="md:flex md:justify-center md:space-x-5">
            <MediumCard
              title="Things to do on your trip"
              url=""
              backgroundUrl="https://a0.muscache.com/im/pictures/b2f98185-f3bf-40db-ba8d-da0bceeccc65.jpg"
              buttonText="Experiences"
            />
            <MediumCard
              title="Things to do
            from home"
              url=""
              backgroundUrl="https://a0.muscache.com/im/pictures/cae7ae9a-d069-4c6a-9267-795643472df1.jpg"
              buttonText="Online Experiences"
            />
          </div>
        </section>

        <section className="lg:mx-10">
          <FullBackgroundSection
            title="Questions about hosting?"
            backgroundUrl="https://a0.muscache.com/im/pictures/cca24f3f-8f66-4e9d-98d8-dd5cda8911eb.jpg?im_w=2560"
            buttonText="Ask a Superhost"
            url=""
          />
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Home;

interface location {
  id: number;
  locationName: string;
  distanceFromlocation: number;
  distanceUnit: string;
  imageUrl: string;
}

export async function getStaticProps() {
  const inspirationLocationsHearby: location[] = [
    {
      id: 1,
      locationName: "Sankt Moritz",
      distanceFromlocation: 138,
      distanceUnit: "km",
      imageUrl:
        "https://a0.muscache.com/im/pictures/73250991-433e-4950-b7d1-59bba711bb57.jpg",
    },
    {
      id: 2,
      locationName: "Laxx",
      distanceFromlocation: 82,
      distanceUnit: "km",
      imageUrl:
        "https://a0.muscache.com/im/pictures/aef20929-0d6a-40e7-8ac9-321ff0edf8c9.jpg",
    },
    {
      id: 3,
      locationName: "Zürich",
      distanceFromlocation: 1,
      distanceUnit: "km",
      imageUrl:
        "https://a0.muscache.com/im/pictures/3ede12ab-f12d-43e4-9e1d-a12a8cf5c277.jpg",
    },
    {
      id: 4,
      locationName: "Engelberg",
      distanceFromlocation: 62,
      distanceUnit: "km",
      imageUrl:
        "https://a0.muscache.com/im/pictures/1cdb5298-1e10-4d5a-ac27-20c80b53b4af.jpg",
    },
  ];

  return {
    props: {
      inspirationLocationsHearby,
    },
  };
}
