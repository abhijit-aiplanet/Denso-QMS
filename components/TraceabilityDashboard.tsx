"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { TrendingUp, Factory, Wrench, Package2, AlertTriangle } from "lucide-react";
import { heliumLeakTrendData, sampleTraceability } from "@/lib/mockData";

export const TraceabilityDashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-6"
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package2 className="h-5 w-5 text-purple-500" />
            Production Traceability
          </CardTitle>
          <CardDescription>
            Production lineage and test results for affected units
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="p-4 border-2 rounded-lg bg-white dark:bg-gray-800 border-blue-300 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-2">
                <Factory className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <p className="text-xs font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wide">Production Line</p>
              </div>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">{sampleTraceability.productionLine}</p>
            </div>
            <div className="p-4 border-2 rounded-lg bg-white dark:bg-gray-800 border-orange-300 dark:border-orange-700">
              <div className="flex items-center gap-2 mb-2">
                <Wrench className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                <p className="text-xs font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wide">Machine</p>
              </div>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">{sampleTraceability.machine}</p>
            </div>
            <div className="p-4 border-2 rounded-lg bg-white dark:bg-gray-800 border-green-300 dark:border-green-700">
              <div className="flex items-center gap-2 mb-2">
                <Package2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                <p className="text-xs font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wide">Lot</p>
              </div>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">{sampleTraceability.lot}</p>
            </div>
            <div className="p-4 border-2 rounded-lg bg-white dark:bg-gray-800 border-red-300 dark:border-red-700">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
                <p className="text-xs font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wide">Test Result</p>
              </div>
              <p className="text-lg font-bold text-red-700 dark:text-red-300">
                {sampleTraceability.heliumTestResult.split(" ")[0]}
              </p>
            </div>
          </div>

          <div className="space-y-2 mb-6">
            <h4 className="font-bold text-sm text-gray-900 dark:text-gray-100">Production Details</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-gray-600 dark:text-gray-400">Date:</span>{" "}
                <span className="font-bold text-gray-900 dark:text-gray-100">{sampleTraceability.productionDate}</span>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-400">Shift:</span>{" "}
                <span className="font-bold text-gray-900 dark:text-gray-100">{sampleTraceability.shift}</span>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-400">Operator:</span>{" "}
                <span className="font-bold text-gray-900 dark:text-gray-100">{sampleTraceability.operator}</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-sm text-gray-900 dark:text-gray-100">Child Parts</h4>
            <div className="space-y-2">
              {sampleTraceability.childParts.map((part, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border-2 rounded-lg bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                >
                  <div>
                    <p className="font-bold text-sm text-gray-900 dark:text-gray-100">{part.partNumber}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">{part.supplier}</p>
                  </div>
                  <Badge variant="outline">{part.lot}</Badge>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-orange-500" />
            Helium Leak Test Trend Analysis
          </CardTitle>
          <CardDescription>
            AI detected spike in leak rate starting June 13th
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={heliumLeakTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis label={{ value: "Leak Rate (%)", angle: -90, position: "insideLeft" }} />
                <Tooltip />
                <Legend />
                <ReferenceLine y={2.0} stroke="#dc2626" strokeDasharray="3 3" label="Threshold" />
                <Line
                  type="monotone"
                  dataKey="leakRate"
                  stroke="#2563eb"
                  strokeWidth={3}
                  name="Leak Rate"
                  dot={{ r: 5, fill: "#2563eb" }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 p-4 bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-500 dark:border-orange-600 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="p-1.5 bg-orange-100 dark:bg-orange-900/50 rounded">
                <AlertTriangle className="h-5 w-5 text-orange-700 dark:text-orange-300" />
              </div>
              <div>
                <p className="font-bold text-base text-gray-900 dark:text-gray-100">
                  AI Insight
                </p>
                <p className="text-sm text-gray-900 dark:text-gray-100 mt-1 font-semibold">
                  Leak rate increased from 1.3% to 4.7% between June 12-15. The spike correlates
                  with recent process changes. Recommend immediate investigation of 5M1E factors.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

