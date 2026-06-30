---
title: 'Pricing SaaS in the Age of Agents: From Seats to Outcomes'
date: 2026-06-08
draft: true
path: '/blog/future-of-saas-07-pricing'
type: 'post'
---
## Why Pricing Has to Change

Classic SaaS pricing assumed:

- humans are the primary users
- seats are a good proxy for value
- software usage costs trend toward zero

Agentic software breaks each assumption.

A single agent can do the work of many humans, but it also consumes real compute, orchestration, and monitoring budget.

## Pricing Patterns Emerging Now

### Outcome-Based Pricing

Charge per:

- resolution
- conversation outcome
- investigation
- assisted workflow

This is appealing because it maps to business work rather than logins.

### Seats + Included Usage

Common pattern:

- per-seat subscription
- bundled pool of AI credits or actions
- overage charges beyond that pool

### AI as Tier Gate

Some vendors do not sell AI as a separate line item. They use it to justify movement into higher plan tiers.

### Hybrid Stacks

The hardest models for buyers are combinations such as:

- seats + AI add-on + usage/outcomes

These often maximize vendor capture but minimize customer clarity.

## The Emerging Business Layer Stack

A cleaner way to think about future SaaS pricing is not one metric, but a stack of
billable layers. Each layer corresponds to a deeper level of vendor responsibility.

### 1. Data Layer

The vendor stores canonical state and exposes it through stable contracts.

What customers pay for:

- storage and indexing
- schema and identity model
- invariants and permissions
- uptime, backup, compliance, and auditability
- APIs, webhooks, events, and connector maintenance

This is more than raw database rent. The valuable part is not bytes on disk. It is
trusted, governed, machine-readable state that agents can safely use.

### 2. API and Integration Layer

The vendor lets other systems and agents connect the data graph.

What customers pay for:

- API access
- event streams
- sync connectors
- rate limits and higher quotas
- service identities and scoped access

This is the minimum substrate version of SaaS: a governed data product that other
tools can build on top of.

### 3. Baseline App and Hook Layer

The vendor provides a working application plus official extension points.

What customers pay for:

- the maintained baseline app
- enhanced extension hooks
- admin controls over what extensions can do
- versioned lifecycle events and workflow slots
- marketplace or private extension distribution

This is where pricing may still look like a license or plan tier. The buyer is
not merely buying "the app." They are buying sanctioned places to adapt the app
without forking it.

### 4. Hosted Runtime Layer

The vendor runs customer code, automations, or AI agents inside its trust boundary.

What customers pay for:

- per execution
- compute duration
- model tokens
- queue and schedule volume
- memory, network, and storage usage
- logs, traces, retries, and rollback

This is the strongest bridge between SaaS and cloud pricing. If a customer can run
an extension locally for free, the paid product is managed execution: the vendor
keeps it close to the data, governed by the same permissions, observable by the
same admin tools, and reliable enough for shared workflows.

### 5. Governance Layer

The vendor helps teams control non-human work.

What customers pay for:

- policy engine
- approvals
- agent inventory
- audit trails
- spend caps
- sandboxing and kill switches
- enterprise review workflows

This likely becomes enterprise packaging. The more agents and custom extensions a
customer runs, the more governance moves from compliance checkbox to core product
value.

## Simple Pricing Ladder

The ladder could look like this:

1. Store and expose my data.
2. Let agents and external tools connect to it.
3. Give me a baseline app with official hooks.
4. Run my custom logic next to the data.
5. Govern all of that for a team or company.

That maps to a business model:

- data/API: subscription plus storage/API limits
- baseline app/hooks: plan tier or license
- hosted extensions: usage-based runtime
- AI agents: token/action/execution pricing
- governance: enterprise tier

The strategic point is that SaaS does not have to choose between charging for a
finished app and giving everything away as APIs. It can expose a layered product:
state, contracts, hooks, runtime, and control plane.

## Main Critiques

### Pure Seat Pricing Misprices AI Work

Seat-only pricing hides real compute cost and creates cross-subsidy between light and heavy users.

### Opaque Stacking Creates Surprise Bills

When a product charges for access, AI features, and successful automation all at once, forecasting gets hard fast.

### Outcome Definitions Can Drift

If “resolved” really means “user stopped replying,” the model is misaligned even if it sounds elegant.

### Expiring Credits Distort Behavior

Credit pools that expire monthly optimize revenue more than value. They also make internal budgeting harder.

## Better Pricing Principles

- keep the number of billing dimensions low
- align pricing with work done, not just presence
- expose usage transparently
- let buyers set budgets and caps
- avoid forcing full-org upgrades for narrow AI needs
- separate storage/API access from hosted execution so customers can understand
  what they are paying to store versus what they are paying to run
- make extension/runtime spend governable before it becomes a surprise bill

## Strategic Conclusion

AI pricing is pushing SaaS toward charging for action, state change, runtime, and
outcome rather than human presence.

That is directionally correct. The challenge is doing it in a way that customers can understand, forecast, and govern.
