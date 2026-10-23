// TASK 3 - Cache-aside.
//
// Implement cached(key, ttl, fetcher):
//   1. HIT:  const hit = await redis.get(key); if (hit) return JSON.parse(hit);
//   2. MISS: const data = await fetcher();
//            await redis.set(key, JSON.stringify(data), "EX", ttl);
//            return data;
//
// fetcher is an async function that returns the fresh data on a miss.
import { redis } from "./redis.js";

export async function cached(key, ttl, fetcher) {
  // TODO: implement the hit and miss paths above.
  // For now this just calls the fetcher every time (no caching).
  return fetcher();
}
