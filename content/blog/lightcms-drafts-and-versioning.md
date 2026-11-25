---
title: "Drafts, Revisions, and Rollbacks in a Git Based CMS"
description: "How Git based content workflows handle drafts, commit history, pull request review, and rollbacks for static site publishing."
serial: 34
date: 2026-10-16T09:40:00Z
draft: false
tags:
  - lightcms
  - git
  - workflow
  - collaboration
---

A Git based CMS can handle drafts, revisions, and rollbacks by storing content as files in a repository and using Git history as the audit trail. The practical value is simple: you can save work without publishing it, inspect what changed, and revert a bad edit without restoring an entire database.

## Drafts as file state

In many static site workflows, a draft is represented by front matter such as `draft: true`. The file can exist in the repository while the static site generator skips it during production builds.

```yaml
---
title: "Draft post"
date: 2026-10-16T09:40:00Z
draft: true
---
```

This approach keeps draft state close to the content. The trade-off is visibility: anyone with repository access can see the draft file, even if the public site does not render it.

## Revisions through commits

Each saved or published change can create a Git commit. That gives you a readable history for Markdown files, including diffs, author metadata, and timestamps.

| Need                  | Git based workflow                    | Trade-off                                           |
| :-------------------- | :------------------------------------ | :-------------------------------------------------- |
| See changes           | `git diff` or pull request diff       | Requires clear commit messages to be useful         |
| Audit history         | Commit log and blame                  | Repository access model controls who can inspect it |
| Recover content       | Revert commit or restore file version | Reverting may require conflict resolution           |
| Review before publish | Branch and pull request               | Adds process overhead for small edits               |

For teams, pull requests provide an editorial review gate. For solo writers, direct commits to a main branch may be faster, but they remove the review step.

## Rollback as a normal Git operation

When a published post has an error, Git allows you to revert the commit that introduced it or restore a previous version of the file. After the fix is committed, your CI/CD pipeline rebuilds and deploys the site.

A file-level rollback is narrower than a database restore. It can undo one post while leaving other recent changes intact.

## Choosing a workflow

Use direct commits when speed matters and the risk of an error is low. Use branches and pull requests when content needs review, legal approval, or coordinated release timing. The best workflow is the lightest one that still gives your team the review and recovery controls it needs.

For related reading, see [The LightCMS Editor Tour](/blog/lightcms-editor-tour/) and [What Is a Git based CMS?](/blog/Git based-cms-explained/).
