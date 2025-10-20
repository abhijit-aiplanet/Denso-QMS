// Mock data for the PoC

export interface Complaint {
  id: string;
  productModel: string;
  partNumber: string;
  serialNumber: string;
  defectType: string;
  description: string;
  reportedDate: string;
  customer: string;
}

export interface TraceabilityData {
  productionLine: string;
  machine: string;
  lot: string;
  productionDate: string;
  shift: string;
  operator: string;
  heliumTestResult: string;
  childParts: Array<{
    partNumber: string;
    supplier: string;
    lot: string;
  }>;
}

export interface ChangeLogEntry {
  id: string;
  date: string;
  category: "Man" | "Machine" | "Material" | "Method" | "Measurement" | "Environment";
  description: string;
  changedBy: string;
  impact: "High" | "Medium" | "Low";
}

export interface Hypothesis {
  id: string;
  description: string;
  confidence: number;
  evidence: string[];
  relatedChanges: string[];
}

export interface Countermeasure {
  id: string;
  action: string;
  responsible: string;
  deadline: string;
  status: "pending" | "in-progress" | "completed";
  verification: string;
}

export interface KPI {
  name: string;
  before: number;
  after: number;
  target: number;
  unit: string;
  trend: "improving" | "stable" | "degrading";
}

// Sample data
export const sampleComplaint: Complaint = {
  id: "CMP-2024-0147",
  productModel: "SFA2 HVAC Unit",
  partNumber: "CHE-MIDDLE-5042",
  serialNumber: "SFA2-2024-06-15-LOT247",
  defectType: "Helium Leak",
  description: "Customer reported refrigerant leak in HVAC unit after 6 months of operation",
  reportedDate: "2024-06-15",
  customer: "Automotive OEM - Plant A"
};

export const sampleTraceability: TraceabilityData = {
  productionLine: "Line 3 - HVAC Assembly",
  machine: "M-3042 (Brazing Station)",
  lot: "LOT-247",
  productionDate: "2024-06-15",
  shift: "A Shift (06:00-14:00)",
  operator: "OP-127",
  heliumTestResult: "NG (2.1 Pa-m³/s - Above 2.0 threshold)",
  childParts: [
    { partNumber: "TUBE-5042-A", supplier: "Supplier X", lot: "TX-2024-06-12" },
    { partNumber: "SEALANT-304", supplier: "Supplier Y", lot: "SY-2024-06-10" },
    { partNumber: "FLUX-CORE-22", supplier: "Supplier Z", lot: "FZ-2024-06-08" }
  ]
};

export const sampleChangeLogs: ChangeLogEntry[] = [
  {
    id: "CHG-001",
    date: "2024-06-12",
    category: "Material",
    description: "Raw material source change: Flux supplier changed from Supplier Z to Supplier Z-New (cost reduction initiative)",
    changedBy: "Procurement Team",
    impact: "High"
  },
  {
    id: "CHG-002",
    date: "2024-06-13",
    category: "Machine",
    description: "Flux dispensing weight adjusted from 5.2g to 4.8g per unit (reduced waste)",
    changedBy: "Process Engineering",
    impact: "High"
  },
  {
    id: "CHG-003",
    date: "2024-06-14",
    category: "Measurement",
    description: "Pressure gauge calibration due date passed by 2 days - gauge showed drift during routine check",
    changedBy: "Quality Maintenance",
    impact: "Medium"
  },
  {
    id: "CHG-004",
    date: "2024-06-10",
    category: "Method",
    description: "Brazing cycle time reduced by 15 seconds to improve throughput (management directive)",
    changedBy: "Production Manager",
    impact: "Medium"
  },
  {
    id: "CHG-005",
    date: "2024-06-11",
    category: "Environment",
    description: "Air flow rate in brazing area increased due to temperature complaints from operators",
    changedBy: "Facilities Team",
    impact: "Low"
  }
];

