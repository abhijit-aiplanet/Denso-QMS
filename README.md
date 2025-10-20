# Denso Quality Management System - PoC

An intelligent, agentic AI-powered system for accelerating root cause analysis in manufacturing quality management.

## Overview

This Proof of Concept (PoC) demonstrates an advanced quality management system that uses multiple AI agents working in parallel to analyze customer complaints, trace production lineage, identify process changes, and recommend countermeasures - all within minutes instead of weeks.

## Key Features

- **8 Specialized AI Agents**: Each agent focuses on a specific task (Intake, Traceability, Change Scan, Correlation, Hypothesis, Action Planning, Verification, KPI Reporting)
- **5M1E Methodology**: Analyzes Man, Machine, Material, Method, Measurement, and Environment factors
- **Real-Time Analysis**: Complete root cause analysis workflow in minutes
- **Interactive Dashboards**: Beautiful visualizations for traceability, change logs, correlations, and KPIs
- **Statistical Analysis**: Correlation coefficients and p-values for data-driven decision making
- **Workflow Management**: Step-by-step guided process from complaint to resolution

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. Click "Start New Analysis" on the welcome screen
2. Fill in the complaint details (pre-populated with sample data)
3. Click "Start Analysis" to begin the workflow
4. Navigate through each stage:
   - **Traceability**: View production lineage and helium leak trends
   - **5M1E Changes**: See process changes during the incident window
   - **Hypothesis**: Review AI-generated root cause hypotheses
   - **Countermeasures**: Examine recommended actions
   - **KPIs**: Track performance improvements

## Features Demo

### Agent Activity Monitor
Real-time visualization of all 8 AI agents working in parallel, showing their current tasks and status.

### Complaint Intake
Modern form interface for capturing customer complaint details including product model, part number, serial number, and defect description.

### Traceability Dashboard
- Production line and machine details
- Lot information and operator data
- Child parts with supplier information
- Interactive line chart showing helium leak test trends
- AI-generated insights highlighting anomalies

### 5M1E Change Analysis
- Comprehensive list of process changes
- Color-coded impact levels (High/Medium/Low)
- Category icons for easy identification
- Correlation analysis with bar charts
- Statistical significance (correlation coefficient and p-value)

### Hypothesis Generation
- Ranked root cause hypotheses with confidence scores
- Supporting evidence for each hypothesis
- Links to related process changes
- Visual confidence indicators

### Action Planning
- Detailed countermeasures with timelines
- Responsible parties and verification methods
- Status tracking (Pending/In-Progress/Completed)
- Implementation guidance

### KPI Dashboard
- Before/after comparisons
- Target achievement indicators
- Trend analysis with visual indicators
- Progress bars and percentage changes
- Overall improvement summary

## PoC Limitations

- **No Backend**: All data is simulated using mock data
- **No Database**: Data persists only during the session
- **No Authentication**: No user login or access control
- **No API Integration**: Would integrate with Denso's "One Database" in production
- **Static Analysis**: Agents simulate work but don't perform real AI analysis

## Future Enhancements (Full Product)

See `BACKEND_ARCHITECTURE.txt` for detailed backend implementation approach including:
- Microservices architecture
- Real-time data integration
- Advanced ML models
- API gateway design
- Database schema
- Security implementation
- Scalability considerations

## Project Structure

```
denso/
├── app/
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.tsx            # Root layout component
│   └── page.tsx              # Main application page
├── components/
│   ├── ui/                   # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Input.tsx
│   │   └── Textarea.tsx
│   ├── AgentActivity.tsx     # Agent monitoring component
│   ├── ComplaintIntake.tsx   # Complaint form component
│   ├── TraceabilityDashboard.tsx
│   ├── ChangeAnalysis.tsx
│   ├── HypothesisView.tsx
│   ├── ActionPlan.tsx
│   └── KPIDashboard.tsx
├── lib/
│   ├── utils.ts              # Utility functions
│   └── mockData.ts           # Sample data for PoC
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy this application is using Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/abhijit-aiplanet/Denso-QMS)

**Or manually:**

1. Push your code to GitHub (already done)
2. Visit [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project" and import your GitHub repository
4. Vercel will auto-detect Next.js and configure everything
5. Click "Deploy" and wait 2-3 minutes
6. Your app will be live at `https://your-project-name.vercel.app`

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

### Environment Variables

For production deployment, copy `.env.local.example` to `.env.local` and configure as needed. Currently, no environment variables are required for the PoC.

## License

This is a Proof of Concept for Denso. All rights reserved.

