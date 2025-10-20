"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, TrendingDown, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { sampleKPIs } from "@/lib/mockData";

export const KPIDashboard = () => {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "improving":
        return <TrendingDown className="h-4 w-4 text-green-500" />;
      case "degrading":
        return <TrendingUp className="h-4 w-4 text-red-500" />;
      default:
        return <Activity className="h-4 w-4 text-blue-500" />;
    }
  };

  const getChangePercentage = (before: number, after: number, name: string) => {
    // For metrics where lower is better (like defect rate, MTTR)
    const lowerIsBetter = ["Helium Leak NG Rate", "Mean Time To Repair", "Defect Rate (PPM)"];
    const isLowerBetter = lowerIsBetter.includes(name);
    
    const change = ((after - before) / before) * 100;
    const absoluteChange = Math.abs(change);
    const isImproving = isLowerBetter ? change < 0 : change > 0;
    
    return {
      value: absoluteChange.toFixed(1),
      isPositive: isImproving,
    };
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.0 }}
      className="space-y-6"
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-indigo-500" />
            KPI Performance Tracking
          </CardTitle>
          <CardDescription>
            7-day comparison showing impact of countermeasures
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sampleKPIs.map((kpi, index) => {
              const change = getChangePercentage(kpi.before, kpi.after, kpi.name);
              const isTargetMet = 
                kpi.name.includes("Rate") || kpi.name.includes("Repair") || kpi.name.includes("Defect")
                  ? kpi.after <= kpi.target
                  : kpi.after >= kpi.target;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-5 border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-600 dark:text-gray-300 mb-1">
                        {kpi.name}
                      </h4>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-gray-900 dark:text-gray-100">{kpi.after}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{kpi.unit}</span>
                      </div>
                    </div>
                    {getTrendIcon(kpi.trend)}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-700 dark:text-gray-300">Previous:</span>
                      <span className="font-medium text-gray-900 dark:text-gray-100">{kpi.before} {kpi.unit}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-700 dark:text-gray-300">Target:</span>
                      <span className="font-medium text-gray-900 dark:text-gray-100">{kpi.target} {kpi.unit}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-700 dark:text-gray-300">Change:</span>
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-semibold ${
                            change.isPositive ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {change.isPositive ? "↓" : "↑"} {change.value}%
                        </span>
                        <Badge variant={isTargetMet ? "success" : "warning"}>
                          {isTargetMet ? "Target Met" : "In Progress"}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${Math.min(
                          100,
                          (kpi.after / kpi.target) * (kpi.name.includes("Yield") ? 100 : 50)
                        )}%`,
                      }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      className={`h-full ${
                        isTargetMet ? "bg-green-500" : "bg-orange-500"
                      }`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <div className="mt-6 p-4 bg-green-50 dark:bg-green-950/30 border-2 border-green-500 dark:border-green-600 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="p-1.5 bg-green-100 dark:bg-green-900/50 rounded">
                <TrendingDown className="h-5 w-5 text-green-700 dark:text-green-400" />
              </div>
              <div>
                <p className="font-bold text-sm text-green-950 dark:text-green-100">
                  Positive Trend Detected
                </p>
                <p className="text-sm text-gray-900 dark:text-gray-100 mt-1 font-medium">
                  All KPIs showing improvement after countermeasure implementation. Leak rate reduced by
                  61.7%, FPY improved by 3.8%, and MTTR decreased by 33.5%. Continue monitoring for
                  sustained improvement.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

