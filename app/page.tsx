import Navbar from "@/components/Navbar";
import { UrlShortenCard } from "@/components/UrlShortenCard";
import { QrCodeCard } from "@/components/QrCodeCard";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-linear-to-t from-blue-200 from-40% via-blue-100 via-60% to-white to-90%">
      <Navbar />

      {/* Main Layout Container */}
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto py-20 px-10">

        {/* Left side - Card */}
        <div className="flex-1 flex justify-center">
          <UrlShortenCard />
          <QrCodeCard />
        </div>


      </div>
    </div>
  );
}
