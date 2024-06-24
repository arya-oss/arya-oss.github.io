---
sidebar_position: 3
---

# Create a session ID

**Problem Statement**: Create a session ID for each user session. A session is defined as a series of events that occur within a certain time frame.

- A session is defined as a series of events that occur within 30 minutes of each other.
- A session ID is defined as the user ID followed by an 's' followed by a session number.
- The session number is incremented for each new session for a user.

**Input**: A list of events, each with a Timestamp, Page ID, and User ID.

**Output**: A list of events with a session ID.

**Example**:

Input:

```plaintext
timestamp,page_id,user_id
10,p1,u1
18,p3,u1
50,p5,u1
60,p6,u1
70,p7,u1
5,p1,u2
10,p2,u2
15,p3,u2
40,p4,u2
50,p5,u2
60,p6,u2
```

Output:

```plaintext
timestamp,page_id,user_id,session_id
10,p1,u1,u1s1
18,p3,u1,u1s1
50,p5,u1,u1s2
60,p6,u1,u1s2
70,p7,u1,u1s2
5,p1,u2,u2s1
10,p2,u2,u2s1
15,p3,u2,u2s1
40,p4,u2,u2s2
50,p5,u2,u2s2
60,p6,u2,u2s2
```

## Solution

We can solve this problem by partitioning the events by user ID and then sorting them by timestamp. We can then iterate through the events for each user and assign a session ID to each event.

> Key Insight: We need to use `lag` Window function to get the previous timestamp for each event and then calculate the time difference between the current and previous event to determine if a new session has started.

Here is the code to solve this problem using Apache Spark 2/3 in Scala:

```scala
val spark = SparkSession.builder().appName("CreateSessionID").getOrCreate()

val input = spark.read.option("header", "true").csv("events.csv")

val windowSpec = Window.partitionBy("user_id").orderBy("timestamp")

val output = input
  .withColumn("prev_timestamp", lag("timestamp", 1).over(windowSpec))
  .withColumn("session_start", coalesce($"prev_timestamp" > 0 && $"timestamp" - $"prev_timestamp" > 30, lit(true)))
  .withColumn("session_number", sum($"session_start".cast("int")).over(windowSpec))
  .withColumn("session_id", concat($"user_id", lit("s"), $"session_number"))
  .drop("prev_timestamp", "session_start", "session_number")

output.show()
```
