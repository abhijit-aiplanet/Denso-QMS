"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  ChevronRight,
  CheckCircle2,
  Play,
  RefreshCw,
  FileDown,
  Activity,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { AgentActivity } from "@/components/AgentActivity";
import { ComplaintIntake } from "@/components/ComplaintIntake";
import { TraceabilityDashboard } from "@/components/TraceabilityDashboard";
import { ChangeAnalysis } from "@/components/ChangeAnalysis";
import { HypothesisView } from "@/components/HypothesisView";
import { ActionPlan } from "@/components/ActionPlan";
import { KPIDashboard } from "@/components/KPIDashboard";

type WorkflowStage =
  | "welcome"
  | "intake"
  | "traceability"
  | "changes"
  | "hypothesis"
  | "actions"
  | "kpi"
  | "complete";

const stages = [
  { id: "intake", name: "Complaint Intake" },
  { id: "traceability", name: "Traceability" },
  { id: "changes", name: "5M1E Changes" },
  { id: "hypothesis", name: "Root Cause" },
  { id: "actions", name: "Countermeasures" },
  { id: "kpi", name: "KPI Tracking" },
];

export default function Home() {
  const [currentStage, setCurrentStage] = useState<WorkflowStage>("welcome");
  const [completedStages, setCompletedStages] = useState<Set<string>>(new Set());

  const handleStartAnalysis = () => {
    setCurrentStage("intake");
  };

  const handleComplaintSubmit = (data: any) => {
    setCompletedStages(new Set([...completedStages, "intake"]));
    setTimeout(() => setCurrentStage("traceability"), 500);
  };

  const handleNext = () => {
    const currentIndex = stages.findIndex((s) => s.id === currentStage);
    if (currentIndex < stages.length - 1) {
      setCompletedStages(new Set([...completedStages, currentStage]));
      setCurrentStage(stages[currentIndex + 1].id as WorkflowStage);
    } else {
      setCompletedStages(new Set([...completedStages, currentStage]));
      setCurrentStage("complete");
    }
  };

  const handleReset = () => {
    setCurrentStage("welcome");
    setCompletedStages(new Set());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">Denso Quality Management</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Agentic AI-Powered Root Cause Analysis
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-sm">
                PoC Version 1.0
              </Badge>
              {currentStage !== "welcome" && (
                <Button variant="outline" size="sm" onClick={handleReset}>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Reset
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      {currentStage !== "welcome" && currentStage !== "complete" && (
        <div className="bg-white/80 dark:bg-slate-950/80 border-b backdrop-blur-sm">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {stages.map((stage, index) => (
                <React.Fragment key={stage.id}>
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                        completedStages.has(stage.id)
                          ? "bg-green-600 text-white"
                          : currentStage === stage.id
                          ? "bg-blue-600 text-white"
                          : "bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      {completedStages.has(stage.id) ? (
                        <CheckCircle2 className="h-4 w-4" />
                      ) : (
                        <span>{index + 1}</span>
                      )}
                    </div>
                    <span
                      className={`text-sm font-medium hidden md:block ${
                        currentStage === stage.id
                          ? "text-blue-700 dark:text-blue-400 font-semibold"
                          : completedStages.has(stage.id)
                          ? "text-green-700 dark:text-green-400"
                          : "text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      {stage.name}
                    </span>
                  </div>
                  {index < stages.length - 1 && (
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <AnimatePresence mode="wait">
          {currentStage === "welcome" && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="border-2">
                <CardHeader className="text-center pb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="mx-auto mb-6 p-4 bg-primary/10 rounded-full w-fit"
                  >
                    <Brain className="h-16 w-16 text-primary" />
                  </motion.div>
                  <CardTitle className="text-4xl mb-4">
                    Welcome to Denso Quality Management System
                  </CardTitle>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    An intelligent, agentic AI system that accelerates root cause analysis from
                    weeks to hours by automatically analyzing production data, change logs, and
                    historical patterns.
                  </p>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-6 border rounded-lg bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-950/20">
                      <div className="mb-3 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                        <Brain className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="font-semibold mb-2">8 Specialized Agents</h3>
                      <p className="text-sm text-muted-foreground">
                        AI agents work in parallel to analyze traceability, changes, correlations,
                        and KPIs
                      </p>
                    </div>
                    <div className="p-6 border rounded-lg bg-gradient-to-br from-green-50 to-transparent dark:from-green-950/20">
                      <div className="mb-3 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                        <Activity className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="font-semibold mb-2">Real-Time Analysis</h3>
                      <p className="text-sm text-muted-foreground">
                        From complaint to actionable countermeasures in minutes, not days
                      </p>
                    </div>
                    <div className="p-6 border rounded-lg bg-gradient-to-br from-purple-50 to-transparent dark:from-purple-950/20">
                      <div className="mb-3 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                        <BarChart3 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <h3 className="font-semibold mb-2">Data-Driven Insights</h3>
                      <p className="text-sm text-muted-foreground">
                        Statistical correlation analysis with 5M1E methodology
                      </p>
                    </div>
                  </div>

                  <div className="p-6 bg-muted/50 rounded-lg border-2 border-dashed">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Play className="h-5 w-5 text-primary" />
                      How It Works
                    </h3>
                    <ol className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-primary">1.</span>
                        <span>
                          <strong>Enter complaint</strong> - Product details and defect description
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-primary">2.</span>
                        <span>
                          <strong>AI traces production</strong> - Links to exact machine, lot, and
                          test results
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-primary">3.</span>
                        <span>
                          <strong>Scans 5M1E changes</strong> - Identifies process changes around
                          the incident
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-primary">4.</span>
                        <span>
                          <strong>Forms hypotheses</strong> - Ranks root causes by confidence and
                          evidence
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-primary">5.</span>
                        <span>
                          <strong>Plans countermeasures</strong> - Actionable fixes with
                          verification steps
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-primary">6.</span>
                        <span>
                          <strong>Tracks KPIs</strong> - Monitors defect rates, FPY, MTTR to
                          confirm improvement
                        </span>
                      </li>
                    </ol>
                  </div>

                  <div className="flex justify-center pt-4">
                    <Button size="lg" onClick={handleStartAnalysis} className="text-lg px-8">
                      <Play className="h-5 w-5 mr-2" />
                      Start New Analysis
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {currentStage === "intake" && (
            <motion.div
              key="intake"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <AgentActivity />
              <ComplaintIntake onSubmit={handleComplaintSubmit} />
            </motion.div>
          )}

          {currentStage === "traceability" && (
            <motion.div
              key="traceability"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <AgentActivity />
              <TraceabilityDashboard />
              <div className="flex justify-end">
                <Button onClick={handleNext}>
                  Next: Analyze Changes
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          )}

          {currentStage === "changes" && (
            <motion.div
              key="changes"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <AgentActivity />
              <ChangeAnalysis />
              <div className="flex justify-end">
                <Button onClick={handleNext}>
                  Next: Form Hypotheses
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          )}

          {currentStage === "hypothesis" && (
            <motion.div
              key="hypothesis"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <AgentActivity />
              <HypothesisView />
              <div className="flex justify-end">
                <Button onClick={handleNext}>
                  Next: Plan Actions
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          )}

          {currentStage === "actions" && (
            <motion.div
              key="actions"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <AgentActivity />
              <ActionPlan />
              <div className="flex justify-end">
                <Button onClick={handleNext}>
                  Next: View KPIs
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          )}

          {currentStage === "kpi" && (
            <motion.div
              key="kpi"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <AgentActivity />
              <KPIDashboard />
              <div className="flex justify-end">
                <Button onClick={handleNext}>
                  Complete Analysis
                  <CheckCircle2 className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          )}

          {currentStage === "complete" && (
            <motion.div
              key="complete"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-3xl mx-auto"
            >
              <Card className="border-2 border-green-200 dark:border-green-800">
                <CardHeader className="text-center pb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="mx-auto mb-6 p-4 bg-green-100 dark:bg-green-900/30 rounded-full w-fit"
                  >
                    <CheckCircle2 className="h-16 w-16 text-green-600" />
                  </motion.div>
                  <CardTitle className="text-3xl mb-4">Analysis Complete!</CardTitle>
                  <p className="text-lg text-muted-foreground">
                    Root cause analysis completed successfully with actionable countermeasures and
                    KPI tracking in place.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="text-3xl font-bold text-primary">85%</div>
                      <div className="text-sm text-muted-foreground">Confidence</div>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="text-3xl font-bold text-green-600">-61.7%</div>
                      <div className="text-sm text-muted-foreground">Defect Reduction</div>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="text-3xl font-bold text-orange-600">4</div>
                      <div className="text-sm text-muted-foreground">Countermeasures</div>
                    </div>
                  </div>

                  <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <h3 className="font-semibold mb-2 text-green-950 dark:text-green-100">
                      Key Findings
                    </h3>
                    <ul className="space-y-1 text-sm text-gray-900 dark:text-gray-100">
                      <li>✓ Primary cause: Flux weight reduction (5.2g → 4.8g)</li>
                      <li>✓ Secondary factor: New flux supplier material composition</li>
                      <li>✓ Contributing factor: Pressure gauge calibration drift</li>
                      <li>✓ All KPIs trending positive after countermeasure implementation</li>
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1" variant="outline">
                      <FileDown className="h-4 w-4 mr-2" />
                      Export Report
                    </Button>
                    <Button className="flex-1" onClick={handleReset}>
                      <RefreshCw className="h-4 w-4 mr-2" />
                      New Analysis
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm mt-12">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <p>© 2024 Denso Quality Management System - PoC</p>
            <p>Powered by Agentic AI Technology</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

