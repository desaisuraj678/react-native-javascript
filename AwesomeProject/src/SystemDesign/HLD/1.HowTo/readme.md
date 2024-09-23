- include the following activities somewhere in the interview :

  1. Ask refining questions
    -  We need to understand the design problem and its requirements
    - Requirements that the clients need directly—for example, the ability to send messages in near real-time to friends. (functional requirements)
    - Requirements that are needed indirectly—for example, messaging service performance shouldn’t degrade with increasing user load. (non functional requirements)

  2. Handle data
   - We need to identify and understand data and its characteristics in order to look for appropriate data storage systems and data processing components for the system design as below:
        - size of the data right now
        - At what rate is the data expected to grow over time
        - How will the data be consumed by other subsystems or end users
        - Is the data read-heavy or write-heavy
        - Do we need strict consistency of data, or will eventual consistency work (or any other in between)
        - What’s the durability target of the data
        - What privacy and regulatory requirements do we require for storing or transmitting user data?

 3. Discuss the components
  - At some level, our job might be perceived as figuring out which components we’ll use, where they’ll be placed, and how they’ll interact with each other

 4. Discuss trade-offs
  - Different components have different pros and cons. We’ll need to carefully weigh what works for us.
  - Different choices have different costs in terms of money and technical complexity. We need to efficiently utilize our resources.
  - Every design has its weaknesses. As designers, we should be aware of all of them, and we should have a follow-up plan to tackle them.




# consistency   (consistency is an abstraction)

In distributed systems, consistency may mean many things :
   1. one is that each replica node has the same view of data at a given point in time
   2. The other is that each read request gets the value of the recent write




   Eventual Consistency      -----      Causal consistency      -------    sequential consistency         ------  strict consistency or linearizability

       (weakest)                                                                                                        (strongest)


  There is a difference between consistency in ACID properties and consistency in the CAP theorem.

  - Database rules are at the heart of ACID consistency. If a schema specifies that a value must be unique, a consistent system will ensure that the value is unique throughout all actions
  - CAP consistency guarantees that, in a distributed system, every replica of the same logical value has the same precise value at all times


  ## 1. Eventual Consistency
   - Eventual consistency is the weakest consistency model.
   - ** The applications that don’t have strict ordering requirements and don’t require reads to return the latest write choose this model.
   - Eventual consistency ensures that all the replicas converge on a final value after a finite time and when no more writes are coming in.
   - If new writes keep coming, replicas of an eventually consistent system might never reach the same state
   - ** Eventual consistency ensures high availability.

   Examples:
      1. The domain name system is a highly available system that enables name lookups to a hundred million devices across the Internet
      2. Cassandra is a highly available NoSQL database that provides eventual consistency.

  ## 2. Causal Consistency
   - Causal consistency works by categorizing operations into dependent and independent operations
   - Dependent operations are also called causally-related operations
   - Causal consistency preserves the order of the only causally-related operations

   - process P1 writes a value a at location x. For P2 to write the value b at location y, it first needs to calculate b. Since b=x+5, the read operation on x should be performed before writing b on location y. That’s why read(x)a and write(y)b are causally related

   Examples:
      1. The causal consistency model is used in a commenting system. For example, for the replies to a comment on a Facebook post, we want to display comments after the comment it replies to.

  ## 3. Sequential consistency
   -  It preserves the ordering specified by each client’s program
   -  However, sequential consistency doesn’t ensure that the writes are visible instantaneously or in the same order as they occurred according to some global clock

   Examples:
      1. In social networking applications, we usually don’t care about the order in which some of our friends’ posts appear. However, we still anticipate a single friend’s posts to appear in the correct order in which they were created


  ## 4. Strict consistency aka linearizability
   - This model ensures that a read request from any replicas will get the latest write value
   - Once the client receives the acknowledgment that the write operation has been performed, other clients can read that value
   - Application programmers have to compromise performance and availability if they use services with strong consistency models

   Example : 
    1. Updating an account’s password requires strict consistency
    2. Linearizability affects the system’s availability, which is why it’s not always used