"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-4 md:px-10 py-4 bg-white">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wide text-[#224fa2]">
        <Link href="/">Cloud62.hc</Link>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        <button className="font-semibold tracking-wide text-[#224fa2] hover:text-[#3a63b0]">
            <Link href="/login">Log in</Link>
        </button>

        <Button className="rounded-lg bg-[#224fa2] hover:bg-[#3a63b0] text-white px-6">
          <Link href="/signup">Sign up</Link>
        </Button>
      </div>
    </nav>
  );
}
