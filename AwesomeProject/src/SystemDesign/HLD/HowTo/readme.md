- include the following activities somewhere in the interview  

  1. Ask refining questions
    -  We need to understand the design problem and its requirements
    - Requirements that the clients need directly—for example, the ability to send messages in near real-time to friends. (functional requirements)
    - Requirements that are needed indirectly—for example, messaging service performance shouldn’t degrade with increasing user load. (non functional requirements)

  2. Handle data
   - We need to identify and understand data and its characteristics in order to look for appropriate data storage systems and data processing components for the system design:
   - size of the data right now
   - At what rate is the data expected to grow over time
   - How will the data be consumed by other subsystems or end users
   - Is the data read-heavy or write-heavy
   - Do we need strict consistency of data, or will eventual consistency work
   - What’s the durability target of the data
   - What privacy and regulatory requirements do we require for storing or transmitting user data?

 3. Discuss the components
  - At some level, our job might be perceived as figuring out which components we’ll use, where they’ll be placed, and how they’ll interact with each other

 4. Discuss trade-offs
  - Different components have different pros and cons. We’ll need to carefully weigh what works for us.
  - Different choices have different costs in terms of money and technical complexity. We need to efficiently utilize our resources.
  - Every design has its weaknesses. As designers, we should be aware of all of them, and we should have a follow-up plan to tackle them.
