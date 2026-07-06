---
title: 'Migrating from SugarWOD to Hevy with AI'
date: '2026-06-22'
draft: false
path: '/blog/migrating-sugarwod-to-hevy-with-ai'
description: "Switching workout apps meant losing years of history or building a converter no one had written. Here's how I used AI to make the move worth doing."
---

I have been tracking workouts in SugarWOD for years. It let me record my lifts and worked well for my Olympic lifting programming, but I couldn't add custom movements. SugarWOD doesn't know every lift, so anything I was doing outside the library became a note or a gap in my history. As I have been shifting toward more varied workouts and weightlifting programming, that started to matter more. I kept losing the history of what weight I used for some odd dumbbell movement a few weeks ago, usually right when I wanted to match it.

I did some research and found that [Hevy](https://www.hevyapp.com/) could work since it had bigger library of movements, but more importantly, it supported custom exercises. But Hevy can't import data from SugarWOD directly, it only reads data in the **Strong app CSV** format, and there was no built-in converter.

A few years ago, this is where I would have stopped. I would either eat the loss and start clean in Hevy, or stay on SugarWOD out of inertia. Writing a one-off CSV converter for a single export of my own data was never worth an evening. With AI, it became small enough to try.

## Using AI outside work

This was never a technically hard migration. I knew that I probably could spend a few hours researching and learning SugarWOD's `workouts.csv` format and figuring out how to map it to Strong's per-set columns in an afternoon. I just never wanted to spend that time after a full day of work, on top of after doing my workout, and then coming back to my computer to do more of the same.

So instead I just described the problem to an AI and in a matter of minutes I had a stdlib python script. It parsed SugarWOD data, emitted Strong-shaped rows, and I could run it locally to get the new file to import into Hevy. The cost of "just build it" dropped from a weekend project to something I could do between normal Slack messages.
 
But not everything was perfect. The script only got correct because I kept running a validation loop manually. I exported and converted my data and when imported into Hevy I had to spot-check a workout I knew. I kept finding mistakes, so I would then tell the AI what was wrong and had it update the script. Writing this now, I probably could have automated more of that if I had used the websites instead of my phone, or if either app had an API available to free tier customers.

## Migrating bugs

If anyone else wants to know what those things are, they were small, specific things I didn't find documented anywhere obvious:

- **Weights are kg in Strong CSV**
  - SugarWOD logs lbs. If I copied `320` straight through, Hevy read it as 320 kg (~705 lbs displayed). I had to write kg values that round-tripped back to my actual plate weight.
- **Precision matters**
  - After conversion, 190 lbs can display as 189.99 depending on decimal places. The converter tries 2–5 kg decimals until the round-trip matches, since workout weights usually only increment by 2.5 or 5 lbs.
- **Duplicate export rows**
  - Some workouts on the same date and title had different `set_details`. Rather than asking AI to analyze every case, I kept it simple and deduped down to the richest row.
- **Unmapped names become new custom exercises**
  - `Back Squat` and `Squat (Barbell)` split my history unless I mapped them together, so I had to match those to new names in Hevy.

None of that is hard once you see it. I only saw it because I kept importing real workouts and eventually noticed my 320 lb squat now claimed I had lifted a small car 10 times over.

## Now a free tool

The converter is open source: [github.com/smyrick/sugarwod-to-hevy](https://github.com/smyrick/sugarwod-to-hevy).

If you are moving your own data I would instead just ask your own AI tools to help you do it by pointing at the link above. I tried documenting everything so that non technical users (and agents) could take advantage of it, but if you are comfortable running a python script, there are instructions in the repo.

## Learnings

I didn't set out to write a tool or some unicorn app, and I didn't need one to already exist. I just needed the bar for "just build it" to be low enough that keeping years of training history was worth ten minutes instead of a lost weekend. That's what AI changed for me here. It didn't make the impossible possible so much as it made the not-worth-it worth doing.

PRs welcome for exercise names the mapper doesn't know yet.
