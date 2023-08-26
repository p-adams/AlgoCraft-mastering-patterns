import { assertEquals } from "https://deno.land/std@0.200.0/assert/mod.ts";
import { easy } from "./easy.js";

Deno.test("#createCounter", () => {
  const counter = easy.createCounter(10);
  assertEquals(10, counter());
  assertEquals(11, counter());
  assertEquals(12, counter());
});

Deno.test("#sleep", async () => {
  const res = await easy.sleep(100);
  assertEquals("done", res);
});

Deno.test("#last", () => {
  const data = [1, 2, 3, 4, 5];
  assertEquals(5, easy.last(data));
  assertEquals(-1, easy.last([]));
  assertEquals(null, easy.last([null]));
});

Deno.test("#functionComposition", () => {
  const fn = easy.compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
  assertEquals(65, fn(4));
});

Deno.test("#filterElements", () => {
  assertEquals(
    [20, 30],
    easy.filterElements([0, 10, 20, 30], (x) => x > 10)
  );
});
