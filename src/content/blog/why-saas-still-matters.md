---
title: 'When and Why SaaS Still Matters in the Age of Personal AI'
description: 'If AI commoditizes the surface of software where does SaaS endure as a layered substrate of data, APIs, hooks, runtime, and governance.'
date: 2026-06-08
draft: true
path: '/blog/why-saas-still-matters'
type: 'post'
---
We are now at the stage where AI can build a minimal working version of your SaaS product in an afternoon. Dashboards, forms, workflows, and integrations that took a startup previously two years to ship are now a weekend prompt away. The era of personal software has arrived and a logical thought floating around is that people will increasingly build the tools they need instead of paying for them. So SaaS is finished, right?

I propose that is half right. AI will eat a large part of what software used to charge for. But it eats the parts that previously cost time and not the parts where the true value lived.

The useful question is no longer "can we build this software at all?" It is "which parts of our stack should we own as agents and internal tools, and which parts should we still rent as trusted, governed backbones?"

## There is still a moat, you just have a raft now

AI can now clone the visible surface of most software. The UI components of list and detail views, standard workflows, lightweight CRUD schemas, etc. are all designed for non-technical humans to interact with software. AI has seen and learned from countless versions of the web UIs and can stand up something that looks and feels like a real product in days. Before this was the "moat" of creating software that was gated behind skilled developer labor.

