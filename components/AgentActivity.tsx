"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Search,
  FileSearch,
  GitCompare,
  Lightbulb,
  Target,
  CheckCircle2,
  BarChart3,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { Badge } from "./ui/Badge";

interface Agent {
  id: string;
  name: string;
  icon: React.ElementType;
  status: "idle" | "working" | "completed";
  currentTask: string;
  progress: number;
  color: string;
}

export const AgentActivity = () => {
  const [agents, setAgents] = useState<Agent[]>([
    {
      id: "intake",
      name: "Intake Agent",
      icon: Search,
      status: "idle",
      currentTask: "Waiting for complaint",
      progress: 0,
      color: "bg-blue-500",
    },
    {
      id: "traceability",
      name: "Traceability Agent",
      icon: FileSearch,
      status: "idle",
      currentTask: "Ready to trace production lineage",
      progress: 0,
      color: "bg-purple-500",
    },
    {
      id: "change-scan",
      name: "Change Scan Agent",
      icon: GitCompare,
      status: "idle",
      currentTask: "Ready to scan 5M1E changes",
      progress: 0,
      color: "bg-green-500",
    },
    {
      id: "correlation",
      name: "Correlation Agent",
      icon: BarChart3,
      status: "idle",
      currentTask: "Ready to analyze correlations",
      progress: 0,
      color: "bg-orange-500",
    },
    {
      id: "hypothesis",
      name: "Hypothesis Agent",
      icon: Lightbulb,
      status: "idle",
      currentTask: "Ready to form hypotheses",
      progress: 0,
      color: "bg-yellow-500",
    },
    {
      id: "action",
      name: "Action Planner Agent",
      icon: Target,
      status: "idle",
      currentTask: "Ready to plan countermeasures",
      progress: 0,
      color: "bg-red-500",
    },
    {
      id: "verification",
      name: "Verification Agent",
      icon: CheckCircle2,
      status: "idle",
      currentTask: "Ready to verify actions",
      progress: 0,
      color: "bg-teal-500",
    },
    {
      id: "kpi",
      name: "KPI Reporter Agent",
      icon: Activity,
      status: "idle",
      currentTask: "Ready to track KPIs",
      progress: 0,
      color: "bg-indigo-500",
    },
  ]);

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "working":
        return "warning";
      case "completed":
        return "success";
      default:
        return "secondary";
    }
  };

  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5" />
          Agent Activity Monitor
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {agents.map((agent) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="relative"
              >
                <div className="p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 hover:shadow-lg transition-all hover:border-blue-300 dark:hover:border-blue-600">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div
                        className={`p-2 rounded-lg ${agent.color} bg-opacity-20 dark:bg-opacity-30`}
                      >
                        <agent.icon
                          className={`h-4 w-4 ${agent.color.replace(
                            "bg-",
                            "text-"
                          )}`}
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-gray-900 dark:text-gray-100">{agent.name}</p>
                      </div>
                    </div>
                    <Badge variant={getStatusBadgeVariant(agent.status)}>
                      {agent.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 font-medium">
                    {agent.currentTask}
                  </p>
                  {agent.status === "working" && (
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full ${agent.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${agent.progress}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </CardContent>
    </Card>
  );
};

