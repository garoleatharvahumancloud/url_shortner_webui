"use client"

import { useState } from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ClipboardCopy, Check } from "lucide-react"
import { toast } from "sonner"
import { AnalyticsChart } from "./Analyticschart"

const urls = [
  {
    id: "1",
    longUrl: "https://example.com/very-long-url-example-test",
    shortUrl: "https://Cloud62.ly/abc123",
    createdAt: "2025-01-01",
    clicks: 12,
  },
]

const analyticsData = [
  { date: "01 Jan", hits: 3 },
  { date: "02 Jan", hits: 7 },
  { date: "03 Jan", hits: 5 },
  { date: "04 Jan", hits: 9 },
  { date: "05 Jan", hits: 12 },
]

export default function HistoryPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const handleCopy = async (urlId: string, text: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedId(urlId)
    toast.success("Short URL copied!")

    setTimeout(() => setCopiedId(null), 1000)
  }

  return (
    <div className="p-6 md:p-10 w-[90%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        <div className="md:col-span-4">
          <Card>
            <CardHeader>
              <CardTitle>Your URL History</CardTitle>
            </CardHeader>

            <CardContent className="max-h-[480px] overflow-y-auto pr-2">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Long URL</TableHead>
                    <TableHead>Short URL</TableHead>
                    <TableHead>Clicks</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {urls.map((url) => (
                    <TableRow key={url.id}>
                      <TableCell className="max-w-xs truncate">
                        {url.longUrl}
                      </TableCell>

                      <TableCell>
                        <a
                          href={url.shortUrl}
                          className="text-blue-600 hover:underline"
                        >
                          {url.shortUrl}
                        </a>
                      </TableCell>

                      <TableCell>{url.clicks}</TableCell>
                      <TableCell>{url.createdAt}</TableCell>

                      <TableCell className="flex justify-end items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="relative"
                          onClick={() => handleCopy(url.id, url.shortUrl)}
                        >
                          {copiedId === url.id ? (
                            <Check className="h-4 w-4 text-green-600" />
                          ) : (
                            <ClipboardCopy className="h-4 w-4" />
                          )}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-2">
          <AnalyticsChart dataPoints={analyticsData} />
        </div>
      </div>
    </div>
  )
}