This has created lots of discussion in the industry about the Software Development Lifecycle (SDLC). AI compresses the Build phase of the SDLC. Getting to a demo which clones the same UI and inspires ideas is now easy, but getting to a durable, governable, production-grade system is still hard. Many demos we see are from people saying "I made this in an afternoon, let's ship it!". In most cases they have codified a true problem they have and have created some form of software that solves that problem, but that is just the [surface layer of the Product Lifecycle (PDLC)](https://medium.com/@dhiyaaizaaztiras/sdlc-vs-pdlc-unraveling-the-differences-in-development-life-cycles-c58fe992417c).

I don't think that AI has removed any moat though, it still exists. Before we just had to spend lots of time and effort to swim across, where now AI has provided us a raft to get across with much less effort. So many of the vibe-coders get to the other side and ask "Now what?". You can follow the SDLC and make sure that feature or idea you built is a little more sound, but if you are asking AI to review itself it will not ask the big questions. The hard substrate of software is the part you cannot screenshot. It includes rich entity graphs and messy real-world relationships, invariants that encode domain semantics, compliance and auditability, and the operational maturity to run all of it under load. None of that shows up in the UI AI is imitating.

The question to ask is no longer whether AI can imitate your app, because it can, but instead ask "Why would customers still use your underlying system instead of building their own?"

## What Survives Is the Substrate

If AI copies the skin, the durable value has to live in the skeleton. The screens, flows, and prompts are the easy part to reproduce. The invisible layer underneath is where SaaS still has a chance to matter.

That starts with shared truth. Serious products encode canonical records and an entity graph. Identity holds over time. Relationships cross domains. Ownership, lineage, and policy inheritance all have to mean something. The deeper a system understands how objects relate, the more useful it becomes to humans and agents. A clone can mimic the interface. It cannot inherit years of accumulated and reconciled state.

Then you have the invariants. These are the boring rules that decide which state transitions are legal, which entities may be merged or deleted, when downstream systems must also update, and what requires human approval. They are painful to discover, easy to break, and expensive to maintain. They never appear in the demo, but they show up in every incident. Rebuilding them from scratch means relearning failures the incumbent already paid for.

Integrations still matter too, but only the real ones. A page of partner logos is not a moat. Battle-tested connectors, schema-aware mappings, reliable auth, and maintained edge-case behavior are. That distinction matters because integration gravity can rot. A shallow connector becomes complexity without trust, which is worse than no connector.

I also think we need to be honest about which switching costs are dying. Migration friction used to protect a lot of products. Agents are migration engines. Work that once took quarters is moving toward days. What stays valuable is the operate-cost layer, the connectors that are maintained, observable, and correct on the edge cases nobody wants to rebuild. Friction protects you less every year. Reliability still does.

Governance is the last part of the substrate, and in an agentic world it stops being a compliance tax. It becomes product surface. Customers need agent identities and scopes, approval workflows for risky actions, audit trails, and visibility into what agents did and why. A system that makes experimentation safe is worth more than one that only makes experimentation possible.

All of this fails when the value is hidden behind opacity. A moat built on hiding things is fragile when AI can reconstruct the surface. The same substrate gets stronger when it is exposed through clean interfaces, because then it becomes the safest place for agents to act.

That is why extensibility matters so much here. It is not a side feature. Customers clone products when they cannot safely extend them. If the only way to adapt a system is to build around it, people copy its workflows, move data somewhere else, and let agents operate outside its control.

The defense is to make extension safe and expressive enough that cloning is not worth the effort. Configuration, custom fields and schema extension, lifecycle hooks, sandboxed embedded functions, and full apps or marketplaces all fit on the same spectrum. The important part is that they are governed surfaces, named and versioned extension points instead of arbitrary injection, sandboxed execution treated as untrusted by default, fine-grained reviewable permissions, observability with kill switches, and blast-radius controls like quotas and circuit breakers.

AI makes this pressure worse. Agents want structured ways to read context, trigger actions, and extend workflows without replacing the backbone. If you do not provide those governed surfaces, they get built elsewhere. The safer and more expressive your extension model is, the less reason anyone has to clone you outside the platform.

The next version of open source may not look like another library. It may look like a boring, functional app that people can safely build on top of. Imagine a bare-bones email client that already connects to Gmail, handles sync, threads, drafts, search, labels, attachments, and auth, then exposes safe extension points for the strange features no vendor would ever prioritize. A user does not want to vibe-code an IMAP client. They want to vibe-code the one workflow that makes email fit their life.

That is not the death of SaaS. It is SaaS becoming a substrate. The app is the maintained backbone. The user-generated features are the surface. The vendor charges for sync, hosting, sandboxed runtime, observability, governance, and maybe distribution through a marketplace. Run it yourself for free if you want; pay when you want someone else to operate it safely. That is the open-source business model moved up from libraries into core applications.

The distinction from an API matters. APIs give developers primitives. App substrates give everyone a working product plus sanctioned places to change it. Email is the clean example, but the pattern applies to calendars, task managers, personal CRMs, helpdesks, recruiting pipelines, internal request trackers, and any other category where the baseline workflow is generic but the personal edge cases are infinite.

There is a sharp edge though. Legibility cuts both ways. The cleaner and more agent-readable your contract surface, the easier it is for an orchestrator to swap you out for a cheaper backend that implements the same contract. A clean interface only defends you when it sits on top of something that cannot be cheaply reproduced: proprietary data, hard guarantees, real network effects. Without that, machine-legibility is just commoditization with good docs.

## The Economics and the Platform Signal

Build-versus-buy looks like a technical question. I think it is mostly an economic one. The useful framing is not "can an agent do this?" The useful framing is "what does it cost to build, operate, and govern this workflow for three years?"

Run the three-year total cost of ownership honestly. A bespoke build is not just engineering time. It is integration work, model and orchestration runtime, observability and evaluation infrastructure, model-drift maintenance, security review, and on-call burden. SaaS is subscriptions, AI add-ons, usage fees, and some admin time.

When you compare those as fixed-plus-marginal cost curves, the shape becomes clearer. Internal builds carry high upfront platform investment and lower marginal cost. Vendors carry low fixed cost and a higher per-unit price. Bespoke wins when volume is high, reuse is high, or both.

That gives you a rough threshold. Below a few thousand AI-eligible events per month, SaaS is the default. Above tens of thousands per month, re-run the math seriously. If the workflow will be reused across teams, bespoke becomes far more plausible. If it must be regulated, audited, and highly available, weight governance and operations heavily. Token cost is not the whole cost.

So bespoke agents win at scale plus reuse plus low governance burden. SaaS wins at low volume, high compliance, and low operational maturity. Falling model prices do not erase this, because as prices drop, usage rises and workflows get more ambitious. Some of the savings get eaten by ambition.

But don't treat the breakeven as stable. It moves down every time inference gets materially cheaper, and it moves down-market first. The crossover where building beats buying reaches mid-market SaaS before it reaches the low end, not last. Recompute it on every major cost drop rather than trusting last year's threshold.

I think of this as the prototype versus factory split. AI gives everyone a prototype bench, but most of these tools should not quietly become core systems. The Graduation Principle makes the path explicit. Start as a personal or read-only tool. Prove usefulness. Add observability and policy. Then optionally graduate into a shared, governed workflow if it becomes operationally important. The question is not "does bespoke win?" but "when should bespoke stay local, and when should it graduate onto a shared substrate?"

The big platforms are already telling us where they think that substrate lives. Salesforce, Microsoft, Atlassian, ServiceNow, and Datadog are all moving toward the same shape: a shared graph or context layer, an integration ecosystem or marketplace, an AI and agent layer on top, and a governance control plane around all of it.

Read what they are not doing. They are not acting like AI replaces SaaS. They are treating AI as a new client class of the platform. The moat is not the copilot. It is the graph plus governed action. The competitive question is not who ships the best standalone assistant. It is who owns the most useful, trusted, and governable substrate that many agents will depend on.

## The Future SaaS Stack

Seat-based pricing rests on assumptions that agents break. It assumes humans are the primary users, seats proxy for value, and the marginal cost of usage trends toward zero.

None of that holds cleanly for agentic software. A single agent can do the work of many humans, but it consumes real compute, orchestration, and monitoring budget along the way. Counting seats no longer counts the thing that costs money.

So pricing is moving. Vendors now charge per resolution, per conversation outcome, per investigation, or per assisted workflow, because those units map to business work rather than logins. Others bundle a pool of AI credits into a seat subscription and bill overage beyond it, or use AI access as the gate that pushes buyers into a higher tier.

That direction makes sense, but the execution is where buyers get hurt. The hardest models to reason about are hybrid stacks that combine seats, an AI add-on, and usage or outcome charges all at once. They maximize vendor capture and minimize customer clarity. When a product bills for access, AI features, and successful automation simultaneously, forecasting gets hard fast and surprise bills follow. Outcome definitions also drift. If "resolved" quietly means "the user stopped replying," the metric is already misaligned.

I do not think future SaaS pricing collapses into one magic metric. It looks more like a stack of billable layers, each tied to a deeper level of vendor responsibility.

The first layer is data. The vendor stores canonical state and exposes it through stable contracts. Customers pay for storage and indexing, but that is the least interesting part. What they really pay for is the schema, identity model, invariants, permissions, uptime, backups, compliance, auditability, and machine-readable state that agents can safely use. Database rent plus semantics.

The second layer is APIs and integrations. The vendor lets agents and external tools connect to the data graph through APIs, webhooks, event streams, sync connectors, service identities, scoped access, and higher quotas. At minimum, SaaS becomes a governed data product that other tools can build on top of.

The third layer is the baseline app and hook surface. The vendor provides the working application and official extension points: lifecycle events, workflow slots, custom fields, embedded functions, admin controls, and private or public extension distribution. Pricing may still look like a license or tier here. The buyer is not only buying the app. They are buying sanctioned places to adapt the app without forking it.

The fourth layer is hosted runtime. The vendor runs customer code, automations, or AI agents inside its trust boundary. That can be priced per execution, compute duration, model token, scheduled job, queue volume, memory, network, logs, traces, retries, or rollback. This is the strongest bridge between SaaS and cloud pricing. If a customer can run an extension locally for free, the paid product is managed execution. The provider keeps it close to the data, governed by the same permissions, observable by the same admin tools, and reliable enough for shared workflows.

The fifth layer is governance. The vendor helps teams control non-human work: policy engine, approvals, agent inventory, audit trails, spend caps, sandboxing, kill switches, and enterprise review workflows. The more agents and custom extensions a customer runs, the more governance moves from compliance checkbox to core product value.

Put simply:

1. Store and expose my data.
2. Let agents and external tools connect to it.
3. Give me a baseline app with official hooks.
4. Run my custom logic next to the data.
5. Govern all of that for a team or company.

That is the future SaaS stack. Data and API access may be subscription plus storage or quota limits. Baseline app hooks may be a plan tier. Hosted extensions become usage-based runtime. AI agents add token, action, or execution pricing. Governance becomes the enterprise tier.

SaaS does not have to choose between charging for a finished app and giving everything away as APIs. It can expose a layered product: state, contracts, hooks, runtime, and control plane.

The extension itself becomes a durable unit of value. If someone builds a useful email classifier, triage workflow, follow-up agent, invoice exception handler, or recruiting-screening helper, they do not just want to generate it once. They want it to keep running. That recurring execution is where the SaaS provider can charge without owning every feature idea itself.

The cleanest pitch is simple. The core app is free or cheap, the managed substrate is paid, the runtime is metered, and governance is enterprise.

## Buyers and Build-vs-Buy

Buyers need a mental model that survives this. I would sort every purchase into Backbones, Edges, and Glue.

Backbones are systems of record and shared truth: CRM, ERP, HRIS, ITSM, core operational data. Buy these for durability, governance, and extensibility, because you will trust them for years.

Edges are personal and team-level tools: personal agents, dashboards, note tools, local automations. Keep them flexible and easy to replace. Treat them as disposable until they prove durable value.

Glue is the connective layer: iPaaS, orchestration, event buses, agent control planes. It is the highest-impact and highest-risk category, because it becomes both a control point and a risk multiplier. Scrutinize it hardest.

Pricing and structure are only half the purchase. The other half is governance, and that is the buyer's job, not the vendor's. Maintain an agent inventory so you know what is acting in your name. Give non-human actors separate service identities and enforce least privilege. Set budgets and rate limits so worst-case spend at ten times usage is a number you chose, not one you discover. Centralize logs for AI actions so every automated step is auditable.

Never adopt an AI feature you cannot audit. The best SaaS purchases in this world are not the prettiest tools. They are the safest, most extensible, most governable places for shared work to live.

## The Assumptions That Could Break This

Everything above is a bet, not a law. The thesis rests on four load-bearing assumptions. I think they are true today, but each one can break. They should be treated as rate-statements with falsification triggers, not steady-state truths.

**A1, operating cost stays human-expensive.** Reliability, evaluation, incident response, and migration remain labor-heavy, so building is cheap but operating is not. This is the single most important assumption, because the whole argument depends on time-to-reliable-system not compressing as fast as time-to-demo. It breaks when agents self-maintain: self-writing migrations, continuous evaluation, autonomous incident response. If that matures, the build-versus-operate asymmetry collapses and the moat goes with it.

**A2, governance stays distributed at the app layer.** Each system of record is its own trusted control point today. But nobody wants governance smeared across eighty apps, so the obvious end state is one gateway with one audit trail and one policy engine. The trigger to watch is enterprises standardizing on a single cross-app control plane for identity, scopes, and audit. When that gains share, the per-app governance moat consolidates upward, away from the apps that thought it protected them.

**A3, the system of record stays in the app**, not in the data platform. This breaks when a lakehouse plus a semantic layer becomes the canonical joined record and apps are reduced to write-targets.

**A4, incumbents adopt AI faster than new entrants build AI-native systems of record.** The suspect part is survivorship bias. Disruption historically comes from new systems of record, not incumbents bolting on AI. It breaks when outcome-priced, AI-native vendors grow in your category without seat expansion, because they have no seat revenue to protect and can underprice incumbents who cannot cannibalize their own.

There is also a caveat hiding inside the durability argument. Durable is not the same as value-capturing. Holding the substrate is not the same as holding the margin. Substrate without the access layer is a commodity. A vertical app reduced to "the store the agent writes to" keeps its data and loses its pricing power, its brand surface, and its seat-expansion motion. Surviving as a backend is not the same as winning. Watch for gross-margin compression and pricing that shifts from seats to metered actions. That is the tell that durability arrived without the margin attached.

## Which SaaS Becomes Substrate?

For decades the binding constraint was "can we build this software at all?" That question is now answered instantly.

The real question is different. Which parts of our stack should we own as agents and internal tools, and which parts should we still rent as trusted, governed backbones?

The split is clean. AI takes the interface and the orchestration. SaaS keeps the shared state, the invariants, the integrations, the extension hooks, the runtime, and the governance. The winning strategy is to design for that split, not fight it. Build agents on top of governed backbones. Let the backbone hold the truth and enforce the rules while the agent handles the conversation and the workflow.

So SaaS is not going away. It is being demoted and decomposed. It moves from being the place work happens to being the layered substrate work happens on top of: data, APIs, hooks, runtime, governance. That demotion is brutal for some vendors, because surface-level products lose margin and pricing power as their visible layer gets cloned. But it is clarifying for buyers, and for any vendor willing to own the skeleton instead of the skin.
