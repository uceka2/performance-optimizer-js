import { bench, describe } from "vitest";

function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function sortArray(size) {
  const arr = Array.from({ length: size }, () => Math.random());
  arr.sort((a, b) => a - b);
  return arr;
}

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

describe("fibonacci", () => {
  bench("fibonacci(10)", () => {
    fibonacci(10);
  });

  bench("fibonacci(20)", () => {
    fibonacci(20);
  });
});

describe("array operations", () => {
  bench("sort 1000 elements", () => {
    sortArray(1000);
  });

  bench("sort 10000 elements", () => {
    sortArray(10000);
  });
});

describe("object operations", () => {
  const complexObject = {
    users: Array.from({ length: 100 }, (_, i) => ({
      id: i,
      name: `user-${i}`,
      email: `user-${i}@example.com`,
      metadata: { created: Date.now(), tags: ["a", "b", "c"] },
    })),
  };

  bench("deep clone complex object", () => {
    deepClone(complexObject);
  });
});
