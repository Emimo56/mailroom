import { countSubscribers, countByGroup } from "./subscribers.js";

async function main(): Promise<void> {
  const command = process.argv[2];

  if (command !== "subscribers") {
    console.log("Usage: mailroom subscribers");
    return;
  }

  const total = await countSubscribers();
  const byGroup = await countByGroup();

  console.log(`Total subscribers: ${total}`);
  for (const [group, count] of Object.entries(byGroup)) {
    console.log(`${group}: ${count}`);
  }
}

main();
