import { useRouter } from "next/router";
import { useEffect } from "react";
import requests from "../utils/request";

const Nav = () => {
  const router = useRouter();
  useEffect(() => {
    console.log(router.asPath);
  }, [router.asPath]);
  return (
    <nav className="relative">
      <div className="flex whitespace-nowrap px-10 sm:px-20 space-x-10 sm:space-x-20 text-2xl overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            onClick={() => {
              router.push(`/?genre=${key}`);
            }}
            className="last:pr-24 cursor-pointer hover:text-white hover:scale-125 transition duration-100 transform active:text-red-500"
            key={key}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute bg-gradient-to-l from-[#06202A] w-1/12 h-10 right-0 top-0" />
      <div className="absolute bg-gradient-to-r from-[#06202A] w-1/12 h-10 left-0 top-0" />
    </nav>
  );
};

export default Nav;
