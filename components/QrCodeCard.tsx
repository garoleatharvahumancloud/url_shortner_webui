"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import QrCodeGeneration from "./QrCodeGeneration";


export function QrCodeCard() {
  const [shortUrl, setShortUrl] = useState("");

  useEffect(() => {
    function handler(event: any) {
      setShortUrl(event.detail);
    }

  window.addEventListener("short-url-generated", handler);
    return () => window.removeEventListener("short-url-generated", handler);
  }, []);
  const showQr = shortUrl.length > 0;
  return (
    <Card className="w-80 h-80 shadow-xl rounded-2xl ml-2">
      <CardContent className="h-full flex items-center justify-center p-4">
        {/* Make the inner box a perfect square */}
        <div className="aspect-square w-full flex items-center justify-center border border-neutral-300 rounded-lg bg-neutral-50">
          <span className="text-neutral-400 text-sm">
          {!showQr && (
            <img
              src="/placeholder.webp"
              className="w-60"
              alt="placeholder"
            />
          )}
          {showQr && <QrCodeGeneration url={shortUrl} />}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
