# MiniStore Lab — PostgreSQL + Redis

A small lab in two independent parts:

- **`postgres/`** — pure SQL you run in `psql` (transactions + indexing).
- **`redis-app/`** — a small Express + Redis app (cached list, sessions, rate limiting). No database.

You can do the two parts in any order.

## Prerequisites

- A local **PostgreSQL** running (for Part A)
- A local **Redis** running (for Part B)
- Node.js 18+ (for Part B)

## Part A — PostgreSQL (run in psql)

```bash
createdb ministore                         # once
psql -d ministore -f postgres/setup.sql    # create tables + seed data
```

- **Task 1:** complete `postgres/task1_transaction.sql`, then run it and check the balances.
- **Task 2:** fill in `postgres/ANSWERS.md` (EXPLAIN ANALYZE before/after an index).

## Part B — Redis app

```bash
cd redis-app
npm install
cp .env.example .env        # fill in REDIS_URL, SESSION_SECRET
npm run dev                 # starts on http://localhost:3000
```

| Method | Path | What it does |
|---|---|---|
| GET | `/health` | liveness check |
| GET | `/products` | product list (Task 3 caches this) |
| POST | `/login` | log in by `{ "username": "alice" }` (Task 4 rate-limits, Task 5 session) |
| GET | `/me` | current session user (Task 5) |
| POST | `/logout` | end the session (Task 5) |

- **Task 3:** cache-aside in `src/cache.js` + `src/routes/products.js`
- **Task 4:** rate limiter in `src/rateLimit.js` + `src/routes/auth.js`
- **Task 5:** sessions in `src/app.js` + `src/routes/auth.js`

## Submit

Zip the whole folder **without** `node_modules`, `.env`, and `.git`. Include your completed
`postgres/task1_transaction.sql` and `postgres/ANSWERS.md`.
