---
title: 'The Unit Economics of AI Agents vs SaaS'
date: 2026-06-08
draft: true
path: '/blog/future-of-saas-03-unit-economics-agents'
type: 'post'
---
## Why This Comparison Matters

A lot of agent-vs-SaaS debate gets stuck at capability. The real issue is economics over time.

The useful question is not “can an agent do this?” It is “what does it cost to build, operate, and govern this workflow for three years?”

## Frame 1: 3-Year TCO Per Workflow

Compare a bespoke agentic workflow against SaaS plus vendor AI.

### Bespoke Build Cost Components

- engineering build time
- product/ops design time
- integration work
- LLM usage and orchestration runtime
- observability and evaluation infrastructure
- maintenance and model drift management
- security/compliance review
- on-call and operational burden

### SaaS Cost Components

- seat or platform subscriptions
- AI add-ons
- usage or per-outcome fees
- admin/configuration time
- limited internal maintenance

## Frame 2: Marginal Cost Per Resolution / Action

This is most useful where a workflow has a repeated, measurable unit:

- ticket resolved
- lead qualified
- invoice processed
- conversation handled
- investigation completed

At high volume, optimized internal systems can reach very low marginal cost, especially when they use narrow models or deterministic components. But fixed platform cost remains real.

## Frame 3: Breakeven Against Vendor Pricing

A clean model:

- internal = upfront platform investment + low marginal cost
- vendor = lower fixed cost + higher per-unit price

This makes one thing obvious: bespoke wins only when either volume is high, reuse is high, or both.

## Where Internal Agents Tend to Win

- high-volume, stable workflows
- cases where the same agent platform is reused across many workflows
- domains where specialized models materially reduce cost
- organizations that already have platform and MLOps competency

## Where SaaS Tends to Win

- low to moderate volume
- high compliance burden
- multi-channel complexity owned well by vendors
- companies without appetite for multi-year internal platform ownership

## Important Counterpoints

### Falling Model Costs Do Not Eliminate Scale Advantages

As prices fall, usage often rises and workflows become more ambitious. Heavier models, more calls, longer traces, and more guardrails offset part of the savings.

### Vendor Pricing Is Getting Smarter

Many SaaS vendors are shifting toward outcome, usage, or credit-based models that align revenue with AI work rather than purely human seats.

### Very Large Enterprises Are a Different Market

For companies with mature internal platforms, the fixed-cost hurdle is much lower. Many can rationally replace portions of horizontal SaaS.

## Practical Heuristics

- Below a few thousand AI-eligible events per month, SaaS is usually the right default.
- Above tens of thousands per month, re-run the economics seriously.
- If the workflow will likely be reused across multiple teams, bespoke becomes much more plausible.
- If the workflow must be regulated, audited, and highly available, factor governance and operations heavily rather than just token cost.

The big idea: agent economics are not “free software.” They shift spending from labor and seats into compute, orchestration, and governance. Whether that is better depends on volume, reuse, and operational maturity.
