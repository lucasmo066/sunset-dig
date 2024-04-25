"use client"

import Image from "next/image";
import { ModeToggle } from "./ui/toggle-theme";


export default function Nav() {
  return (
    <header>
        <nav>
            <ul className="flex items-center justify-around gap-4 p-2">
                <Image 
                    src="/5.svg"
                    alt="Sunset Digital logo"
                    width={100}
                    height={30}
                    priority
                />
                <div className="flex items-center text-center text-md sm:text-lg lg:text-xl justify-center font-light gap-6">
                <li>
                    <a href="/about">About ^</a>
                    {/* need to make this one of those pop up hovers that shows an image of the sections and shit, add a chevron down next to this too */}
                </li>
                <li>
                    <a href="/services">Pricing</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
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