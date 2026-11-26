import assert from "node:assert/strict";
import { countSubscribers, countByGroup } from "./subscribers.js";

assert.equal(await countSubscribers(), 24, "expected 24 subscribers total");

const byGroup = await countByGroup();
assert.equal(byGroup["tea-curious"], 8, "expected 8 tea-curious subscribers");
assert.equal(byGroup["gift-buyers"], 8, "expected 8 gift-buyers subscribers");
assert.equal(byGroup["daily-drinkers"], 8, "expected 8 daily-drinkers subscribers");

console.log("All checks passed.");
