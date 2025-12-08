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
  const safeData = Array.isArray(dataPoints) ? dataPoints : []
 
  const labels = safeData.map((d: any) => d.label)
  const hits = safeData.map((d: any) => d.value)
 
  const chartData = {
    labels,
    datasets: [
      {
        label: "Total Clicks",
        data: hits,
        borderColor: "rgba(59,130,246,1)",
        backgroundColor: "rgba(59,130,246,0.3)",
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 4,
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
    <div className="w-full">
      <Card className="rounded-2xl shadow-lg border-0  from-[#f5faff] to-[#e6efff] backdrop-blur-md">
        <CardHeader
>
          <CardTitle className="text-lg font-semibold tracking-wide">
            Analytics Overview No of Links for your URL
          </CardTitle>
        </CardHeader>
 
        <CardContent className="h-72 pt-6">
          <div className="bg-white/60 backdrop-blur-md rounded-xl p-4 shadow-inner h-full flex items-center">
            <Line data={chartData} options={chartOptions} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}