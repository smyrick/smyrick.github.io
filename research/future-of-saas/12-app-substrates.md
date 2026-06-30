---
title: 'App Substrates: From OSS Libraries to Extensible Core Apps'
date: 2026-06-29
draft: true
path: '/blog/future-of-saas-12-app-substrates'
type: 'post'
---

## Core Idea

The next layer after open-source libraries may be open or extensible core apps:
usable, boring, functional products that non-specialists can build on top of.

The email example is useful because it is bigger than a library but smaller than a
finished vertical SaaS product. A non-coder does not want an IMAP library, OAuth
flow, MIME parser, sync engine, search index, and UI toolkit. They want a working
email client that connects to Gmail, handles the baseline product correctly, and
lets them add their own workflow logic.

That reframes the future of SaaS:

- Old OSS primitive: library, framework, API wrapper.
- Current SaaS primitive: complete hosted product.
- Emerging primitive: functional app substrate with governed extension points.

In this model, the vendor does not only sell the application. It sells the safe
place where custom application logic can run.

## Why This Extends the Existing Thesis

The current packet says AI will commoditize interface and orchestration while
SaaS keeps shared state, invariants, integrations, and governance.

This adds a middle layer:

- Personal AI can generate custom features.
- Users still need a correct, maintained app backbone.
- The winning vendor may expose the backbone as a programmable substrate instead
  of forcing everyone into one fixed UX.

This is stronger than "SaaS should have APIs." APIs assume developers compose
from below. App substrates assume users and agents customize from above, starting
from a working product.

## Email as the Canonical Example

Email looks simple until you try to build it:

- OAuth and provider policy.
- Gmail/IMAP sync semantics.
- Threads, labels, drafts, replies, attachments, search, spam/trash/archive.
- Security review for sensitive scopes.
- Deliverability and abuse constraints.
- State consistency across clients.

Google's Gmail API exposes the raw capability, but high-power scopes such as
reading or modifying all mail are classified as restricted scopes, which triggers
stricter app verification and security requirements. That is exactly the kind of
operational burden a "vibe-coded" app builder does not want to own directly.

Google Workspace Add-ons solve a narrower version of the problem: developers can
extend Gmail and other Workspace apps through a governed platform surface. But
they are not a general-purpose forkable email client. They are extensions inside
Google's host product.

A future email substrate would sit between those two:

- less raw than the Gmail API
- more programmable than a normal email client
- safer and easier than letting every user ship their own Gmail-connected app

## What the Product Would Need

### 1. Baseline App

A real app, not a demo:

- connect Gmail and possibly Outlook
- browse inbox, labels/folders, threads, search, drafts, attachments
- compose, reply, archive, label, snooze, unsubscribe
- handle sync, auth refresh, provider edge cases, and audit logs

The baseline must be good enough that custom features are additive, not required
to make the thing usable.

### 2. Extension Surface

Named, versioned extension points:

- on message received
- before message send
- after thread labeled
- on sender/contact matched
- on scheduled digest
- custom command/action from the UI

Extensions should receive structured objects, not raw scraped DOM.

### 3. Sandboxed Runtime

Run user code with tight limits:

- explicit scopes
- CPU/time/memory quotas
- network egress policy
- secrets handling
- per-extension logs
- kill switch and rollback

This is where the SaaS business model appears. Users can self-host or run locally
for free, but the hosted vendor charges for managed runtime, sync, storage,
observability, and scale.

### 4. Permission and Governance Layer

Non-coders will create powerful automations. The platform must make danger
legible:

- read-only versus write-capable extensions
- "can send email" as a high-risk scope
- approval checkpoints for destructive or external actions
- policy controls for teams
- audit trail for every automated action

This is not a nice-to-have. It is the difference between "customizable app" and
"unbounded phishing/mis-send machine."

### 5. Distribution Model

Custom features can start private, then become shareable:

- local/private extension
- team extension
- marketplace extension
- verified extension with higher trust level

This turns customization into ecosystem leverage. The product becomes more
valuable as users publish reusable workflows.

## Prior Art and Signals

### Thunderbird

Thunderbird is the old version of this pattern: an open-source email client with
an add-on ecosystem. The limitation is that it is client-era extensibility, not
cloud-hosted runtime extensibility. It proves demand for user-modifiable email,
but not the full SaaS substrate model.

### Google Workspace Add-ons

Workspace Add-ons show the platform-hosted model. Gmail can be extended, but only
inside Google's product boundaries. That supports the thesis that the app owner
wants extensions to run inside its governed surface, not in arbitrary clones.

### Nylas-Style Communication APIs

Unified email APIs reduce integration pain for developers. They are closer to
infrastructure than to an app substrate. They help developers build a client; they
do not give non-coders a working client plus extension runtime.

### Shopify Functions

Shopify Functions are a strong adjacent pattern: the merchant keeps Shopify as
the commerce backbone, but custom logic can run in constrained extension points.
The lesson is not "email should copy Shopify." The lesson is that platforms can
sell a stable core plus sanctioned programmable slots.

### Cloudflare Workers for Platforms

Workers for Platforms is the runtime half of this idea. It lets a platform run
code uploaded by its own customers. That is the missing piece in many SaaS
products: not only expose APIs, but host customer-specific logic safely.

### Supabase and Open-Core Backends

Supabase shows the "run it yourself for free, pay for managed service" model in a
developer-facing backend. The app-substrate version applies the same business
logic to a higher-level product: self-host or local run for free, managed sync and
runtime for money.

## Business Model

This is not classic seat SaaS. It is layered substrate pricing.

The useful model:

