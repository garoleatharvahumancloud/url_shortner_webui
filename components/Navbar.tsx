"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if token exists in the browser
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/"; // redirect after logout
  };

  return (
    <nav className="w-full flex items-center justify-between px-10 py-4 bg-white shadow-sm">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wide text-[#224fa2]">
        <Link href="/">Cloud62.hc</Link>
      </div>

      {/* Right to left section */}
      <div className="flex items-center gap-6">
        {isLoggedIn ? (
          <>
            {/* Dashboard button appears ONLY when logged in */}
            <button className="font-semibold tracking-wide text-white bg-[#224fa2] py-1.5 px-4 rounded-lg hover:bg-[#3a63b0]">
              <Link href="/history">Dashboard</Link>
            </button>

            {/* Logout Button */}
            <Button
              onClick={handleLogout}
              className="rounded-lg bg-red-500 hover:bg-red-600 text-white px-6"
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            {/* If NOT logged in → show login + signup */}
            <button className="font-semibold tracking-wide text-[#224fa2] hover:text-[#3a63b0]">
              <Link href="/login">Log in</Link>
            </button>

            <Button className="rounded-lg bg-[#224fa2] hover:bg-[#3a63b0] text-white px-6">
              <Link href="/signup">Sign up</Link>
            </Button>
          </>
        )}
      </div>
    </nav>
  );
}
