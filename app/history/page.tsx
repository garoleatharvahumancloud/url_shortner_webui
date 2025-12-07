"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ClipboardCopy, Check } from "lucide-react";
import { toast } from "sonner";
import { AnalyticsChart } from "./Analyticschart";

import { getMyLinks, getDashboardAnalytics } from "@/app/api/methods";
import ProtectedRoute from "@/components/ProtectedRoute";


export default function HistoryPage() {
  return (
    <ProtectedRoute>
      <HistoryPageContent />
    </ProtectedRoute>
  );
}

function HistoryPageContent() {
  const router = useRouter();

  const [urls, setUrls] = useState<any[]>([]);
  const [dailyAnalytics, setDailyAnalytics] = useState<any[]>([]);
  const [monthlyAnalytics, setMonthlyAnalytics] = useState<any[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const links = await getMyLinks();
        setUrls(links);

        const analytics = await getDashboardAnalytics();
        setDailyAnalytics(
          Array.isArray(analytics.daily)
            ? analytics.daily.map((d: any) => ({ label: d.label, value: d.value }))
            : []
        )


        setMonthlyAnalytics(
          Array.isArray(analytics.monthly)
            ? analytics.monthly.map((d: any) => ({ date: d.label, hits: d.value }))
            : []
        );

        // ❌ Remove these lines! They reference undefined variables
        // setDailyAnalytics(dailyDataPoints);
        // setMonthlyAnalytics(monthlyDataPoints);

      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to load data");
      }
    }

    fetchData();
  }, []);

  const handleCopy = async (urlId: string, text: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(urlId);
    toast.success("Short URL copied!");
    setTimeout(() => setCopiedId(null), 1000);
  };

  return (
    <div className="p-6 md:p-10 w-[90%] mx-auto">
      {/* Home Button */}
      <div className="flex justify-end mb-4">
        <Button
          onClick={() => router.push("/")}
          className="bg-[#224fa2] hover:bg-[#3A63B0] text-white"
        >
          Home
        </Button>
      </div>

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
                    <TableRow key={url.shortCode}>
                      <TableCell className="max-w-xs truncate">
                        {url.originalUrl}
                      </TableCell>

                      <TableCell>
                        <a
                          href={"localhost/8080/"+url.shortCode}
                          className="text-blue-600 hover:underline"
                        >
                          {"localhost/8080/"+url.shortCode}
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
          {/* Use dailyAnalytics or monthlyAnalytics */}
          <AnalyticsChart dataPoints={dailyAnalytics} />
        </div>
      </div>
    </div>
  );
}

