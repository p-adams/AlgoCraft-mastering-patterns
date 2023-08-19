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
