---
title: "Dictate Your Drafts: Voice-to-Text in LightCMS"
description: "How LightCMS turns spoken ideas into structured Markdown with Whisper transcription: record, review, and edit a dictated post without leaving the browser."
serial: 33
date: 2026-10-16T09:30:00Z
draft: false
keywords:
  - voice to text markdown
  - dictation blogging
  - whisper transcription cms
  - speech to text writing
  - lightcms voice
preview: /og-image.png
taxonomies:
  tags:
    - lightcms
    - writing
    - workflow
    - accessibility
---

Typing is a bottleneck that nobody rates honestly. A comfortable talker delivers around 150 words per minute; a good typist manages 40 to 60. For the first 15 minutes of a post (the part where an idea is still slippery), speaking beats typing by a factor of three.

LightCMS puts dictation directly in the editor: press record, talk, and get structured text back in your draft.

---

## How It Works

1. **Hit record** in the editor. The browser asks for microphone permission once.
2. **Speak naturally.** Pauses are fine; you are thinking out loud, not reading a script.
3. **Stop.** LightCMS sends the audio to a [Whisper](https://github.com/openai/whisper) transcription endpoint powered by Groq, then inserts the returned text at the cursor.
4. **Edit as usual.** The transcript lands as ordinary Markdown in the document: still your words, still fully editable, still only committed when you publish.

The transcript is not a separate artifact or an attachment. It becomes part of the post the moment it arrives, so the pass that follows is ordinary editing: cut the ramble, fix the order, add the headings.

---

## Why Whisper, Specifically

Automatic speech recognition has improved sharply, but transcription quality still varies a lot between models. Whisper handles the things that sink weaker systems when applied to writing:

- **Punctuation and casing**, so the output reads like prose rather than a caption file.
- **Domain vocabulary** — library names, framework names, API terms — far better than older dictation engines.
- **Disfluency tolerance**: you can restart a sentence mid-thought, and the transcript follows the final version instead of stitching every false start together.

Running it on Groq's inference hardware keeps the round trip short enough that dictation feels like writing rather than like uploading.

---

## The Workflow That Works Best

Dictation rewards a little structure. The pattern that produces the cleanest drafts:

- **Talk first, structure second.** Speak the whole idea without worrying about sections — you are capturing, not composing.
- **Stop and read it back.** Spoken text always contains repetition that felt necessary at the time. Delete it immediately, before it anchors you.
- **Insert headings where the thought changed.** Speak a line like "now let's talk about deployment," then promote it to an `##` heading. The transcript has already told you where the sections are.
- **Do the formatting pass at the end.** Lists, links, code, and code blocks are faster to add once the prose is settled.

10 minutes of talking and 10 minutes of editing routinely produces a fuller draft than 30 minutes of silent typing.

---

## Dictation as an Accessibility Feature

Voice input is not only a speed trick. For writers with repetitive strain injuries, motor limitations, or simply tired hands at the end of a working day, it is the difference between publishing and not publishing. Because the output is plain Markdown in a visual editor, the whole pipeline (record, transcribe, edit, publish) happens without touching the keyboard.

---

## What Happens to the Audio?

The recording is sent for transcription and used to produce your text. It is not attached to your repository: what lands in Git is the Markdown, exactly as with any other edit. Your content stays files in your own repository, which is the same promise the rest of LightCMS makes: [zero lock-in, zero database](/blog/what-is-lightcms/).

---

## A Note on Review

Transcription is excellent and not infallible. Homophones, background noise, and unusual proper nouns still need a human pass, particularly for a post that will be indexed and read for years. Treat the transcript as a fast first draft rather than a final one; the editing step is not optional, only shorter than writing from scratch.

---

## Frequently Asked Questions

### Do I need a separate transcription subscription?

No. Transcription runs through the Whisper endpoint configured for your LightCMS instance — the same bring-your-own-endpoint model as the [AI copilot](/blog/lightcms-ai-copilot/).

### Does it work in languages other than English?

Whisper is multilingual. Quality depends on the model and the endpoint you configure, so test a short recording in your language before committing to the workflow.

### Can I dictate into an existing post?

Yes. Place the cursor anywhere in the document and record — the transcript is inserted at the cursor rather than appended at the end.

### Will my microphone keep recording?

No. Recording is explicit: you start it and you stop it.

---

Next: [how drafts, revisions, and rollbacks work](/blog/lightcms-drafts-and-versioning/) once the words are on the page.
