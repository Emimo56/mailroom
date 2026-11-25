import { readFile } from "node:fs/promises";
import type { Subscriber, Issue } from "./types.js";

async function loadSubscribers(): Promise<Subscriber[]> {
  const raw = await readFile("data/subscribers.json", "utf-8");
  return JSON.parse(raw) as Subscriber[];
}

async function loadIssue(path: string): Promise<Issue> {
  const raw = await readFile(path, "utf-8");
  return JSON.parse(raw) as Issue;
}

async function main(): Promise<void> {
  const issuePath = process.argv[2] ?? "data/issues/2026-01-steep-club.json";
  const subscribers = await loadSubscribers();
  const issue = await loadIssue(issuePath);

  console.log(`Steep Club issue: ${issue.subject}`);
  console.log(`Sending to ${subscribers.length} subscriber(s) via practice mail server (resend.dev)...`);
  for (const subscriber of subscribers) {
    console.log(`  -> ${subscriber.name} <${subscriber.email}>`);
  }
}

main();
