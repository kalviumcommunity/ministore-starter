import { Router } from "express";
import { rateLimit } from "../rateLimit.js";

export const authRouter = Router();

// A tiny fixed list of users (no database).
const USERS = ["alice", "bob"];

// POST /login  { "username": "alice" }
// TASK 4: protect this route with rateLimit (e.g. rateLimit(5, 10)) so repeated
//         login attempts are limited.
// TASK 5: set req.session.userId and SAVE before responding.
authRouter.post("/login", /* TODO (Task 4): add rateLimit(5, 10) here, */ (req, res) => {
  const { username } = req.body;
  if (!USERS.includes(username)) return res.status(401).json({ error: "unknown user" });

  // TODO (Task 5):
  //   req.session.userId = username;
  //   req.session.save(() => res.json({ userId: username }));
  res.status(501).json({ error: "not implemented" });
});

// GET /me - return the logged-in user, or 401 if there is no session.
authRouter.get("/me", (req, res) => {
  // TODO (Task 5): if (!req.session.userId) return res.status(401)...; else return the user.
  res.status(501).json({ error: "not implemented" });
});

// POST /logout - destroy the session so the session:<sid> key is removed from Redis.
authRouter.post("/logout", (req, res) => {
  // TODO (Task 5): req.session.destroy(() => res.json({ ok: true }));
  res.status(501).json({ error: "not implemented" });
});
