# Data versioning

Use case : 
 - when network partition(partion tolerence of CAP theorem) or node failures occur before or during the update (of data replication) , objects version history might become fragmented 

Solution : 
 - It’s necessary to build a way that explicitly accepts the potential of several copies of the same data so that we can avoid the loss of any updates
 - some failure scenarios can lead to multiple copies of the same data in the system
 - resolving these conflicts is essential for consistency
 - To handle inconsistency, we need to maintain causality between the events
      1. we can do this `using timestamp` and update all conflicting values with the value of the latest request
         - but timestamp isn't reliable in distributed system
      2. Another approach to maintaining causality effectively is by `using vector clocks`
         - vector clock is a logical clock used to determine the order of events in distributed system
         - A vector clock is a list of (node, counter) pairs
         - There’s a single vector clock for every version of an object
         - If two objects have different vector clocks, we’re able to tell whether they’re causally related or not
         - For this, we need information about which node performed the operation before and what its vector clock value was
         - This is the context of an operation
