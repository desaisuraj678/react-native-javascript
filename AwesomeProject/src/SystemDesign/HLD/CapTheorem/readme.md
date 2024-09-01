 cap theorem 
 - desirable property of distributed system with replicated data


 C - consistency
 A - Availability
 P - Partition tolrence

 can not have all three in a system . we can have CA or AP or CP but not 3 together where we have replicated data

 suppose A is appication and B and C are DB nodes

 C- if B has value name ="abcd" then C should also have name ="abcd" at all times
 A- All nodes should respond all the time
 P - if B and C are not able to communicate with each other then also A should be able to query