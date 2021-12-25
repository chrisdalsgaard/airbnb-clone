import { GlobeAltIcon } from "@heroicons/react/outline";

export default function Footer() {
  return (
    <div className="mt-10 w-full p-5 font-thin border border-t-gray-200 sm:border-0 text-sm leading-9 divide-y-[1px] lg:divide-y-0 divide-gray-200  lg:grid lg:grid-cols-4">
      <div className=" pb-5 space-y-2">
        <h1 className="font-semibold">Support</h1>
        <ul className="sm:columns-3 lg:columns-1">
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">Safety information</a>
          </li>
          <li>
            <a href="#">Cancellation options</a>
          </li>
          <li>
            <a href="#">Our COVID-19 Response</a>
          </li>
          <li>
            <a href="#">Supporting people with disabilities</a>
          </li>
          <li>
            <a href="#">Report a neighborhood concern</a>
          </li>
        </ul>
      </div>
      <div className="pt-5 lg:pt-0 pb-5 space-y-2">
        <ul className="sm:columns-3 lg:columns-1">
          <h1 className="font-semibold">Community</h1>
          <li>
            <a href="#">Airbnb.org: disaster relief housing</a>
          </li>
          <li>
            <a href="#">Support Afghan refugees</a>
          </li>
          <li>
            <a href="#">Celebrating diversity &#38; belonging</a>
          </li>
          <li>
            <a href="#">Combating discrimination</a>
          </li>
        </ul>
      </div>
      <div className="pt-5 lg:pt-0 pb-5 space-y-2">
        <ul className="sm:columns-3 lg:columns-1">
          <h1 className="font-semibold">Hosting</h1>
          <li>
            <a href="#">Try hosting</a>
          </li>
          <li>
            <a href="#">AirCover: protection for Hosts</a>
          </li>
          <li>
            <a href="#">Explore hosting resources</a>
          </li>
          <li>
            <a href="#">Visit our community forum</a>
          </li>
          <li>
            <a href="#">How to host responsibly</a>
          </li>
        </ul>
      </div>
      <div className="pt-5 lg:pt-0 pb-5 space-y-2">
        <ul className="sm:columns-3 lg:columns-1">
          <h1 className="font-semibold">About</h1>
          <li>
            <a href="#">Newsroom</a>
          </li>
          <li>
            <a href="#">Learn about new features</a>
          </li>
          <li>
            <a href="#">Letter from our founders</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Investors</a>
          </li>
          <li>
            <a href="#">Airbnb Luxe</a>
          </li>
        </ul>
      </div>
      <div className="pt-5 lg:pt-0 pb-5 space-y-2">
        <div className="space-x-7 flex">
          <div className="flex items-center space-x-2">
            <GlobeAltIcon className="w-5 h-5" />
            <button className="underline">English (US)</button>
          </div>
          <button className="underline">USD</button>
        </div>
        <p>&copy; 2021 Airbnb, Inc.</p>
        <div className="space-x-2">
          <a href="#">Privacy</a>
          <span>&middot;</span>
          <a href="#">Terms</a>
          <span>&middot;</span>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </div>
  );
}
