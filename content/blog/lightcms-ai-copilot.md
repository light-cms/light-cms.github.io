---
title: LightCMS Copilot the in Editor writing Assistant
description: >-
  LightCMS Copilot helps you outline, rewrite, and polish content while keeping
  review and publishing in human hands.
date: '2026-10-16T09:20:00.000Z'
draft: false
tags:
  - lightcms
  - ai
  - writing
  - workflow
  - cms
  - opensource
slug: lightcms-ai-copilot
---
LightCMS includes an AI copilot for specific writing tasks inside the editor, such as outlining, rewriting, expanding, or fixing grammar. It supports the author's draft rather than replacing editorial judgment or factual review.

## What the copilot is useful for


| Task         | Useful input                         | Human review required                        |
| :------------ | :------------------------------------ | :-------------------------------------------- |
| Outline      | A topic, audience, and central claim | Check structure against the actual argument  |
| Rephrase     | A paragraph with clear meaning       | Verify tone and technical accuracy           |
| Expand       | A short note or bullet point         | Remove generic filler and unsupported claims |
| Grammar pass | A nearly final draft                 | Confirm meaning did not change               |


These actions work best when you select specific text and ask for a bounded change. Asking a model to generate a full post from a title increases the risk of generic writing and factual errors.

## Provider and data considerations

LightCMS documentation describes support for OpenAI-compatible providers. Before enabling AI features, confirm:

1. Where text is sent: Which provider receives selected text or prompts.
2. How keys are stored: Whether keys are stored locally, in your instance, or in a third-party service.
3. What is logged: Whether prompts, outputs, or telemetry are retained.
4. What is excluded: Whether front matter, secrets, or unpublished drafts should be filtered from prompts.

Do not include credentials, private customer data, or unpublished sensitive information in prompts unless your provider agreement and internal policy allow it.

## Editorial safeguards

AI output should be treated as draft text. Verify technical claims, product behavior, pricing, dates, and quotes before publishing. Keep the author's voice by rewriting generated text where it sounds generic or overconfident.

The trade-off is speed versus trust. AI can shorten drafting time, but unreviewed AI output can damage credibility. A Git based workflow helps here because edits remain visible in diffs and can be reviewed before merge or deploy.

For related guidance, see [AI-Assisted Blogging: Where AI Helps and Where It Fails](/blog/ai-assisted-blogging/) and [Voice-to-Text Dictation in LightCMS](/blog/lightcms-voice-to-text/).
