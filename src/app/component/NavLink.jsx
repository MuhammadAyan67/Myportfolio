"use client"; // Required for client-side behavior in Next.js (if using App Router)

import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const NavLink = ({ href, title }) => {
  // Check if href is an internal section (e.g., "#about")
  const isInternalSection = href.startsWith("#");

  if (isInternalSection) {
    return (
      <ScrollLink
        to={href.replace("#", "")} // Remove '#' for react-scroll
        smooth={true}
        offset={-50} // Adjust for navbar height
        duration={500}
        className="mr-5 transition ease-in-out delay-150 cursor-pointer hover:-translate-y-1 duration-300 hover:text-white relative inline-block text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full py-2 pl-3 hover:scale-110 pr-4 sm:text-xl rounded md:p-0"
      >
        {title}
      </ScrollLink>
    );
  }

  return (
    <Link
      href={href} // For normal Next.js navigation
      className="mr-5 transition ease-in-out delay-150 cursor-pointer hover:-translate-y-1 duration-300 hover:text-white relative inline-block text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full py-2 pl-3 hover:scale-110 pr-4 sm:text-xl rounded md:p-0"
    >
      {title}
    </Link>
  );
};

export default NavLink;
