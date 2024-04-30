"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconCash, IconCircleChevronUp, IconHome, IconMessage, } from "@tabler/icons-react";


export function FloatingNavbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconCircleChevronUp className="h-12 w-12 text-neutral-500 dark:text-primary" />,
    },
    {
      name: "Pricing",
      link: "#pricing",
      icon: <IconCash className="h-8 w-8 text-neutral-500 dark:text-primary" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <IconMessage className="h-8 w-8 text-neutral-500 dark:text-primary" />
      ),
    },
  ];
  return (
    <div className="relative w-full z-100">
      <FloatingNav navItems={navItems} className="gap-6" />
    </div>
  );
}

