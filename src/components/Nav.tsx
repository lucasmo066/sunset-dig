"use client"

import Image from "next/image";
import { ModeToggle } from "./ui/toggle-theme";


export default function Nav() {
  return (
    <header>
        <nav>
            <ul className="flex items-center justify-center gap-4 p-8">
                <Image 
                    src="/vercel.svg"
                    alt="logo"
                    width={100}
                    height={50}
                    className="dark:invert"
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