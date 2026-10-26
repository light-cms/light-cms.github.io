---
title: "Drafts, Revisions, and Rollbacks: Version Control for Writers"
description: "LightCMS turns Git history into an editorial workflow: drafts, commits, pull requests, and one-click rollback, without asking a writer to learn Git."
serial: 34
date: 2026-10-16T09:40:00Z
draft: false
keywords:
  - git versioning content
  - cms draft workflow
  - content rollback
  - markdown version history
  - lightcms drafts
preview: /og-image.webp
taxonomies:
  tags:
    - lightcms
    - git
    - workflow
    - collaboration
---

Version control is the best argument for a Git-backed CMS, and the one most badly explained. Writers do not want to hear about commits, fast-forwards, or trees. They want to know three things: **can I save this without publishing it, see what changed, and undo it if I got it wrong?**

Git answers all three without a writer learning Git.

---

## The Draft Stays a Draft

`draft: true` in the front matter is the whole mechanism. When you create or edit a post in LightCMS, the flag lives in the file's front matter, and your SSG skips it during build. The post sits in the repository, reviewable and safe, and never renders on the live site.

Flip it to `false` on publish and the next build picks it up. No separate "drafts database" can drift from what sits in your repository, and a draft cannot leak because two systems disagree about its state.

Because a draft is just a file, everything else works on it too: it can sit on a branch, live behind a pull request, be edited by someone else, and be diffed line by line before it goes live.

---

## Every Save Is a Commit

Each publish in LightCMS creates a commit with a coherent message, which gives you:

- **Complete history.** Who changed what, and when. No plugin required.
- **True diffs.** Markdown diffs are readable, unlike rows in a `post_content` column.
- **Blame that means something.** You can ask when a paragraph changed and get an answer.
- **Free backups.** Every clone of the repository is a full copy of your content.

For a solo writer this is invisible infrastructure. For a team, it is the audit trail that most commercial CMSs charge for.

---

## Branches and Pull Requests: Editorial Review, Properly

LightCMS can publish in two modes, and choosing between them is choosing your editorial process:

| Mode | Flow | Best for |
| :--- | :--- | :--- |
| **Direct commit** | Publish → commit → CI builds → live | Solo writers, low-risk edits, quick fixes |
| **Pull request** | Publish → PR → review → merge → CI builds | Teams, drafts with oversight, sensitive changes |

The pull request mode deserves the attention. It gives you a real editorial gate: a colleague reads the proposed Markdown, leaves a comment on the exact sentence they object to, and merges when it is right. That gate runs on GitHub's native review tools rather than a bespoke approval system that locks your content to one vendor.

Turn on branch protection and "publish" means "submit for review." Turn it off and "publish" means "publish."

---

## Rollback: The Feature People Forget to Ask For

Every CMS should answer one question fast: **something wrong is live, so how do I fix it?**

With Git-backed content the answer is a revert:

1. Open the file's history in GitHub (or LightCMS).
2. Choose the last good version.
3. Revert.

The correction commits like any other edit, your pipeline rebuilds, and the bad version is gone, usually within a minute on a modern host. Restoring a database backup at 2am also reverts every *other* change made in between. With per-file history, you roll back one post, not the whole site.

---

## Why Not Just Use Word and Email?

Because that round trip loses content. The version in the attachment is not the version on the site, nobody knows which file is canonical, and eventually someone publishes `final-v3-USE-THIS.md`. A shared repository with a visual editor collapses the loop: one file, one history, one publish button.

---

## A Practical Team Setup

For a small team, the arrangement that tends to stick:

- **Main branch is always deployable.** Only merges reach it.
- **Features and drafts on branches.** Long-form work in progress stays off main without being hidden.
- **Pull requests for anything editorially sensitive**, direct commits for typo fixes, because requiring review on a comma correction guarantees people will work around the process.
- **Tag or milestone releases** if you publish on a schedule; a failed deploy can then be traced to a known set of changes.

None of that is configured inside LightCMS. It is standard GitHub practice, which is the point: the CMS inherits a workflow your repository already has.

---

## Frequently Asked Questions

### Do writers need to learn Git?

No. They use the editor and a publish button. Branches, commits, and pull requests exist underneath and are surfaced only when you choose to use them.

### Can I restore an old version of a post?

Yes. Reverting to a previous commit restores that file's content, and the next build publishes it.

### Are drafts visible to the public?

No. A post with `draft: true` is excluded from the build, so it never reaches the deployed site. It is visible to anyone with repository access, which is the point.

### What happens if two people edit the same post?

The second commit conflicts, and Git flags it explicitly rather than silently overwriting. For most teams, publishing to a branch and reviewing with a pull request removes the problem before it happens.

### Does LightCMS keep its own copy of my content?

No. The repository is the source of truth, the same [zero lock-in principle](/blog/what-is-lightcms/) that makes the approach worth choosing.

---

See [starting from a starter template](/blog/start-with-a-lightcms-template/) to set up a repository with this workflow already wired, or [the editor tour](/blog/lightcms-editor-tour/) to see the writing side of it.
