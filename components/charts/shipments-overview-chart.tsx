"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { day: "Mon", shipments: 22 },
  { day: "Tue", shipments: 34 },
  { day: "Wed", shipments: 28 },
  { day: "Thu", shipments: 40 },
  { day: "Fri", shipments: 31 },
];

export function ShipmentsOverviewChart() {
  return (
    <div className="h-64 w-full rounded-md border p-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="shipments" fill="#2563eb" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
