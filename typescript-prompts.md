# TypeScript Prompts — Mailroom Lab

The Mailroom Lab (`Mailroom Lab.md`) is written for Python (uv, pytest, mailroom.py).
This project does it in TypeScript instead. For every step, this file logs:

- the TypeScript-equivalent of the step's "write your own prompt"
- the TypeScript-equivalent of the step's "Check" (fresh-session) prompt

## Step 0 — The base

### Prompt used
```
Set up a TypeScript project called Mailroom in this folder, with npm.
Write AGENTS.md with these rules, and a CLAUDE.md that only imports it:
- Mailroom is a command-line tool for one newsletter: Kettlebird Tea's Steep Club. It reads the subscribers, checks an issue, and sends it to a practice mail server.
- Use npm for everything.
- Never use a real person's email address. Use @example.com, and @resend.dev for practice sends.
- Commit and push after every step.
Add a section called How I learn:
- I am new to TypeScript. I have not completed anything from https://agentfactory.panaversity.org/building-ai-workers/programming-fundamentals/ related to TypeScript, and I update this number as I learn.
- Write only with what I have learned. If something new would really help, stop and tell me its name in one line. I decide.
- When the code uses something new, show me that piece first and ask me to predict what it does. Stay quiet while I guess. Then run it, and explain a line only when I ask.
Then start git, and push to a new public GitHub repository called mailroom-typescript.
```

### Check prompt
```
Check my base project. Don't change any files.
1. Without opening any file, list the rules you follow here and name the file they came from.
2. Run node --version, npx tsc --version, git log --oneline, and git remote -v.
3. Run gh repo view --json url,visibility.
Give me a short table: Test | Pass or Fail | What you found.
Then ask me two quick questions, one at a time, about why the rules live in a file, and why we push from the first step.
```

## Step 1 — Count your subscribers

### Prompt used
_pending — spec still being worked out in chat_

### Check prompt
_pending_
