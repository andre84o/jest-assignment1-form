'use client'
import Navigation from "./Navigation";
import Hamburger from 'hamburger-react'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function Header() {
  const [isOpen, setOpen] = useState(false)
  return (
   <header data-testid="header" className="relative w-full bg-[#e1ccbe] font-bold text-white p-4 flex items-center justify-between">
  <div className="flex-shrink-0">
    <Link href="/">
    <Image
      src="/logoform.png"
      alt="logo"
      width={100}
      height={100}
      className="h-12 w-auto sm:h-14 md:h-16 lg:h-18"
      sizes="(max-width: 640px) 3rem, (max-width: 768px) 3.5rem, (max-width: 1024px) 4rem, 4.5rem"
      priority />
      </Link>
  </div>

  <div className="hidden sm:block">
    <Navigation />
  </div>

  <div className="sm:hidden flex items-center">
        <Hamburger toggled={isOpen} toggle={setOpen} />

        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-[#e1ccbe] p-4">
            <Navigation />
          </div>
        )}
      </div>
</header>
  );
}