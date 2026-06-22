---
title: 'Adversarial Review & Falsification Layer'
date: 2026-06-08
draft: true
path: '/blog/future-of-saas-11-adversarial-review-and-falsification'
type: 'post'
---
## Why This Doc Exists

The rest of the packet argues a thesis: AI commoditizes the SaaS surface; SaaS endures as substrate (shared data, invariants, integrations, governance). That holds for the near term. Its weakness is that it is written to reassure, and the reassuring frame hides the questions that decide whether a given SaaS company actually wins.

This doc does three things the others don't: it states the load-bearing assumptions explicitly, converts the comfortable claims into falsifiable bets with observable triggers, and adds the missing threat model. Every entry uses one format: **claim → ground today → assumption it rests on → what kills it → what to watch.**

## Load-Bearing Assumptions

The entire packet rests on four assumptions. If any flips, large parts of the thesis fail.

- **A1 — Operating cost stays human-expensive.** Reliability, evaluation, incident response, and migration remain labor-heavy. This is the single most important assumption; "time-to-reliable-system doesn't compress" is the whole argument. *Watch:* agents that self-maintain (self-writing migrations, continuous eval, autonomous incident response). If those mature, the build/operate asymmetry collapses.
- **A2 — Governance stays distributed at the app layer.** Each system of record is assumed to be its own trusted control point. *Watch:* enterprises standardizing on a single agent control plane / gateway for identity, scopes, and audit.
- **A3 — The system of record stays in the app.** Not in the data platform. *Watch:* lakehouse + semantic layer becoming the canonical joined record, with apps reduced to write-targets.
- **A4 — Incumbents adopt AI faster than new entrants build AI-native systems of record.** *Watch:* outcome-priced startups growing in your category without seat expansion.

## Core Corrections

### C1 — Durable is not the same as value-capturing

**Claim (packet):** Becoming substrate is a survival win.
**Ground today:** True that data, integrations, and guarantees persist.
**Assumption:** That holding the substrate also holds the margin.
**What kills it:** Substrate without the access layer is commodity. AWS captures margin because it owns access too; a vertical CRM reduced to "the store the agent writes to" keeps its data and loses its pricing power, brand surface, and seat-expansion motion. The packet treats demotion to substrate as continuity; for many vendors it is a brutal margin and business-model transition.
**What to watch:** gross-margin compression in vertical SaaS; pricing shifting from seat to metered API/action; analysts reframing apps as "backends."

### C2 — Integration gravity is bifurcating, not compounding

**Claim (packet):** Integration gravity compounds over time (02) — while AI lowers migration cost (01). These contradict.
**Resolution:** Split the moat. Friction-based switching cost is a *decaying* asset because agents are migration engines. Durable integration value is the maintained, schema-aware, edge-case-handling, governed connector layer that is expensive to *operate*, not just to build.
**What to watch:** time-to-migrate for one representative workflow. If it drops to days, the friction moat is gone and only the operate-cost moat remains.

### C3 — Governance consolidates upward

**Claim (packet):** Governance is per-app product value.
**Ground today:** True while no cross-app control plane dominates.
**What kills it:** Nobody wants governance smeared across 80 apps. One agent gateway with one audit trail and one policy engine is the obvious end state. The packet's own buyer's guide flags "glue" as the leverage point but doesn't follow through: the glue layer may eat the governance moat the apps think protects them.
**What to watch:** adoption of cross-app agent gateways; standardization on one identity/audit layer for non-human actors.

### C4 — The missing new-entrant threat model

**Claim (packet, implicit):** Incumbents with deep moats compound their lead.
**Why it's suspect:** Survivorship bias. Disruption historically comes from new systems of record, not incumbents bolting on AI. The packet has no threat model from below.
**Concrete vectors:**
- AI-native SoR with outcome pricing and no seat revenue to protect — can underprice incumbents who can't cannibalize seats.
- Agent-native data capture: the agent becomes the data-entry surface, so the *new* app accrues the canonical record and the incumbent's graph stops growing.
- Vertical agents that own a workflow end-to-end and relegate the incumbent to a dumb backend.
**What to watch:** outcome-priced startups growing without seat expansion; agents writing to their own store instead of yours.

### C5 — Protocol legibility vs lock-in

**Claim (packet):** Expose clean MCP/A2A surfaces; this protects you.
**Tension ignored:** The more agent-legible you are, the more swappable you are. A perfect contract surface invites the orchestrator to replace you with a cheaper backend.
**Resolution:** Legibility must be paired with something non-replicable — proprietary data, hard guarantees, or marketplace/network effects. Otherwise it is commoditization with good docs.

## What Should Stay True For A While

These are the defensible near-term bets (roughly 1–2 years, contingent on A1 holding):

- The build-vs-operate cost asymmetry is real *today*.
- Regulated, multi-system, high-consistency domains resist cloning longest.
- API/contract surface becoming the primary UX — correct and accelerating.
- The "start local, prove value, add governance, graduate to shared substrate" process model is sound regardless of how the bets resolve.

## What Is Time-Stamped (Re-examine On Trigger)

- "Integration gravity compounds" — re-examine when time-to-migrate drops to days.
- "Governance is a per-app moat" — re-examine when a cross-app control plane gains share.
- The unit-economics thresholds in doc 03 — re-examine each time inference cost drops materially; the bespoke crossover moves down-market and hits mid-market SaaS first, not last.
- "Incumbents compound" — re-examine when outcome-priced new entrants appear in your category.

## The Reframe That Makes The Whole Packet Defensible

Restate every moat claim as a rate-statement with a falsification trigger, not a steady-state truth: *"This holds while operating cost stays human-expensive and while governance stays distributed at the app layer; here is what we'd observe if either flips."* That converts the packet from incumbent reassurance into a falsifiable bet — and the falsifiable version is the one that survives a hostile comment section.
