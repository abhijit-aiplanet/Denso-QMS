"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { GitCompare, User, Settings, Package, Ruler, Thermometer } from "lucide-react";
import { sampleChangeLogs, changeImpactCorrelation } from "@/lib/mockData";

const categoryIcons = {
  Man: User,
  Machine: Settings,
  Material: Package,
  Method: GitCompare,
  Measurement: Ruler,
  Environment: Thermometer,
};

export const ChangeAnalysis = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="space-y-6"
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitCompare className="h-5 w-5 text-green-500" />
            5M1E Change Log Analysis
          </CardTitle>
          <CardDescription>
            Process changes detected within incident time window (±7 days)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {sampleChangeLogs.map((change, index) => {
              const Icon = categoryIcons[change.category];
              return (
                <motion.div
                  key={change.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:shadow-md transition-shadow bg-white dark:bg-gray-800"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                        <Icon className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{change.category}</Badge>
                          <Badge
                            variant={
                              change.impact === "High"
                                ? "destructive"
                                : change.impact === "Medium"
                                ? "warning"
                                : "secondary"
                            }
                          >
                            {change.impact} Impact
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 font-medium">{change.date}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm mb-2 text-gray-900 dark:text-gray-100 font-medium">{change.description}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Changed by: {change.changedBy}</p>
                </motion.div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart className="h-5 w-5 text-orange-500" />
            Correlation Analysis
          </CardTitle>
          <CardDescription>
            Statistical correlation between changes and defect rate increase
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={changeImpactCorrelation} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 1]} />
                <YAxis dataKey="change" type="category" width={120} />
                <Tooltip />
                <Legend />
                <Bar dataKey="correlation" name="Correlation Coefficient" radius={[0, 8, 8, 0]}>
                  {changeImpactCorrelation.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        entry.correlation > 0.7
                          ? "#dc2626"
                          : entry.correlation > 0.5
                          ? "#ea580c"
                          : "#2563eb"
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-sm font-medium">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-600 rounded"></div>
              <span>High (&gt;0.7)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-600 rounded"></div>
              <span>Medium (0.5-0.7)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-600 rounded"></div>
              <span>Low (&lt;0.5)</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

