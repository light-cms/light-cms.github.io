---
title: "Dictate Your Drafts: Voice to Text in LightCMS"
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
preview: null
taxonomies:
  tags:
    - lightcms
    - writing
    - workflow
    - accessibility
---
Typing is a bottleneck no one quantifies. A conversational speaker rates 150 wpm and a good typist 40-60. After 15 minutes in a post, when it's still slippery, speaking is three times faster than typing.

LightCMS features dictation. Hit record, speak, and your words are written to your draft.

---

How It Works

1. Open your application in the editor. Browser prompt for microphone permission.
2. Just Speak. Pauses are okay; you are just spit balling, not reading.
3. Stop. LightCMS is feeding the audio into a Whisper transcription endpoint on Groq, and placing the returned text into the cursor.
4. The transcript appears as plain old Markdown in the page: still your words, still fully editable, still only pushed when you publish.

The transcript is not an attachment or a separate piece. It's a component of a post as soon as it comes in, so the next pass is just common editing: cut the rambling, put in the order, insert the headings.

---

Why Whisper, Specifically

Speech to Text has been made smarter – but individual transcriptions are not guaranteed to be the same. Given the sinking of weaker systems by prose, Whisper:

- punctuation and case, so the output looks like prose instead of a caption file.
- Domain vocabulary: by which I mean library names, framework names, API terminology etc. come through far better than I experienced with older dictation engines.
- Disfluency tolerance: With editing, you are able to pick up a sentence in the middle of a thought and not patch up false starts in the transcript.

Having it on Groq's inference hardware is fast enough that the round trip is short enough that dictation is almost as quick as writing.

---

The Most Effective Workflow

There is a bit of pattern to this; dictation favors a bit of form. The most productive structure:

- Maybe talk first, structure second. Say it all in the first draft, doesn't get bogged down in sections.
- Stop and read it back What you've spoken will be full of repetition that seemed right at the time. Remove it before it gets stuck in the draft.
- Name down the new section where the thought changed. Now let's talk about deployment. Promote to ## heading by adding # before it. The transcript has already told you where the sections are.
- > Do the formatting pass at the end. Lists, links, code, and code blocks are faster to add after the writing is finished.

10 mins of talking, 10 mins of editing, each of you, routinely produces a much fuller draft than the other person sitting alone at the keyboard for 30 minutes, in silence.

---

Dictation as an Accessibility Feature

It's not just about time. For the one-too-many carpal tunnel suffers and/or weary-fingered scribes, voice input means the decision – or lack of it – on publication. The default visual-editor output, raw MD, means the entire pipeline (record, transcribe, edit, publish) can be done without getting your fingers on the keyboard.

---

What Happens to the Audio?

LightCMS transmits the recording for transcription and provides your text back. The audio never touches your repository: what goes into git is the Markdown, just like any other edit. Your writing is stored as files in your repository, which is the same promise that the rest of LightCMS makes: zero lock-in, zero database.


## A Word on the Review

The transcription is great, but not perfect. Homophones, noisy environments and long strange names should still be checked by a person, especially for a post that will be indexed and read for years. Use the transcript as a quick first draft, not the final; editing is mandatory, only shorter than starting from scratch.

Frequently Asked Questions:-

## Do I need a separate transcription subscription?

No. Transcription is directed to the Whisper endpoint that is configured for your LightCMS instance, in the same way as the AI copilot - bring-your-own-endpoint model.

## Is it effective in other languages?

Whisper supports multilingualism. Quality varies according to model and your endpoint so try a quick sample in your language before going on to the workflow.

## Is it possible to Dictate into an Existing Post?

Yes. Put the cursor anywhere within your document and start typing. The transcript will appear as the cursor.

## Will the microphone continue recording?

No. It is quite explicit: you record it and then you stop recording.

Next: what happens once we get the words on the page.