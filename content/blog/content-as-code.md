---
title: 'Content as Code: Treating Writing Like Source code'
description: >-
  Content as code means storing writing as plain text in a repository, reviewed
  and deployed like software, with the workflow benefits and the real
  limitations.
date: '1111-11-11T11:11:00Z'
draft: false
keywords:
  - content as code
  - docs as code
  - content in git
  - markdown workflow
  - version controlled content
tags:
  - ssg
  - static
  - site
  - static site
  - frontmatter
  - opensource
  - cms
isCJKLanguage: false
headless: false
serial: 47
preview: /og-image.webp
taxonomies:
  tags:
    - git
    - workflow
    - cms
    - explainers
---
**Content as code** is the practice of storing posts/content the way developers manage source code: plain text files in a repository, validated through automated checks, and deployed by a pipeline and each and every step is auditable.

"Docs as code" is the older name. Technical documentation teams started it, and it has spread to blogs, change logs, marketing copy, and anything else that used to live in a wiki or a CMS’s database.

## The Three Commitments

Content as code comes down to three choices:

1. **Plain text is the format.** Markdown or AsciiDoc, YAML or TOML front matter, UTF-8 files. Nothing proprietary, nothing that needs the original tool to open.
2. **The pipeline treats content like a build.** Linters check links and style, previews render every pull request, and merging deploys.
3. **The repository is the system of record.** If it is not in Git, it does not exist; each modification stays auditable and atomic.

Once those hold, most of the benefits follow automatically.

### Review that means something

A pull request on a document gives line level comments on the exact sentence, an explicit approve, and a merge. Editorial review happens in the pull request instead of an email thread with attachments.

### History that answers questions

`git log` on a file shows every change, author, and timestamp. "When did we change the pricing claim?" is a search, not an investigation.

### Automation

Spelling, link checking, style rules, front matter validation, and preview builds all run on the same CI that builds code. Broken metadata fails the pipeline instead of the live site.

### Parallel work

Two writers on two files merge cleanly. Conflicts are rare by construction, because the unit of content is a file.

### Backup and portability

Every clone is a complete copy. Moving platforms is a `git clone` away from succeeding.

---

## Where It Gets Hard

The honest list, because this is not free:

- **Non-technical writers need an interface.** Raw Git is a cliff. Content as code works in practice when you pair the repository with an editing tool that hides the complexity and streamlines the process.
- **Rich media is clumsier.** Images and documents mean binary files in the repository; Though it’s not an issue with lightcms thanks to our built in cdn.

- **Merge conflicts still exist.** Rare when files are per document, painful when two people edit the same long file but thanks to git’s architecture it’s easy to fix such.

None of these are disqualifying for a publication. All of them are real for other shapes of work.

## The Practical Stack

A typical content-as-code setup for a publication looks like this:

```text
content/
├── posts/
│   ├── 2026-10-16-shipping-notes.md
│   └── 2026-10-02-release-1-4.md
├── pages/
│   └── about.md
└── _index.md
```

- **Files** carry Markdown and front matter.
- **CI** validates front matter, checks links, and builds previews per pull request.
- **A CMS tool** provides the writing surface for anyone who is not comfortable in an editor.
- **Deploy** publishes the built output on merge.

The repository stays recognizable to a developer and invisible to a writer. That balance is the whole trick.

---

## Why It Lasts

Content as code wins on time. Databases need their schema, their server version, and their vendor. Wikis need their vendor. Proprietary documents need their vendor.

A directory of Markdown files needs a text editor, and it will still open in one in twenty years, regardless of what happens to any tool in the chain. For content meant to outlive the platform it was written on, that is risk management rather than nostalgia. A content written for hugo should work on astro starlight with very less friction even after 10 15 yrs later.

The same premise runs through every Git based CMS: [LightCMS](/blog/what-is-lightcms/) adds the writing surface, and the repository keeps the permanence. See [drafts, revisions, and rollbacks](/blog/lightcms-drafts-and-versioning/) for the workflow in detail.

#### Frequently Asked Questions

### Is content as code the same as a Git based CMS?

It is the philosophy; a Git based CMS is one implementation. You can practice content as code with nothing but an code editor, and a Git based CMS gives an way for non developers to use static site generators.

### Do writers need to learn Git?

Not if the tooling is right. Writers should see an editor and a publish button; commits, branches, and reviews happen underneath.

### How do you handle images?

Either committed to the repository or stored in an asset bucket with references in front matter. 

The second approach keeps the repository lean, as Git is not optimized for handling non-textual data.

### Can I adopt it incrementally?

Yes. Start with one content directory and one pipeline. The format does not require a flag day migration.

Related: [what is a Git based CMS?](/blog/git-based-cms-explained/), [front matter explained](/blog/what-is-front-matter/), and [version control for writers](/blog/lightcms-drafts-and-versioning/).
