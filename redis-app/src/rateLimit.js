// TASK 4 - Simple rate limiter (counter + expiry).
//
// Return an Express middleware (req, res, next) that:
//   - builds a key: "ratelimit:" + (req.session?.userId ?? req.ip)
//   - counts this request:  const count = await redis.incr(key);
//   - on the first request of the window, set the window length:
//        if (count === 1) await redis.expire(key, windowSec);
//   - if count > max: respond 429 with a Retry-After header; otherwise call next().
import { redis } from "./redis.js";

export function rateLimit(max, windowSec) {
  return async (req, res, next) => {
    // TODO: implement the counter check above.
    // For now this lets every request through.
    next();
  };
}
