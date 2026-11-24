---
title: 'Newsletter Automation Without a Paid subscription '
description: >-
  Use GitHub and Newsy to notify readers about new posts without a separate
  email marketing platform.
date: '2026-09-18T01:50:00.000Z'
draft: false
tags:
  - newsletter
  - newsy
  - github
  - publishing
slug: newsletter-email-automation
---
You can notify readers about new posts from a Git-based blog without running a separate email marketing platform. [Newsy](https://github.com/light-cms/newsy) Uses GitHub repository activity and issue subscriptions to deliver post updates through GitHub notifications.

## Where traditional newsletter tools add overhead

Email newsletter platforms can be useful, but they add operational work for small technical blogs:

1. List management: You maintain subscriber data in a separate system.
2. Duplicate publishing: You often copy a Markdown post into an email editor or template.
3. Deliverability operations: You monitor bounces, spam complaints, sender reputation, and authentication records such as SPF, DKIM, and DMARC.
4. Tracking and privacy decisions: Many platforms include open tracking, click tracking, and unsubscribe management features that you need to configure and disclose.

For a developer focused blog, those features can be more than the workflow needs. The trade-off is that you give up marketing automation, segmentation, and analytics.

## How Newsy uses GitHub notifications

Newsy connects publishing events in a GitHub repository to a subscription thread. The workflow below describes the intended model; verify each step against the current Newsy implementation before treating it as product documentation.

```text
Writer publishes in LightCMS
 │
 ▼
 Commit pushed to GitHub repository
 │
 ▼
Newsy detects a new or newly published post
 │
 ▼
Newsy posts a comment to a designated announcement issue
 │
 ▼
GitHub notifies users subscribed to that issue
```

### Delivery steps

1. Commit detection: A publish action creates or updates a Markdown file in the repository. Newsy can watch for a new post or a `draft: false` Change.
2. Announcement thread: Newsy posts the update to a designated GitHub issue, such as an `announcement` issue with a `newsletter` Label.
3. Reader subscription: Readers subscribe by watching or subscribing to that GitHub issue.
4. Notification delivery: GitHub sends notifications based on each subscriber's GitHub notification settings.

## Trade-offs to consider

This approach fits technical audiences better than general audiences.

- GitHub account requirement: Readers need a GitHub account to subscribe. That is reasonable for many developer blogs, but it can block nontechnical readers.
- Plain notification format: GitHub notifications are not a replacement for branded marketing emails. You have limited control over layout and styling.
- Limited analytics: You do not get typical email marketing metrics such as open rate or click-through rate. You can inspect issue participation, but that is not the same as campaign analytics.

## Set up checklist

1. Install Newsy: Add the [Newsy GitHub App](https://github.com/apps/newsletter-newsy/installations/select_target) To the repository that contains your blog.
2. Create the subscription entry point: Generate or create a subscribe link/button that points readers to the announcement issue.
3. Add the link to your site: Place the subscribe link in your blog layout, footer, or post template.
4. Test the flow: Publish a draft post, confirm the commit, confirm the issue comment, and verify that a subscribed account receives a notification.

For related setup details, see [Self-hosting LightCMS](/blog/selfhost/), [Drafts, revisions, and publishing](/blog/lightcms-drafts-and-versioning/), and [Getting started with LightCMS](/getting-started/).
