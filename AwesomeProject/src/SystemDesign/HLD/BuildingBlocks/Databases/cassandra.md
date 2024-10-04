# 
-  When a write operation (such as an INSERT query) is performed in Cassandra, the data flow follows a well-defined path to ensure durability, consistency, and high availability.
- Cassandra’s architecture is optimized for high write throughput
The write path is as follows:

- Cassandra and HBase have a concept of column families, which they inherited from Bigtable. However, it is very misleading to call them column-oriented: within each column family, they store all columns from a row together, along with a row key, and they do not use column compression. Thus, the Bigtable model is still mostly row-oriented.

1. Receiving the Write Request
Coordinator Node: When a client sends a write request, the coordinator node (which can be any node in the Cassandra cluster) receives the query. The coordinator node is responsible for routing the request to the appropriate replica nodes based on the partition key and replication strategy.
Partitioning: Cassandra uses a partitioner (e.g., Murmur3Partitioner by default) to determine which nodes in the cluster should store the data. This partitioning algorithm hashes the partition key and determines the location of the data in the cluster.

2. Replicas and Consistency Level
The coordinator node forwards the write request to the replica nodes responsible for storing the data. The number of replicas is determined by the replication factor set for the keyspace.
The consistency level of the write (e.g., ONE, QUORUM, ALL) determines how many replicas need to acknowledge the write for it to be considered successful. If the write consistency level is satisfied, the coordinator acknowledges the write to the client.

3. Commit Log Write (Durability)
Commit Log: Before any in-memory operation occurs, the write is first appended to the commit log (which is stored on disk). This ensures durability, meaning that even if the node crashes before the in-memory data is flushed to disk, the data can be recovered from the commit log.
Each node maintains its own commit log to track write operations.

4. Memtable Write (In-Memory)
Memtable: After the write is recorded in the commit log, the data is written to an in-memory data structure called the memtable. The memtable is a write-back cache that stores writes temporarily in memory.
Memtables are sorted by partition key, and multiple writes to the same partition can be combined while they are in memory.
  (once this process is done ack to the client is sent stating data is stored)

5. Flushing the Memtable to SSTable (Disk Storage)
Over time, the memtable grows as more write operations are performed. Once the memtable reaches a certain size threshold (configurable), it is flushed to disk as an SSTable (Sorted String Table).
When a memtable is flushed, it triggers a compaction process that combines multiple SSTables to optimize read performance and manage disk space.
 (Cassandra does not perform random i/o but performs sequential I/O also sequential writes)

6. SSTables (Immutable Disk Data)
SSTables are immutable files on disk that store data in a sorted, compressed, and indexed format. Once an SSTable is written, it is never modified again.
Cassandra uses write-optimized storage because writing data as new SSTables is efficient, and periodic compaction operations help manage space by merging SSTables.

7. Hinted Handoff (Handling Node Failures)
If any replica node is down when a write operation occurs, the coordinator node stores a hint for that node. This is called a hinted handoff.
Once the failed node recovers, the coordinator node delivers the stored hint, ensuring the downed node eventually gets the write.

8. Gossip and Replication
Cassandra uses a gossip protocol to maintain state information between nodes. This helps nodes stay aware of the cluster topology and ensures proper routing of read and write operations.
The replication factor ensures that data is stored on multiple nodes for fault tolerance. Write operations are replicated across nodes based on the replication factor (e.g., RF=3 means the data is stored on 3 nodes).

9. Read Repair (If Inconsistencies Occur)
During a subsequent read, Cassandra may detect inconsistencies between replicas due to failures or delays in propagation. It performs a read repair, where outdated data is updated with the most recent version, ensuring eventual consistency across replicas.

