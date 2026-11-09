---
title: "The LightCMS AI Copilot: Drafting Help That Stays in Your Repository"
description: "The built in AI copilot drafts outlines, rewrites paragraphs, and fixes grammar inside LightCMS, running on any OpenAI-compatible provider you choose."
serial: 32
date: 2026-10-16T09:20:00Z
draft: false
keywords:
  - ai cms
  - ai writing assistant markdown
  - lightcms ai copilot
  - openai compatible cms
  - ai content workflow
preview: /og-image.webp
taxonomies:
  tags:
    - lightcms
    - ai
    - writing
    - workflow
---

The quickest way to make a writing tool unpopular is to fill it with generated text you did not ask for. The [LightCMS](https://lightcms.me) AI copilot works differently: the model helps, and you keep ownership of the draft.

It is not a chat window. It is a set of actions that work with the text you are already editing.

## What it does

Select a paragraph, or select nothing, and the copilot gives you four options:

- **Outline**: Turn a topic into a structure you can accept, reorder, or delete.
- **Rephrase**: Rewrite the same idea in a different tone. You can tighten a long sentence, make a note more formal, or soften a harsh line.
- **Expand**: Turn a short idea into a fuller draft when you know what to say but not how much to write.
- **Fix grammar**: Clean up punctuation, grammar, and typos before you publish.

Every result appears in the document as editable text. You can accept it, change it, or undo it. Nothing is saved until you publish, and nothing is published until you have read it.

## Bring your own model

LightCMS works with any OpenAI-compatible endpoint.

| Provider | Why people choose it |
| :--- | :--- |
| **OpenAI** | Familiar models with broad capability |
| **OpenRouter** | One key for many models, with easy switching |
| **Groq** | Fast inference and a free tier |
| **NVIDIA NIM** | Endpoints you can run yourself, including GPU-friendly setups |

Because LightCMS uses the standard `/v1/chat/completions` format, other compatible endpoints can work too. That includes a local model behind an OpenAI-compatible proxy, a private gateway, or a company endpoint.

Your API key stays in your LightCMS instance. The text you send for a copilot action goes to the provider you configured. For a self-hosted, Apache-licensed tool, that control matters.

## Why it lives in the editor

A chat can produce long, generic text that you still need to paste, format, and rewrite. Contextual actions avoid that problem.

- **Small scope**: Rephrasing a paragraph has a clear result. "Write me a blog post" does not.
- **Formatting stays intact**: The copilot works inside the editor, so lists stay lists and front matter stays untouched.
- **Fast iteration**: If you do not like the result, regenerate the selected text instead of the whole document.

This makes AI feel like a set of small edits, closer to how a copy editor works.

## Use it responsibly

- **Write the voice yourself**: Use outlines and expansions as starting points, then keep the sentences that sound like you.
- **Check the facts**: The model does not know your codebase, your product, or your numbers.
- **Keep secrets out of prompts**: Anything you send to a provider is visible to that provider.

LightCMS saves only what you approve. It does not generate content in the background, store drafts on LightCMS servers, or use your drafts for training.

## When it helps most

- **Getting started**: An outline turns a blank page into a draft you can react to.
- **Rewriting at the end**: Tighten the introduction after you know what the post says.
- **Final cleanup**: Run a grammar pass in the last few minutes before publishing.

## Frequently Asked Questions

### Do I need an API key?

Yes, to use the copilot you need to configure a provider in your LightCMS instance. Everything else in the editor works without an API key.

### Will my content be used to train models?

No. LightCMS sends only the text you select for an action to the endpoint you configured. It does not send your repository or drafts anywhere else.

### Can I use a local model?

Yes. If the model exposes an OpenAI-compatible API, point LightCMS at that endpoint and the copilot works the same way.

### Will it change my front matter?

No. Copilot actions affect only the content you select.

Paired with [voice-to-text](/blog/lightcms-voice-to-text/), the copilot helps with both sides of drafting: getting words down quickly and shaping them into a publishable post.
