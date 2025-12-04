"use client";

import { QRCodeSVG } from "qrcode.react";

export default function QrCodeGeneration({ url }: { url: string }) {
  return <QRCodeSVG value={url} size={200}/>;
}