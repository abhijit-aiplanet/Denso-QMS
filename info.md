## 1) The story in plain English

* A customer says, “This HVAC unit is leaking.”
* We look up which exact parts and production line made that unit (by serial/BOM) using the Traceability system.
* We then ask, “What changed around that time?” and scan the 5M1E (Man, Machine, Material, Method, Measurement, Environment) change logs and daily quality/production records (Aikyan, change reports). For example, your sample reports show flux weight adjustments, air‑flow/pressure tweaks, and raw‑material source swaps—all of which can influence leak rates.
* From there, we guess the likely causes, try a fix (e.g., recalibrate flux or pressure checks), verify on the line, and watch the KPIs (defect rate, FPY, MTTR) for a few days to confirm it worked. Your mock deck illustrates this exact loop: ① Identify → ② Analyze → ③ Action & Verify → ④ Evaluate.

Because the plant’s One Database isn’t live yet, the mock will use CSV exports (Traceability & Aikyan) that you share; later we plug into One DB via APIs.

---

## 2) Step‑by‑step today (the current mock flow with CSVs)

This is the practical, minimal process we’ll run right now for the Nov demo.

1. Capture the complaint

   * What we collect: product/part numbers, defect (“leak”), any serial/frame info, and date.
   * Why: this seeds the search. Your mock shows the complaint context (HVAC/Heater Core).
2. Trace the unit (Traceability export)

* Pull the production lineage: line, machine, lot, timestamps, and related child parts.
* Output: a short list of affected units/lots and any helium‑leak trend around those dates. The mock highlights “AI flags a spike in Helium leak test NG trend.”

1. Pull the “what changed?” evidence (Aikyan + 5M1E changes)

* Export the change log around the suspect window (e.g., ±7–14 days).
* Look for Machine/Material/Method shifts (e.g., flux weight change on Jun 30, air‑flow/pressure setting changes, raw‑material source change on Sep 12–19 in your sample).

1. Form 1–2 simple hypotheses

* Example: “Flux quantity drift might be raising leak rate,” or “Pressure gauge drift before leak incidents.” Your mock’s 5M1E view points to flux weight and pressure as typical candidates.

1. Pick countermeasures and implement (small controlled change)

* Examples: recalibrate flux dispensing, recalibrate pressure gauges, tighten control limits, run a short trial lot. Your mock lists these as recommended actions.

1. Verify on the line (daily checks)

* Use the standard Connect DX or equivalent daily checklists to ensure the fix actually happened (PoKa‑Yoke style) and stays in place.

1. Watch KPIs for 7–14 days

* Track defect rate, FPY, MTTR, affected lots, downtime—the mock proposes a concise KPI set. We expect leak trend to roll back if the fix worked.

1. Report back (simple one‑pager)

* “Complaint → suspected cause → action taken → trend after fix → decision.”

What we need from DNKI for the mock (CSV approach):

* Traceability extracts for the affected model/time window (incl. helium test outcomes).
* Aikyan/5M1E change logs for the same window. Both were discussed as CSV‑downloadable for POC.

---

## 3) “What if we use agentic AI?” (how it works with agents)

Think of small specialist assistants (“agents”) that coordinate. They read the same files/systems you use today—just faster, all at once—and hand each other the work.

Agent team (Phase‑1: CSV‑backed for the mock):

1. Intake Agent

   * You paste the complaint (part/serial/date). It parses the details and kicks off the flow. (Mirrors your mock’s complaint inputs.)
2. Traceability Agent

* Auto‑pulls lineage from the CSV (later, from the One DB API), clusters affected units, and detects helium‑leak anomalies in the time series.

1. Change‑Scan Agent (5M1E)

* Sweeps the Aikyan/change logs around the suspect period to list what changed (flux/airflow/material/operator/method). Your CHE MIDDLE report is exactly the kind of evidence it mines.

1. Correlation Agent

* Tests “did leaks spike after flux weight changed?” “Did leaks cluster with operator B or sealant batch X?” (Examples shown in your mock’s 5M1E grid.)

1. Benchmarking Agent

* Fetches similar past cases and ranks what fixes worked best (e.g., “pressure limit control adjustment reduced defects last March”).

1. Action Planner Agent

* Proposes a small, reversible plan (e.g., “recalibrate flux; run 50‑piece trial; tighten check frequency”). You approve it.

1. Verification Agent

* Generates the checklist for line teams (Connect DX style), then watches for completion.

1. KPI Reporter Agent

* Auto‑builds a 7‑day mini‑report: defect trend, FPY, MTTR, “did the fix work?”—ready for managers.

Phase‑2: Fully connected (after One DB/API is ready)

* Same agents, but no CSVs. They pull from One DB in near‑real‑time, and push results back to your dashboards/ERP via custom APIs on DNKI’s AWS (your stated preference). Target connection timing: around February per the discussion.

---

## 4) Quick side‑by‑side: today vs with agents

* Today (mock): humans drive each step; we export CSVs, eyeball trends, and write the report.
* With agents: the system pulls the data, spots patterns, suggests fixes, creates the checklist, and tracks KPIs—you still approve actions, but the legwork is automated. Your mock’s swimlane already maps to this flow.

---

## 5) Why these steps are the right ones (grounded in your artifacts)

* The Lv2 Mock describes the exact flow and shows the leak trend detection and 5M1E analysis for a Heater Core case (model SFA2).
* The CHE MIDDLE 5M1E report demonstrates the kind of machine/material/method changes we correlate (e.g., flux weight & air‑flow changes, material source swaps).
* The meeting confirms the CSV‑first mock, the Nov 21 mock demo, and later API integration on DNKI AWS (custom dev).

---

## 6) A simple “this week” checklist (so we can move)

* Send CSVs: (a) Traceability (units/lots + helium test results) for the incident window; (b) Aikyan/5M1E changes for the same window. These were discussed as downloadable for POC.
* Confirm 2–3 KPIs you want on the mini‑report (e.g., defect rate, FPY, MTTR as in the mock).
* Pick 1–2 likely levers to try first (e.g., flux calibration or pressure checks) so the demo shows an end‑to‑end fix‑and‑verify loop.
