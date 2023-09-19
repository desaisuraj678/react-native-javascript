*** background tasks**
- tasks which runs even when app is in background or locked

use cases
1. Location
2. Audio
3. Gyroscope
4. Acceleormeter
5. heart rate

*** Android**
    -  "Services" are responsible for background tasks 



    ---------------- React native for android --------------------------
        * Headless JS
        - Headless JS is a way to run tasks in JavaScript while your app is in the background. It can be used, for example, to sync fresh data, handle push notifications, or play music
        https://reactnative.dev/docs/headless-js-android?android-language=kotlin#the-js-api



*** Ios**

    ---------------------- "Background modes " are responsible for background tasks-------------
     ** most used background modes in ios (present in signing and capabilities)
     - These background modes run when : application lifecycle state is "Background"
       1. Audio
       2. background fetch (make network request even when app is in background)
       3. background processing 
       4. location
       5. Remote notifications
       6. Bluetooth


    ----------------------ios application lifecycle states----------------
            https://developer.apple.com/documentation/uikit/app_and_environment/managing_your_app_s_life_cycle
            Note : These are app based lifecycle methods

        1. Not Running       <--- Suspended, Background

            ~~~ (App is killed)

        2. In active         <---  Not Running, Background, Suspended, Active

                ~~~ ( When your app is running but something happens to interrupt it, like a phone call, or when we pull down to see notifications or when we are trying to switch from one app to another, it becomes inactive. Inactive means that the app is still running in the foreground but it’s not receiving events.)
                     
        3. Active            <---- Inactive

        4. Background        <---- Inactive, Suspended, Background

                ~~~~ (In this state, your app is not in the foreground anymore but it is still able to run code.)

        5. Suspended         <---- Background, Not Running  

            ~~ ( Your app enters this state when it’s no longer able to run code but it is still in memory)


    

    ----------------------------- use cases-----------------------------------------
        -Audio and video calling(picture-in-picture)
        -Files download and upload
        -Music
        -Content updates that occur periodically
        -Bluetooth
        -Workout: Steps counting
        -Location and navigation
        -Accessory communication


    ---------------- React native for ios --------------------------
        -- Its like virus, meaning it does not survive without hosts.
        -- i.e. If native app ( ios is killed), this react native bundle also gets killed
        -- in ios , when we are doing some background operations, our entire app is woken up in the background, so our react native too.
        -- For above background modes, we need to write native modules which will call pariticular native apis (location,music etc) 
            (we have to understand every background mode and there api works differently)