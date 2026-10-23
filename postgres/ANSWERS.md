# ANSWERS (Task 2 - Index + EXPLAIN ANALYZE)

The query below scans the whole `events` table. Run it, add an index, run it again,
and record what changed.

## The query

```sql
EXPLAIN ANALYZE
SELECT * FROM events WHERE user_id = 42;
```

## Step 1 - Before the index

Run the query above and paste the plan here:

```
-- paste the EXPLAIN ANALYZE output (you should see a Seq Scan)
```

## Step 2 - Add the index

Write the index you created (run it in psql):

```sql
-- TODO: CREATE INDEX ... ON events(...);
```

## Step 3 - After the index

Run the same `EXPLAIN ANALYZE` again and paste the new plan:

```
-- paste the EXPLAIN ANALYZE output (you should now see an Index Scan / Bitmap Index Scan)
```

## What changed (2-3 lines)

-
