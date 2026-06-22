---
title: 'Migrating from SugarWOD to Hevy with AI'
date: '2026-06-22'
draft: false
path: '/blog/migrating-sugarwod-to-hevy-with-ai'
description: "Switching workout apps meant losing years of history or building a converter no one had written. Here's how AI turned that into an easy yes."
---

I tracked workouts in SugarWOD for years. It allowed me to record my lifts and works well with olympic lifting programming, but you can't add custom movements. It doesn't know every lift, so anything off-menu became a note or a gap in my history. As I have been shifting to more varied workouts and programming this was becoming an issue where I was loosing the history of what weight I did for some odd dumbell movement weeks ago and wanted to match.

I wanted to move to [Hevy](https://www.hevyapp.com/) for custom exercises and a bigger library. But Hevy can't import data from SugarWOD directly. It only reads data in the **Strong app CSV** format, and there was no built-in converter.

A few years ago this is where I'd have stopped. Either eat the loss and start clean in Hevy, or stay on SugarWOD out of inertia. Writing a one-off CSV converter for a single export of my own data was never worth an evening, but now in the age of AI this was a perfect challenge.

## The part AI changed

The migration was never impossible. Anyone fluent in Python could map SugarWOD's `workouts.csv` format onto Strong's per-set columns in an afternoon. I just never got around to spend that time after a full day of work, doing my workouts and wanting to come back to my computer after a long day of already doing the same.

So instead I described the problem to an AI and had a working, stdlib-only script in minutes. It parsed SugarWOD, emited Strong-shaped rows and I could run it with `python3`. The cost of "just build it" dropped from a weekend project to a conversation on the side of my daily slack messages.

What it didn't do was get it right the first time. Correctness came from a loop I had to drive manually. Every export, convert, import into Hevy required a spot-check where I looked at the work out for the day and told the AI what it got wrong and what to fix and repeat. As I am writing up this blog, this step probably could have been automated more if I had used the websites instead of my mobile phone or if they had some API available.  

## Migrating bugs

The bugs that only surfaced in that loop were fun small things I didn't find documented easily

- **Weights are kg in Strong CSV**
  - SugarWOD logs lbs. Copying `320` straight through and Hevy reads 320 kg (~705 lbs displayed). You have to write kg that round-trips back to your plate weight.
- **Precision matters**
  - After conversion 190 lbs can display as 189.99 depending on decimal places. The converter tries 2–5 kg decimals until the round-trip matches, given that workout weights usually only increment by 2.5 or 5 lbs.
- **Duplicate export rows**
  - Some workouts on the same date and title had different `set_details`. Rather than using AI to analyze, I kept it simple and deduped and keep the richest row.
- **Unmapped names become new custom exercises**
  - `Back Squat` and `Squat (Barbell)` split your history unless you map them together, so I had to match those to new names in Hevy

None of that is hard once you see it. But you only see it by importing real workouts and noticing your 320 lb squat now claims you lifted a small car 10 times over.

## If you want to do the same

The converter is open source: [github.com/smyrick/sugarwod-to-hevy](https://github.com/smyrick/sugarwod-to-hevy). 

The short version:

1. **Export** from SugarWOD and save the emailed `workouts.csv`.
2. **Convert** it by running `python3 run.py` from the repo, or point a coding agent at the repo and let it follow the included `SKILL.md`.
3. **Import** into Hevy, spot-check a session you know, and hit **Revert Data Import** if anything looks off before trying again.

## Learnings

I didn't set out to write a tool or some unicorn app, and I didn't need one to already exist. I needed the bar for "just build it" to be low enough that keeping a decade of training history was worth ten minutes instead of a lost weekend. That's what AI changed for me here. It didn't make the impossible possible so much as it made the not-worth-it worth doing. 

PRs welcome for exercise names the mapper doesn't know yet.