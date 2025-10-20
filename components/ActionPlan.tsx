"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Clock, User, CheckCircle2, Circle, Timer } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { sampleCountermeasures } from "@/lib/mockData";

export const ActionPlan = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case "in-progress":
        return <Timer className="h-4 w-4 text-orange-500" />;
      default:
        return <Circle className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "completed":
        return "success";
      case "in-progress":
        return "warning";
      default:
        return "secondary";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="space-y-6"
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-red-500" />
            Countermeasure Action Plan
          </CardTitle>
          <CardDescription>
            Recommended actions to address identified root causes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sampleCountermeasures.map((action, index) => (
              <motion.div
                key={action.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 border rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(action.status)}
                    <Badge variant={getStatusVariant(action.status)}>
                      {action.status.replace("-", " ").toUpperCase()}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{action.deadline}</span>
                  </div>
                </div>
                <h4 className="font-semibold mb-3">{action.action}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Responsible:</span>
                    <span className="font-medium">{action.responsible}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Verification:</span>
                  </div>
                </div>
                <div className="mt-2 p-3 bg-muted/50 rounded-lg text-sm">
                  {action.verification}
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

