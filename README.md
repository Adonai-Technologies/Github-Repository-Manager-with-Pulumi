# 🌟 Github Repository Manager with Pulumi

Welcome to **Github Repository Manager with Pulumi** — a simple GitHub automation tool built with **Pulumi**!

This project was created for the **"Get Creative with Pulumi and GitHub"** challenge. It uses Pulumi to automatically **create a GitHub repository** and **set up a webhook** that listens for events (like when someone opens an issue). When something happens, GitHub sends information to a special URL — like magic! ✨

---

## 🧠 What It Does

With just a few lines of code, Github Repository Manager  will:

✅ Create a new GitHub repository  
✅ Add a webhook to it  
✅ Listen for new issues (and more, if you want!)  
✅ Send that event data to any URL you choose (like [Webhook.site](https://webhook.site))

It's perfect for learning how to **automate GitHub workflows** with **Pulumi's GitHub provider** and the **Pulumi Automation API**.

---

## 🚀 How It Works

1. You run the Pulumi script  
2. Pulumi creates the GitHub repo  
3. It adds a webhook that listens for issue events  
4. You create an issue — and like magic, GitHub sends the data to your webhook URL!  

You can use that data to trigger notifications, build dashboards, automate workflows, and much more.

---

## 🛠 What You Need

- A [GitHub account](https://github.com/)
- [Pulumi CLI](https://www.pulumi.com/docs/install/) installed
- A GitHub [personal access token](https://github.com/settings/tokens) with `repo` and `admin:repo_hook` permissions
- A webhook URL (try [Webhook.site](https://webhook.site) for free!)

---

## 🧪 Try It Out!

1. Clone this repo  
2. Run `pulumi up`  
3. Go to the new repo → create an issue  
4. Watch the data show up in your webhook receiver!

---

## 📺 Live Demo

Watch the video demo here: [YouTube Link Coming Soon!]

---

## 📚 Built With

- [Pulumi](https://pulumi.com)
- [Pulumi GitHub Provider](https://www.pulumi.com/registry/packages/github/)
- [GitHub API](https://docs.github.com/en/rest)
- TypeScript

---

## 🏁 Challenge

This project was submitted for the **"Get Creative with Pulumi and GitHub"** challenge.  
It’s open source, easy to follow, and made with ❤️ for developers who want to learn GitHub automation with infrastructure-as-code.

---

## 📬 Want to Learn More?

Check out the full tutorial in the [DEV post](https://dev.to) (coming soon) or join the [Pulumi Slack](https://slack.pulumi.com) to learn from other builders like you!

