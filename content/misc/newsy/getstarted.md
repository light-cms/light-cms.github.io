---

title: "Getting Started with Newsy: GitHub-Powered Newsletters"
description: "Deploy and self-host Newsy, a serverless newsletter platform powered entirely by Go, WebAssembly, and GitHub Issues."
label: "Getting Started"
tags:
- newsy
- newsletter
- modern solution
- free newsletter
- github
- golang
- webassembly
isCJKLanguage: false
---


Introducing [Newsy](https://newsy.lightcms.me), an open-source newsletter platform powered by GitHub.

Newsy is heavily inspired by tools like Utterances, Giscus, and Gitalk, which reimagined commenting for static sites using GitHub Issues. 
Newsy takes the same GitHub-driven approach and brings it to newsletters:
instead of relying on external services or maintaining a separate mailing list,
your newsletter lives right alongside your code in your GitHub repository.

Why GitHub?

1. Your newsletter lives right alongside your code in your GitHub repository.
2. No mailing list management. Subscribers and updates are tracked in GitHub.
3. No expensive email APIs. You do not need a separate email subscription service.
4. No email delivery setup. You do not need to manage SMTP, spam filters, or domain reputation.
5. No subscription database. You do not need a separate database for subscriptions and unsubscribes.
6. You just focus on writing. GitHub and Newsy handle the rest.


Publishing should be accessible to everyone. There is no need to pay a heavy fee to a SaaS platform or spend hours wrestling with email infrastructure just to share updates with your readers.

- Deploys on serverless (e.g., Vercel, AWS Lambda) for production.
- WebAssembly support: Compile the Go binary to WebAssembly with [TinyGo](https://tinygo.org/) and run it on serverless platforms that support JavaScript or TypeScript runtimes.

A video walkthrough of the local setup is available in the [video guide](/content/misc/newsy/video.md).


## Self Host Your Bot

Follow these steps to run Newsy and connect it to your GitHub repositories.

#### 1. Clone the Repository

```bash
git clone git@github.com:light-cms/newsy.git
cd newsy
```

#### 2. Set Up the Environment

We use [mise](https://mise.jdx.dev) to keep the development environment
consistent and easy to manage:

```bash
mise deps
```

#### 3. Build and Run

Build and run the Go binary:

```bash
go build
./newsy
```

#### 4. Configure the GitHub App

1. Open [http://localhost:3000](http://localhost:3000) in your browser.
2. If you need to expose your local server, use a tunneling service such as [ngrok](https://ngrok.com), [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/), or SSH tunneling via [localhost.run](http://localhost.run/):

```bash
ssh -R 80:localhost:3000 localhost.run
```

3. Open your tunnel URL (e.g., `https://xyz.localhost.run`) in your browser:

[![newsy a github issues backed newsletter platform](https://markdown-videos-api.jorgenkh.no/youtube/sfjo6ZVgC9w.gif?duration=600)](https://youtu.be/sfjo6ZVgC9w)

_(If you run into issues, refer to the [video guide](/guides/newsy/video/) or try an alternative tunneling provider.)_

4. Choose an **App name** (preferably unique).
5. Paste the tunnel URL into the **Webhook URL** field and submit.
6. A `.env` file containing your app's secrets will be generated in your project root. Keep this file safe.

The generated `.env` should look like this:

```bash
APP_ID=""
WEBHOOK_SECRET=""
PRIVATE_KEY=""
DATABASE_URL=""
```

> \[!IMPORTANT\]
> Install the GitHub App on **specific repositories only**, rather than on "All repositories".

Each instance of Newsy can be shared across multiple repositories or users.

> \[!NOTE\]
> By default, Newsy only triggers comments and issues upon the creation of new content files (`.html`, `.md`, `.mdx`, etc.), rather than on subsequent edits.

---

## Try Newsy via the Hosted Instance

You can test Newsy directly using the hosted version: [https://newsy.lightcms.me](https://newsy.lightcms.me)

[![Newsy Demo](https://img.youtube.com/vi/sfjo6ZVgC9w/hqdefault.jpg)](https://youtu.be/3d1xLYkeVsA)

---

## Deploy on Vercel

![Deploy with Vercel](https://vercel.com/button)

Once deployed, update your GitHub App's Webhook URL from `*.localhost.run` to your production domain: `https://<your-app>.vercel.app`.

> \[!WARNING\]
> Only use the deploy button if you already have a configured GitHub App and have its credentials ready. Otherwise, follow the [Self-Host Your Bot](#self-host-your-bot) steps first to create one.

---

## Operating Costs &amp; Resource Usage

Vercel and many other cloud providers offer free tiers for serverless workloads. You can also host Newsy on JavaScript or TypeScript-only runtimes by compiling the Go binary to WebAssembly with [TinyGo](https://tinygo.org/).

Because it is a compiled Go binary:
- **Low memory footprint**, comfortably staying well within serverless memory and execution limits.

---

## Subscribe to the Newsletter

Subscribe to see Newsy in action:

👉 [**Subscribe on GitHub**](https://github.com/Pratyay360/blogs_md/issues/1)

---

## Generate Your Subscription Button

Generate an embedded subscription button for your account at [newsy.lightcms.me](https://newsy.lightcms.me/).

You can customize and style the button using [Primer CSS](https://cdnjs.com/libraries/Primer).

> \[!TIP\]
> **Security tip:** After the bot publishes its first newsletter message, lock the conversation to prevent any unintended behavior.

![Locking the conversation](/static/newsy-lock.png)


![newsy unlock](/static/newsy-unlock.png)

For further details on permissions, refer to the [required permissions](/guides/newsy/list-of-all-permission/) documentation.
