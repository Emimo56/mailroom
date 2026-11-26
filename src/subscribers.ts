import { readFile } from "node:fs/promises";

const SUBSCRIBERS_PATH = "data/subscribers.csv";

async function readSubscriberRows(): Promise<string[]> {
  const raw = await readFile(SUBSCRIBERS_PATH, "utf-8");
  const lines = raw.trim().split("\n");
  return lines.slice(1);
}

export async function countSubscribers(): Promise<number> {
  const rows = await readSubscriberRows();
  return rows.length;
}

export async function countByGroup(): Promise<Record<string, number>> {
  const rows = await readSubscriberRows();
  const counts: Record<string, number> = {};
  for (const row of rows) {
    const group = row.split(",")[3];
    counts[group] = (counts[group] ?? 0) + 1;
  }
  return counts;
}
