/*

~~~~~~~~~~ The key to success is to avoid frame drops ~~~
    two ways in which it can be handled
    1. hold (i.e. hold or stop for that duration of frame drop and then continue )
    2. skip (i.e. skip those frames and continue ) .  This feels more natural.

    frame is nothing but a timeline that is fragment into smaller chunks
    
    -------- | ------- | -------- | --------- | ----------------------------------------------------> time
        t1        t2        t3         t4

      frame       frame      frame      frame

    60 fps means ->>   each frame is of 16.66ms time 

   - within each frame device responsible for coming up with set of instructions that would then be used to compose 
        what needs to shown on screen
   - frame boundaries are happning at a fixed rate
   - and frame boundaries are set by vsync event(in android)
   - this is hooked into the rate at which the screen can be refreshed
   - so when screen is refreshing at 60fps the frame will last for 16.6 ms
*/