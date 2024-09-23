# 1. Availability
  - Availability is the percentage of time that some service or infrastructure is accessible to clients and is operated upon under normal conditions
  
  - A (in percent) =  (Total Time −Amount Of Time Service Was Down)
                       -------------------------------------------- * 100
                              Total Time
  
  - We measure availability as a number of nines
   99.9 - 8.76 hours downtime per year
   99.99 - 52.56 minutes
   99.999 - 5.26 minutes

   [text](https://www.educative.io/courses/grokking-modern-system-design-interview-for-engineers-managers/availability)


# 2. Reliability
 - Reliability, R, is the probability that the service will perform its functions for a specified time
 - R measures how the service performs under varying operating conditions
 - We often use > mean time between failures (MTBF) and > mean time to repair (MTTR) as metrics to measure R

 - MTBF = Total Elapsed Time−Sum of Downtime
​          -----------------------------------
              Total Number of Failures


- MTTR = Total Maintenance Time
         ---------------------------
            Total number of repairs

- (We strive for a higher MTBF value and a lower MTTR value.)
- Reliability and availability are two important metrics to measure compliance of service to agreed-upon service level objectives (SLO).


- The measurement of availability is driven by time loss,
-  whereas the frequency and impact of failures drive the measure of reliability
- Reliability (R) and availability (A) are two distinct concepts, but they are related. Mathematically, A is a function of R

- Usually, we use MTTF instead of MTBF for those cases where a failed component is replaced due to irreparable problems. A bad disk or a failed bulb are examples of irreparable faults where a replacement is required



# 3. scalability

 - Scalability is the ability of a system to handle an increasing amount of workload without compromising performance

 - The workload can be of different types, including the following:
          1.  Request workload: This is the number of requests served by the system.
          2.  Data/storage workload: This is the amount of data stored by the system.
 
 Different approaches of scalability::
    1. Vertical scalability
       - Vertical scaling, also known as “scaling up,” refers to scaling by providing additional capabilities (for example, additional CPUs or RAM) to an existing device
       - Vertical scaling allows us to expand our present hardware or software capacity, but we can only grow it to the limitations of our server
       - The dollar cost of vertical scaling is usually high because we might need exotic components to scale up
    
    2. Horizontal scalability
       - Horizontal scaling, also known as “scaling out,” refers to increasing the number of machines in the network
       - We use commodity nodes for this purpose because of their attractive dollar-cost benefits



# 4. Maintainability
 - Maintainability, M, is the probability that the service will restore its functions within a specified time of fault occurrence
 - M measures how conveniently and swiftly the service regains its normal operating conditions.
 - Besides building a system, one of the main tasks afterward is keeping the system up and running by finding and fixing bugs, adding new functionalities, keeping the system’s platform updated, and ensuring smooth system operations
  
  We can further divide the concept of maintainability into three underlying aspects:
    Operability: This is the ease with which we can ensure the system’s smooth operational running under normal circumstances and achieve normal conditions under a fault.
    Lucidity: This refers to the simplicity of the code. The simpler the code base, the easier it is to understand and maintain it, and vice versa.
    Modifiability: This is the capability of the system to integrate modified, new, and unforeseen features without any hassle.

- We use (mean time to repair) MTTR as the metric to measure M.
- MTTR = Total Maintenance Time
         ---------------------------
            Total number of repairs

- In other words, MTTR is the average amount of time required to repair and restore a failed component

- Maintainability can be defined more clearly in close relation to reliability
- Maintainability refers to time-to-repair, whereas reliability refers to both time-to-repair and the time-to-failure


# 5. Fault Tolerance

 - Fault tolerance refers to a system’s ability to execute persistently even if one or more of its components fail. Here, components can be software or hardware.
 -  Conceiving a system that is hundred percent fault-tolerant is practically very difficult.

 Let’s discuss some important features for which fault-tolerance becomes a necessity.

    Availability focuses on receiving every client’s request by being accessible 24/7.
    Reliability is concerned with responding by taking specified action on every client’s request.