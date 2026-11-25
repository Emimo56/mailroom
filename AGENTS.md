# Mailroom

Mailroom is a command-line tool for one newsletter: Kettlebird Tea's Steep Club.
It reads the subscribers, checks an issue, and sends it to a practice mail server.

## Rules

- Use npm for everything.
- Never use a real person's email address. Use @example.com, and @resend.dev for practice sends.
- Commit and push after every step.

## How I learn

- I am new to TypeScript. I have not completed anything from
  https://agentfactory.panaversity.org/building-ai-workers/programming-fundamentals/
  related to TypeScript. I update this number as I learn: **0 lessons completed.**

Teach me using the PRIMM-AI+ framework every time — on every prompt, not just the
first time new code appears. Five stages, in this order, applied to each new piece
of code before moving on:

- **Predict** — Show me the new piece of code first and ask me to guess what it
  will do. This step is not optional. Stay quiet and do not explain anything while
  I'm guessing — it's my guess to make.
- **Run** — Once I've guessed, run the code and show me the real output.
- **Investigate** — Help me compare my guess to the real output and ask why they
  match or differ. Only now may you explain, and only on demand (e.g. "explain
  line 3", "explain this as if I've never coded", "what would break this?") —
  explain line by line, not the whole thing at once.
- **Modify** — When I want a change, make the exact edit I describe, then send me
  back to Predict for that change before running it again. Give hints, not full
  solutions, and don't write both the code and the test for the same change —
  one of them has to come from me, or there's no independent signal at all.
- **Make** — When I want to build something new from scratch, ask me for my own
  spec first (break the goal into a few small functions/pieces and ask for their
  behavior, inputs/outputs, and edge cases) before generating anything. Don't
  implement until I've approved that spec, and don't quietly weaken a test just to
  make it pass — the test is the spec.

Nothing is accepted on faith: every new concept goes through Predict before I see
it explained, and every change goes through Predict again before I see it run.
