# Getting Started with Denso Quality Management System PoC

## Quick Start Guide

This guide will help you set up and run the Denso Quality Management System PoC on your local machine.

## Prerequisites

- **Node.js**: Version 18 or higher ([Download](https://nodejs.org/))
- **npm** or **yarn**: Package manager (comes with Node.js)
- **Git**: Version control ([Download](https://git-scm.com/))

## Installation

1. **Navigate to the project directory** (if not already there):
   ```bash
   cd "C:\Users\Abhijit\OneDrive - iitkgp.ac.in\Desktop\AI_Planet\Denso"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   
   This will install all required packages including:
   - React & Next.js
   - TypeScript
   - Tailwind CSS
   - Framer Motion (animations)
   - Recharts (data visualization)
   - Lucide React (icons)

## Running the Application

### Development Mode

Start the development server:

```bash
npm run dev
```

The application will be available at: **http://localhost:3000**

You should see output similar to:
```
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

### Production Build

To create an optimized production build:

```bash
npm run build
npm start
```

## Using the Application

### 1. Welcome Screen
- Open your browser to `http://localhost:3000`
- You'll see the welcome screen with an overview of the system
- Click **"Start New Analysis"** to begin

### 2. Complaint Intake
- The form is pre-filled with sample data for demonstration
- You can modify any fields:
  - Product Model
  - Part Number
  - Serial Number
  - Defect Type
  - Customer
  - Report Date
  - Description
- Click **"Start Analysis"** to proceed

### 3. Analysis Workflow
Navigate through each stage by clicking the **"Next"** buttons:

**Stage 1: Traceability Analysis**
- View production lineage details
- See the helium leak test trend chart
- AI-detected anomalies are highlighted

**Stage 2: 5M1E Change Analysis**
- Review process changes in the incident time window
- Examine the correlation analysis chart
- Changes are categorized by impact level (High/Medium/Low)

**Stage 3: Root Cause Hypotheses**
- Review AI-generated hypotheses ranked by confidence
- Each hypothesis includes supporting evidence
- Related process changes are linked

**Stage 4: Countermeasure Action Plan**
- See recommended actions with timelines
- Track action status (Pending/In-Progress/Completed)
- Verification methods are specified

**Stage 5: KPI Performance Tracking**
- Compare before/after metrics
- View improvement percentages
- Track progress toward targets

**Stage 6: Complete**
- View summary statistics
- Key findings recap
- Options to export report or start new analysis

### 4. Reset & New Analysis
- Click **"Reset"** in the header at any time to start over
- Or click **"New Analysis"** on the completion screen

## Features to Explore

### Agent Activity Monitor
- Present at the top of each stage after the welcome screen
- Shows all 8 AI agents and their current status
- Watch as agents move through idle → working → completed states

### Interactive Charts
- **Line Chart**: Helium leak test trends over time
- **Bar Chart**: Correlation coefficients for different changes
- Hover over data points for detailed information

### Responsive Design
- The application works on desktop, tablet, and mobile
- Try resizing your browser window to see the responsive layout

### Smooth Animations
- Page transitions use Framer Motion for smooth effects
- Agent cards, data displays, and navigation all include animations

## Project Structure

```
denso/
├── app/                      # Next.js app directory
│   ├── globals.css          # Global styles & Tailwind configuration
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main application page (workflow logic)
├── components/              # React components
│   ├── ui/                  # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Input.tsx
│   │   └── Textarea.tsx
│   ├── AgentActivity.tsx    # Agent status monitor
│   ├── ComplaintIntake.tsx  # Complaint form
│   ├── TraceabilityDashboard.tsx
│   ├── ChangeAnalysis.tsx
│   ├── HypothesisView.tsx
│   ├── ActionPlan.tsx
│   └── KPIDashboard.tsx
├── lib/                     # Utility functions & data
│   ├── utils.ts            # Helper functions
│   └── mockData.ts         # Sample data for demonstration
├── package.json            # Dependencies & scripts
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── README.md             # Project documentation
```

## Customizing the Data

All demonstration data is in `lib/mockData.ts`. You can modify:

- **Complaint details**: Edit `sampleComplaint`
- **Traceability data**: Edit `sampleTraceability`
- **Change logs**: Edit `sampleChangeLogs` array
- **Hypotheses**: Edit `sampleHypotheses` array
- **Countermeasures**: Edit `sampleCountermeasures` array
- **KPIs**: Edit `sampleKPIs` array
- **Chart data**: Edit `heliumLeakTrendData` and `changeImpactCorrelation`

## Styling & Theming

### Color Scheme
The application uses a professional blue-based color scheme defined in `app/globals.css`:
- Primary: Blue (#3b82f6)
- Success: Green
- Warning: Yellow/Orange
- Danger: Red

### Customizing Colors
Edit the CSS variables in `app/globals.css` under `:root`:

```css
:root {
  --primary: 221.2 83.2% 53.3%;  /* Blue */
  --secondary: 210 40% 96.1%;     /* Light gray */
  /* ... other colors */
}
```

### Fonts
The application uses Inter font (Google Fonts), loaded in `app/layout.tsx`.

## Troubleshooting

### Port 3000 Already in Use
If port 3000 is already occupied:
```bash
# Windows PowerShell
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or run on a different port
$env:PORT=3001; npm run dev
```

### Module Not Found Errors
Reinstall dependencies:
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### TypeScript Errors
Clear Next.js cache and rebuild:
```bash
rm -rf .next
npm run dev
```

### Styling Issues
Make sure Tailwind is properly configured:
```bash
npm run build
```

## Browser Support

Recommended browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Performance Tips

- The development server may be slower than production
- For best performance, run a production build
- Charts render client-side, so performance depends on your device

## Next Steps

1. **Explore the UI**: Click through the entire workflow
2. **Customize Data**: Modify `lib/mockData.ts` with your own scenarios
3. **Read Technical Docs**: See `TECHNICAL_ARCHITECTURE.txt` for backend details
4. **Provide Feedback**: Note any improvements or features you'd like

## Support

For issues or questions:
1. Check this documentation
2. Review the code comments in key files
3. Examine the console for error messages (F12 in browser)

## Important Notes for PoC

⚠️ **This is a Proof of Concept**:
- No real backend is running
- All data is simulated (mock data)
- No database persistence
- Agent "activity" is visual only (not real AI processing)
- No authentication or user management

✅ **What works**:
- Complete UI/UX workflow
- Interactive forms and navigation
- Real-time charts and visualizations
- Responsive design
- Smooth animations
- Multi-stage workflow management

## Production Considerations

For a production system, you'll need:
- Backend services (see `TECHNICAL_ARCHITECTURE.txt`)
- Database integration
- API connections to Denso One Database
- Real AI/ML models
- Authentication & authorization
- Data persistence
- Real-time agent orchestration

Refer to `TECHNICAL_ARCHITECTURE.txt` for the complete production architecture.

---

Enjoy exploring the Denso Quality Management System PoC! 🚀

