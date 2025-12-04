import Navbar from "@/components/Navbar";
import { UrlShortenCard } from "@/components/UrlShortenCard";
import { QrCodeCard } from "@/components/QrCodeCard";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Main Layout Container */}
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto py-20 px-10">

        {/* Left side - Card */}
        <div className="flex-1 flex justify-center">
          <UrlShortenCard />
          <QrCodeCard />
        </div>

        {/* Right side - Illustration */}
        <div className=" flex-1 hidden md:flex justify-center">
          <Image
            src="/bgdsadf.jpg"   //image placeholder_ag
            alt="Illustration"
            width={450}
            height={450}
            className="object-contain"
          />
        </div>

      </div>
    </div>
  );
}
