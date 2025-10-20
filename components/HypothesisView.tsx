"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, TrendingUp, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { sampleHypotheses } from "@/lib/mockData";

export const HypothesisView = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="space-y-6"
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-500" />
            AI-Generated Hypotheses
          </CardTitle>
          <CardDescription>
            Probable root causes ranked by confidence and supporting evidence
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sampleHypotheses.map((hypothesis, index) => (
              <motion.div
                key={hypothesis.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                className="p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      #{index + 1}
                    </span>
                    <Badge
                      variant={
                        hypothesis.confidence > 80
                          ? "destructive"
                          : hypothesis.confidence > 60
                          ? "warning"
                          : "secondary"
                      }
                    >
                      {hypothesis.confidence}% Confidence
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                    <span className="text-xs font-bold text-gray-700 dark:text-gray-300">Trending</span>
                  </div>
                </div>
                <h4 className="font-bold mb-3 text-gray-900 dark:text-gray-100">{hypothesis.description}</h4>
                <div className="space-y-2">
                  <p className="text-sm font-bold text-gray-700 dark:text-gray-300">
                    Supporting Evidence:
                  </p>
                  <ul className="space-y-1">
                    {hypothesis.evidence.map((evidence, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-800 dark:text-gray-200 font-medium">{evidence}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-300 dark:border-gray-600">
                  <p className="text-xs text-gray-700 dark:text-gray-300 font-semibold">
                    Related Changes:{" "}
                    {hypothesis.relatedChanges.map((change, idx) => (
                      <Badge key={idx} variant="outline" className="ml-1">
                        {change}
                      </Badge>
                    ))}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

