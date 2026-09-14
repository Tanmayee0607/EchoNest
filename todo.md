# EcoNest Monthly Consumption Analysis — Implementation Checklist

## Data model and logic

- [x] Define the monthly consumption entry shape for month, electricity, water, transportation modes, food, and waste.
- [x] Define deterministic estimate and scoring rules with clear “estimate” labeling.
- [x] Define recommendation rules that rank categories by relative impact and return 3–5 actionable suggestions.
- [x] Define localStorage persistence and edit/update behavior for multiple monthly entries.

## User flow and UI

- [x] Add a prominent Monthly Consumption Analysis entry point without changing the existing EcoNest visual language.
- [x] Build a five-step, responsive input flow with month selection, back/next controls, validation, and progress indication.
- [x] Add transportation mode management for multiple modes and private-vehicle detail fields.
- [x] Add “I don’t know my exact consumption” water estimation path using household size.

## Monthly report

- [x] Build a personalized score and status panel.
- [x] Build category-wise impact cards and identify the highest-impact category.
- [x] Build 3–5 data-driven recommendations.
- [x] Add edit submitted data behavior.
- [x] Add month comparison selector and visual comparison chart.
- [x] Add explicit estimate/demo-data messaging where applicable.

## Integration and verification

- [x] Add navigation and dashboard entry points for Monthly Consumption Analysis.
- [x] Preserve all existing EcoNest routes and design decisions.
- [x] Run type checks and production build.
- [x] Verify desktop and mobile screenshots for the new flow and report.
- [ ] Save one final checkpoint after the enhancement is complete.

## Duplicate navigation key bug fix

- [x] Trace the `/analyze` duplicate key source in the shared navigation.
- [x] Apply a minimal navigation data fix without changing the EcoNest layout.
- [x] Verify `/living` has no duplicate-key console warning and the project still builds.
- [ ] Save a corrected checkpoint.

## Monthly prediction, savings, dashboard connection, and motion enhancement

- [x] Inspect the existing analysis, dashboard, shared shell, and style primitives before editing.
- [x] Extend the monthly data model with an optional electricity tariff while preserving existing fields and stored records.
- [x] Add transparent historical-trend prediction for the next month with an insufficient-history state.
- [x] Add calculated potential monthly and yearly savings without hard-coded savings values.
- [x] Add the next-month outlook inside the existing analysis report without creating a second analysis page.
- [x] Connect latest stored monthly data to the existing dashboard with minimal visual changes.
- [x] Add a lightweight CSS/SVG pseudo-3D sustainability visual that is subtle, responsive, and non-blocking.
- [x] Verify existing routes, build/type health, console warnings, and responsive layouts.
- [ ] Save a final checkpoint for the preserved-design enhancement.

## Recommendation savings outlook slide

- [x] Define a transparent recommendation-follow-through savings model tied to the user’s actual electricity tariff and stored usage.
- [x] Add a dedicated savings outlook slide inside the existing Monthly Analysis report.
- [x] Show monthly and yearly savings, estimated energy reduction, and the assumptions behind the estimate.
- [x] Preserve the existing report flow and responsive EcoNest visual language.
- [x] Verify the calculation, responsive layout, and production build.
- [ ] Save a final checkpoint.