1. Data layer: pay to store and govern canonical state.
2. API layer: pay to connect agents and tools to that state.
3. Hook layer: pay for the baseline app and official extension points.
4. Runtime layer: pay per execution, duration, token, or scheduled job when the
   vendor runs custom code or AI agents.
5. Governance layer: pay for policy, approvals, audit, sandboxing, and controls.

Pricing likely combines:

- baseline subscription for hosted app and sync
- API and connector quotas
- usage-based runtime for custom features
- token or action charges for AI-powered extensions
- storage/search/indexing usage
- premium governance for teams
- marketplace revenue share

The cleanest pitch:

> The core app is free or cheap. The managed substrate is paid. The runtime is
> metered. Governance is enterprise.

For the email example, the user can run a custom labeler locally for free if they
want to own the setup. If they want the provider to keep it running near the
mailbox, retry failures, preserve logs, respect org policy, and meter model
calls, that becomes a hosted runtime bill.

This resembles open-source libraries today:

- free to inspect, fork, or self-run
- paid to operate reliably
- paid to scale
- paid to govern

The important business-model shift is that the extension itself can become a
durable unit of value. If someone builds a useful classifier, triage workflow, or
follow-up agent, they do not just want to generate it once. They want it to keep
running. That recurring execution is where the SaaS provider can charge without
owning every feature idea itself.

## Why Google Might Be Both Best Positioned and Badly Incentivized

Google already owns Gmail, auth, abuse prevention, Workspace policy, and a large
developer ecosystem. It could provide the safest version of this.

But the incentive is mixed:

- A highly programmable Gmail could undercut Google's own product control.
- Extension mistakes create user-trust and abuse risk.
- Marketplace/runtime monetization may be smaller than preserving Workspace
  packaging.
- Power-user customization can create support complexity.

That creates room for an independent provider, but only if it can survive the
policy, security, sync, and trust burden around email.

## The Strategic Version

The product category is not "AI email client."

It is:

> trusted app substrate for personal and team-specific software.

Email is one example. Other plausible core substrates:

- calendar
- personal CRM / contacts
- task manager
- notes and knowledge base
- lightweight helpdesk
- personal finance
- recruiting pipeline
- internal request tracker

The common pattern:

1. A baseline app everyone understands.
2. A messy integration/state/governance burden most users should not own.
3. A long tail of personal workflows that vendors cannot all ship.
4. A need for sandboxed custom logic.

## Where This Could Fail

### Security and Trust

Email, calendar, and finance are high-risk domains. A sandbox is only useful if
permissions are understandable and defaults are conservative.

### Platform Dependency

If Gmail, Outlook, or Apple Mail policies change, an independent substrate can be
crippled. This is worse than a normal SaaS dependency because the whole product
rests on provider access.

### Support Explosion

Once users run custom features, every bug becomes ambiguous: platform bug,
extension bug, model bug, or provider edge case.

### Non-Coder Customization Ceiling

Vibe-coded extensions are powerful but brittle. The platform may need templates,
tests, simulation, staged rollout, and generated explanations before this is safe
for normal users.

### Commoditization of the Substrate

If the baseline app is fully open and easy to host, the vendor must capture value
through runtime, trust, ecosystem, and governance. "Open core app" alone is not a
business.

## Draft Insertion

Potential section after "Extensibility is the load-bearing strategy":

> The next version of open source may not look like another library. It may look
> like a boring, functional app that people can safely build on top of. Imagine a
> bare-bones email client that already connects to Gmail, handles sync, threads,
> drafts, search, labels, attachments, and auth, then exposes safe extension
> points for the strange features no vendor would ever prioritize. A user does
> not want to vibe-code an IMAP client. They want to vibe-code the one workflow
> that makes email fit their life.
>
> That is not the death of SaaS. It is SaaS becoming a substrate. The app is the
> maintained backbone. The user-generated features are the surface. The vendor
> charges for sync, hosting, sandboxed runtime, observability, governance, and
> maybe distribution through a marketplace. Run it yourself for free if you want;
> pay when you want someone else to operate it safely. This is the open-source
> business model moved up from libraries into core applications.
>
> The important distinction is that this is not merely an API. APIs give
> developers primitives. App substrates give everyone a working product plus
> sanctioned places to change it. That may be the future shape of SaaS in
> categories where the baseline workflow is generic but the personal edge cases
> are infinite.

Potential pricing insertion:

> The business model becomes layered. At the bottom, the vendor charges to store
> and expose trusted data. Above that, it charges for API access and connector
> volume. Above that, it charges for the baseline app and the enhanced hook points
> that make customization safe. At the top, it charges for hosted runtime: every
> scheduled extension, AI classifier, workflow agent, retry, log, and token the
> customer does not want to operate locally. SaaS pricing starts to look less like
> seats and more like a stack: data, contracts, hooks, runtime, governance.

## Source Notes

- Gmail API restricted scopes: <https://developers.google.com/workspace/gmail/api/auth/scopes>
- Google Workspace Add-ons for Gmail: <https://developers.google.com/workspace/add-ons/gmail>
- Google Workspace MCP overview: <https://developers.google.com/workspace/mcp>
- Thunderbird add-ons docs: <https://developer.thunderbird.net/add-ons/about-add-ons>
- Nylas Email API: <https://www.nylas.com/products/email-api/>
- Shopify Functions: <https://shopify.dev/docs/apps/build/functions>
- Cloudflare Workers for Platforms: <https://developers.cloudflare.com/cloudflare-for-platforms/workers-for-platforms/>
- Cloudflare Workers pricing/runtime model: <https://developers.cloudflare.com/workers/platform/pricing/>
- Supabase self-hosting: <https://supabase.com/docs/guides/self-hosting>
