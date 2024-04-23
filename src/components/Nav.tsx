"use client"

import Image from "next/image";
import { ModeToggle } from "./ui/toggle-theme";


export default function Nav() {
  return (
    <header>
        <nav>
            <ul className="flex items-center justify-center gap-4 p-2">
                <Image 
                    src="/2.svg"
                    alt="Sunset Digital logo"
                    width={100}
                    height={30}
                    priority
                />
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                   <ModeToggle />
                </li>

            </ul>
        </nav>
    </header>
  );
}