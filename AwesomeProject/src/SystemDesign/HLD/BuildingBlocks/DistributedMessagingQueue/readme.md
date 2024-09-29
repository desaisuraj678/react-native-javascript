 # Functional requirements :
    1. Queue creation and its params
    2. delete queue
    3. Send message to queue
    4. Receive message from queue
    5. delete message from queue

 
 # Non Functional requirements
    1. Scalability
    2. Availibility
    3. Durabiliy
    4. Performance

# Heart of distributed queue  (Considerations of a Distributed Messaging Queue’s Design)
    1. Ordering of messages:
       - As messaging queue(MQ) is used : producers produces messages =>  push to MQ => Consumers consume messages at its own pace  

       requirement of the ordering of messages vary depend on use cases:
        1. Strict ordering : In some cases strict ordering of messages is required (eg. chat application)
        2. Best-effort ordering : In some cases ordering can be tolerated (not required)


# 1. Best effort ordering:
  - Messages are placed in a queue in the same order that they’re received at the queue and not in the order they were sent
  - eg. Producer sends D->C->B->A the messages to the queue
  - due to network congestion the messages received at queue are B->D->C->A. then the messages will be stored and sent in this order only.

# 2. Strict ordering:
  - Through this approach, messages are placed in a queue in the order that they’re produced
  -  Before putting messages in a queue in the correct sequence, it’s crucial to have a mechanism to identify the order in which the messages were produced on the client side

  ## One of the following three approaches can be used for ordering incoming messages:
     1. Monotonically increasing numbers : Assign montotonically increasing number to the message when message is received at the queue
         drawabacks: 
                   - it still doesn’t tackle the problem that arises when a message is received before the one that’s produced earlier at the client side

     2. Causality-based sorting: messages are sorted based on the time stamp that was produced at the client side and are put in a queue accordingly.
        drawabacks: 
                   - again the wall clock time is not sync between multiple servers(producers)

     3. Using time stamps based on synchronized clocks: assign time stamps to messages that’s based on synchronized clocks.(TrueTime spanner api in    sequencer).
              the time stamp (ID) provided to each message through a synchronized clock is unique and in the correct sequence of production of messages.
              We can tag a unique process identifier with the time stamp to make the overall message identifier unique and tackle the situation when two concurrent sessions ask for a time stamp at the exact same time

## Sorting:
   - Once messages are received at the server side(mostly using 3rd approach), we need to sort them based on their time stamps
   - Therefore, we use an appropriate online sorting algorithm for this purpose.

   ### Effect on performance:
       - Primarily, a queue is designed for first-in, first-out (FIFO) operations
       - 1 or 2 or 3rd approache for ordering incoming messages provide high throughput while putting messages in a queue but
       - the need for the online sorting to provide a strict order takes some time before messages are ready for extraction
       - To minimize latency caused by the online sorting, we use a time-window approach
       - If best effort ordering =>  better throughput and lower latency at the receiving end and strict ordering => vice versa
       - Due to the reasons mentioned above, many distributed messaging queue solutions either don’t guarantee a strict order or have limitations around throughput

    ### Managing concurrency:
      - Concurrency can take place at the following stages:
           - When multiple messages arrive at the same time.
           - When multiple consumers request concurrently for a message.

           soln1: - use locking mechanism
                  - When a process or thread requests a message, it should acquire a lock for placing or consuming messages from the queue
                  Drawbacks :  It’s neither scalable nor performant
            soln2: 

           