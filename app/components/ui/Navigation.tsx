"use client";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav data-testid="navigation" className="flex items-center justify-between p-4">
      <Link href="/" aria-label="logo">
        <img src="/logo.svg" alt="logo" className="font-bold" />
      </Link>
      <div className="flex gap-3">
        <Link href="/">
          <button>Home</button>
        </Link>
        <Link href="/form">
          <button>Form</button>
        </Link>
        <Link href="/feedbacks">
          <button>Feedbacks</button>
        </Link>
      </div>
    </nav>
  );
}
