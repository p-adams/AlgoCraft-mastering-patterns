import { assertEquals } from "https://deno.land/std@0.113.0/testing/asserts.ts";
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

Deno.test("#twoSum", () => {
  assertEquals([0, 1], easy.twoSum([2, 7, 11, 15], 9));
  assertEquals([1, 2], easy.twoSum([3, 2, 4], 6));
  assertEquals([0, 1], easy.twoSum([3, 3], 6));
});
