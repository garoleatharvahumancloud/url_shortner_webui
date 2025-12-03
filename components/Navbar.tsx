"use client";

import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-10 py-4  bg-white">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wide text-[#224fa2]">
        Cloud62.hc
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        <button className="font-semibold tracking-wide text-[#224fa2] hover:text-[#3a63b0]">
          Log in
        </button>

        <Button className="rounded-lg bg-[#224fa2] hover:bg-[#3a63b0] text-white px-6">
          Sign up
        </Button>
      </div>
    </nav>
  );
}
