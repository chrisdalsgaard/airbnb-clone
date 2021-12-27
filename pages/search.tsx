import { useRouter } from "next/router";
import { stringify } from "querystring";
import { useEffect, useState } from "react";
import { json } from "stream/consumers";

export default function Search() {
  const router = useRouter();

  useEffect(() => {
    if (router.query) {
      console.log(router.query);
      console.log(
        `url route is: ${router.route} ---> the query params are: ${stringify(
          router.query
        )}`
      );
    }
  }, [router]);

  return (
    <div>
      <p>hello from search</p>
    </div>
  );
}
