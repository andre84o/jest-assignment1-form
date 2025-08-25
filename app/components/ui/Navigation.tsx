"use client";
import Link from "next/link";
import Image from "next/image"; //A

export default function Navigation() {
  return (
    <nav data-testid="navigation" className="w-full">
      <div className="mx-auto px-3 sm:px-4 lg:px-6">
        
        <div className="flex flex-wrap items-center justify-center w-full">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6">
            <Link href="/">
              <button className=" px-4 py-1 rounded text-white text-sm sm:text-base hover:text-gray-600 hover:scale-110 active:scale-95 transition whitespace-nowrap">
                Home
              </button>
            </Link>

            <Link href="/form">
              <button className="px-4 py-1 rounded text-white text-sm sm:text-base hover:text-gray-600 hover:scale-110 active:scale-95 transition whitespace-nowrap">
                Form
              </button>
            </Link>
            <Link href="/feedbacks">
              <button className="px-4 py-1 rounded text-white text-sm sm:text-base hover:text-gray-600 hover:scale-110 active:scale-95 transition whitespace-nowrap">
                Feedbacks
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
