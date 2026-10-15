---
title: "The LightCMS AI Copilot: Drafting Help That Stays in Your Repository"
description: "The built-in AI copilot drafts outlines, rewrites paragraphs, and fixes grammar inside LightCMS, running on any OpenAI-compatible provider you choose."
serial: 32
date: 2026-10-16T09:20:00Z
draft: false
keywords:
  - ai cms
  - ai writing assistant markdown
  - lightcms ai copilot
  - openai compatible cms
  - ai content workflow
preview: /og-image.png
taxonomies:
  tags:
    - lightcms
    - ai
    - writing
    - workflow
---

The fastest way to make a writing tool unpopular is to fill it with generated text nobody asked for. The LightCMS AI copilot is built on the opposite premise: **the model assists inside your workflow, and you remain the author.**

It is not a chat window bolted onto a CMS. It is a set of contextual actions sitting next to the text you are already editing.

---

## What It Actually Does

Select a paragraph, or nothing at all, and the copilot offers the four things writers repeatedly do:

- **Outline** — turn a topic into a structured skeleton of sections and bullets you can accept, reorder, or delete.
- **Rephrase** — same meaning, different register: tighten a rambling sentence, make a casual note more formal, or soften a blunt one.
- **Expand** — take a compressed idea and pull it out into a full draft, useful when you know what you want to say but not how long to say it.
- **Fix grammar** — punctuation, agreement, stray typos. The unglamorous pass that happens right before publish.

Every result lands in the document as editable text. Accept it, tweak it, or undo it. Nothing is committed until you publish, and nothing is published that you did not read.

---

## Bring Your Own Model

LightCMS talks to any **OpenAI-compatible** endpoint, which covers a wide field without a proprietary wrapper:

| Provider | Why people pick it |
| :--- | :--- |
| **OpenAI** | Broadest capability, familiar models |
| **OpenRouter** | One key, many models, easy switching |
| **Groq** | Very fast inference, generous free tier |
| **NVIDIA NIM** | Self-hostable and GPU-friendly endpoints |

Because the interface is the standard `/v1/chat/completions` shape, anything else exposing it (a local model behind an OpenAI-compatible proxy, an internal gateway, a corporate endpoint) works too.

Practically, this means your API key lives in **your** instance of LightCMS. Your drafting data goes to the provider you configured, under the account you control. For a self-hosted, Apache-licensed tool, that is the only arrangement worth having.

---

## Why It Lives in the Editor, Not a Sidebar Chat

Long conversations with a model tend to produce long, generic prose that then has to be pasted, formatted, and de-AI-ified. Contextual actions avoid that failure mode:

1. **Scope is small.** "Rephrase this paragraph" has a bounded, verifiable result. "Write me a blog post" does not.
2. **Formatting is preserved.** The copilot operates inside the editor's schema, so a rewrite of a bulleted list stays a bulleted list, and front matter is never touched.
3. **Iteration is fast.** Dislike the result? Regenerate the selection, not the document.

The practical effect is that AI becomes a set of micro-edits woven into your normal pass, the way a good copyeditor works minus the scheduling.

---

## A Responsible Default

A few habits the workflow encourages:

- **Generate structure, write voice.** Outlines and expansions are starting points; the sentences that sound like you are the ones you keep.
- **Verify claims.** The model does not know your codebase, your product, or your numbers. Facts remain your job.
- **Keep secrets out of prompts.** Anything you send to a provider is visible to that provider, so treat prompts like any third-party service.

LightCMS commits whatever you finally approve. There is no silent background generation, no content stored on a LightCMS server, and no training loop attached to your drafts.

---

## When the Copilot Earns Its Keep

- **Cold starts**: an outline converts a blank page into a list you disagree with, and disagreement is much easier to write against than emptiness.
- **Rewrites at the end**: tighten the intro after the piece is done, when you finally know what it is about.
- **Grammar passes**: the last five minutes before publish, when your eyes stop seeing commas.

---

## Frequently Asked Questions

### Do I need an API key?

To use the copilot, yes — you configure a provider in your LightCMS instance. Everything else in the editor works without one.

### Is my content used to train models?

No. LightCMS sends only the text you explicitly select for an action, to the endpoint you configured. Your repository and drafts are not shipped anywhere else.

### Can I use a local model?

If it exposes an OpenAI-compatible API, yes. Point LightCMS at the local endpoint and the copilot works the same way.

### Will it rewrite my front matter?

No. Copilot actions are scoped to the selected body content; metadata is untouched.

---

Paired with [voice-to-text](/blog/lightcms-voice-to-text/), the copilot covers the two halves of drafting: getting words out quickly, and getting them into shape.
