-- Part A setup. Run once before the tasks:
--   psql -d ministore -f postgres/setup.sql
-- (First create the database if needed:  createdb ministore )

DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS accounts;

-- Two accounts, used by Task 1 (the transfer transaction).
CREATE TABLE accounts (
  id      SERIAL PRIMARY KEY,
  owner   TEXT NOT NULL,
  balance INTEGER NOT NULL CHECK (balance >= 0)
);

INSERT INTO accounts (owner, balance) VALUES
  ('alice', 500),
  ('bob',   100);

-- A larger table, used by Task 2 (index + EXPLAIN ANALYZE).
CREATE TABLE events (
  id         SERIAL PRIMARY KEY,
  user_id    INTEGER NOT NULL,
  action     TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 50,000 rows so EXPLAIN ANALYZE shows a real sequential scan.
INSERT INTO events (user_id, action)
SELECT (i % 100) + 1, 'click'
FROM generate_series(1, 50000) AS i;
