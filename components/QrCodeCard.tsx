"use client";

import { Card, CardContent } from "@/components/ui/card";

export function QrCodeCard() {
  return (
    <Card className="w-80 h-80 shadow-xl rounded-2xl ml-2">
      <CardContent className="h-full flex items-center justify-center p-4">
        {/* Make the inner box a perfect square */}
        <div className="aspect-square w-full flex items-center justify-center border border-neutral-300 rounded-lg bg-neutral-50">
          <span className="text-neutral-400 text-sm">
            QR Code will appear here
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
