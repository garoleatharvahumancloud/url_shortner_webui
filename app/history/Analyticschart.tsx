"use client"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export function AnalyticsChart({ dataPoints }: { dataPoints: any }) {
  const labels = dataPoints.map((d: any) => d.date)
  const hits = dataPoints.map((d: any) => d.hits)

  const chartData = {
    labels,
    datasets: [
      {
        label: "Clicks / Hits",
        data: hits,
        borderColor: "rgba(34,79,162,1)",
        backgroundColor: "rgba(34,79,162,0.3)",
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { precision: 0 },
      },
    },
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Link Analytics</CardTitle>
      </CardHeader>

      <CardContent className="h-64">
        <Line data={chartData} options={chartOptions} />
      </CardContent>
    </Card>
  )
}
