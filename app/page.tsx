import Navbar from "@/components/Navbar";
import { UrlShortenCard } from "@/components/UrlShortenCard";
import { QrCodeCard } from "@/components/QrCodeCard";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-linear-to-t from-blue-200 from-40% via-blue-100 via-60% to-white to-90%">
      <Navbar />

      {/* Main Layout Container */}
      <div className="w-full max-w-7xl mx-auto py-20 px-10">

        {/* Responsive layout wrapper */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">

          {/* URL Shorten Card */}
          <UrlShortenCard />

          {/* QR Code Card */}
          <QrCodeCard />

        </div>

      </div>
    </div>
  );
}
