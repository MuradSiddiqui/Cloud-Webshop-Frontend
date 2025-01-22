import {
  CopyrightIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="container-p flex items-center py-2 bg-secondary justify-between">
      <div className="flex gap-4 items-center  text-gray-700">
        <Link href={"/"}>
          <GithubIcon className="w-6 h-6 hover:text-black" />
        </Link>
        <Link href={"/"}>
          <InstagramIcon className="w-6 h-6 hover:text-black" />
        </Link>
        <Link href={"/"}>
          <LinkedinIcon className="w-6 h-6 hover:text-black" />
        </Link>
      </div>
      <div className="flex items-center gap-1 text-sm cursor-default">
        <CopyrightIcon className="w-3.5 h-3.5 " /> Zee Store. All rights
        reserved.
      </div>
    </div>
  );
};

export default Footer;