export const sampleHypotheses: Hypothesis[] = [
  {
    id: "HYP-001",
    description: "Flux quantity reduction (5.2g → 4.8g) may be insufficient for proper brazing seal",
    confidence: 85,
    evidence: [
      "Helium leak NG rate increased from 1.2% to 4.7% after flux weight change",
      "Historical data shows correlation between flux amount and leak rate",
      "Similar issue occurred in 2023 when flux was reduced"
    ],
    relatedChanges: ["CHG-002"]
  },
  {
    id: "HYP-002",
    description: "Pressure gauge drift led to incorrect leak test readings (false negatives before, accurate now)",
    confidence: 65,
    evidence: [
      "Gauge calibration was overdue by 2 days",
      "After recalibration, more units failed leak test",
      "Possible that defects existed but were not detected earlier"
    ],
    relatedChanges: ["CHG-003"]
  },
  {
    id: "HYP-003",
    description: "New flux supplier material has different composition affecting brazing quality",
    confidence: 72,
    evidence: [
      "Material spec sheet shows slightly different flux composition",
      "Temperature profile during brazing shows minor variations",
      "Supplier change coincides with start of leak rate increase"
    ],
    relatedChanges: ["CHG-001"]
  }
];

export const sampleCountermeasures: Countermeasure[] = [
  {
    id: "CM-001",
    action: "Restore flux dispensing weight to 5.2g and run 100-unit trial lot",
    responsible: "Process Engineering",
    deadline: "2024-06-18",
    status: "in-progress",
    verification: "Monitor helium leak test results for trial lot - target <2% NG rate"
  },
  {
    id: "CM-002",
    action: "Conduct flux material comparison test (old vs new supplier)",
    responsible: "Quality Lab",
    deadline: "2024-06-20",
    status: "pending",
    verification: "Material testing report comparing brazing strength and leak resistance"
  },
  {
    id: "CM-003",
    action: "Implement daily pressure gauge verification checklist",
    responsible: "Line Supervisor",
    deadline: "2024-06-17",
    status: "completed",
    verification: "Connect DX daily checklist with gauge verification log"
  },
  {
    id: "CM-004",
    action: "Review and potentially revert brazing cycle time change",
    responsible: "Production Manager",
    deadline: "2024-06-22",
    status: "pending",
    verification: "Compare brazing quality metrics before/after cycle time change"
  }
];

export const sampleKPIs: KPI[] = [
  {
    name: "Helium Leak NG Rate",
    before: 4.7,
    after: 1.8,
    target: 2.0,
    unit: "%",
    trend: "improving"
  },
  {
    name: "First Pass Yield (FPY)",
    before: 94.2,
    after: 97.8,
    target: 98.0,
    unit: "%",
    trend: "improving"
  },
  {
    name: "Mean Time To Repair",
    before: 18.5,
    after: 12.3,
    target: 15.0,
    unit: "min",
    trend: "improving"
  },
  {
    name: "Defect Rate (PPM)",
    before: 4700,
    after: 1800,
    target: 2000,
    unit: "PPM",
    trend: "improving"
  }
];

// Time series data for charts
export const heliumLeakTrendData = [
  { date: "Jun 08", leakRate: 1.2, threshold: 2.0 },
  { date: "Jun 09", leakRate: 1.4, threshold: 2.0 },
  { date: "Jun 10", leakRate: 1.3, threshold: 2.0 },
  { date: "Jun 11", leakRate: 1.5, threshold: 2.0 },
  { date: "Jun 12", leakRate: 1.8, threshold: 2.0 },
  { date: "Jun 13", leakRate: 2.9, threshold: 2.0 },
  { date: "Jun 14", leakRate: 3.8, threshold: 2.0 },
  { date: "Jun 15", leakRate: 4.7, threshold: 2.0 },
  { date: "Jun 16", leakRate: 4.5, threshold: 2.0 },
  { date: "Jun 17", leakRate: 3.2, threshold: 2.0 },
  { date: "Jun 18", leakRate: 2.1, threshold: 2.0 },
  { date: "Jun 19", leakRate: 1.8, threshold: 2.0 },
  { date: "Jun 20", leakRate: 1.6, threshold: 2.0 },
];

export const changeImpactCorrelation = [
  { change: "Flux Weight\nReduction", correlation: 0.87, pValue: 0.003 },
  { change: "Material\nSource Change", correlation: 0.71, pValue: 0.012 },
  { change: "Pressure Gauge\nDrift", correlation: 0.62, pValue: 0.028 },
  { change: "Cycle Time\nReduction", correlation: 0.45, pValue: 0.089 },
  { change: "Airflow\nIncrease", correlation: 0.23, pValue: 0.234 },
];

