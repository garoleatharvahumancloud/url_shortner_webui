"use client";

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Link, Copy } from "lucide-react"
import { useState } from "react";


export function UrlShortenCard() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  return (
    <Card className="w-[420px] p-6 shadow-xl rounded-2xl justify-center items-center" >
      <CardContent className="space-y-6">

        {/* Long URL Section */}
        <div className="space-y-2">
          <Label className="flex items-center gap-2 text-sm font-medium">
            <Link size={16} /> Enter your URL here
          </Label>

          <Input
            placeholder="https://example.com/asdfasdfasdf"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            className="h-11"
          />
        </div>

        {/* Shortened URL Output Section */}
        <div className="space-y-2">
        <Label className="flex items-center gap-2 text-sm font-medium">
            <Link size={16} /> Your shortened link
        </Label>

        <div className="flex w-full items-center">
        <Input
            readOnly
            value={shortUrl}
            placeholder="cloud62.hc/xyz"
            className="rounded-r-none border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        />

        <Button
            variant="outline"
            className="rounded-l-none border-l border-gray-300 border"
        >
            <Copy size={16} />
        </Button>
        </div>

        </div>



        {/* Footer Buttons */}
        <div className="flex justify-center items-center pt-2">
        <Button className="bg-[#224fa2] hover:bg-[#3A63B0] text-white w-80 h-10">
            Shorten It
        </Button>
        </div>


      </CardContent>
    </Card>
  );
}