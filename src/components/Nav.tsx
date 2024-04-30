"use client"

import Image from "next/image";
import { ModeToggle } from "./ui/toggle-theme";

export default function Nav() {
  return (
    <header className="">
      <nav className="">
        <ul className="flex items-center justify-around gap-4 p-2">
          <Image 
            src="/5.svg"
            alt="Sunset Digital logo"
            width={100}
            height={30}
            priority
          />
          <div className="flex items-center text-primary text-center text-md sm:text-lg lg:text-xl justify-center font-mono gap-2 sm:gap-10">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </div>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
