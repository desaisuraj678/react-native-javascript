/*
    https://docs.swmansion.com/react-native-gesture-handler/docs/#installation
    https://reactnative.dev/docs/gesture-responder-system

*****  Current react native gesture system: *****
    --------- Touchables ----------

        1. TouchableHighlight  { 
            - can be used for Views that have visible bounce on screen or the buttons with filled colors
             e.g. primary buttons
            - so that component highlights when we tap on it.
        }

        2. TouchableOpacity  {
            - can be used for text only buttons or icon only buttons when we 
                dont have background to highlight in which case we can change the opacity  
        }


        3. TouchableWithoutFeedback {
            - can be used where we dont want any bounce feedback or change in opacity 
        }

        4. TouchableNativeFeedback * Android only {
            -  is used for ripple effect in android 
        }

        - they differ by the way they display feedback but have common interface(like onPress ) for handling touch events
     
     ****** Touchables under the hood : JS responder system or Gesture responder system ******
    
    - Touchables under the hood are implemented using ->> ** JS responder system **
            Note here ::: stream of events : UP,DOWN,MOVE 

            when user press on touch screen......

            events are first processed by underlying operating system(i.e.stream of events are sent) ----------------------------------------- > then main thread(UI thread) gets those events
                                                                                                                                                                                            |
                                                                                                                                                                                            |
                                                                                                                                                                                            |
                                                                                                                                                                                            |
            *In JS we have whole react tree hierarchy(so we can tell which components should be responsible for handling those stream of events)  <----- events are processed and sent to javascript thread
            * .i.e. here they are handled by JS responder system
            * it also has a way to handle events of parent and child in tree hierarchy
            
            ~~~~~ A view can become touch responder by implementating any one or both of the following methods:
                ===== onStartShouldSetResponder : evt => true  // to become responder it should return true
                ===== onMoveShouldSetResponder : evt => true  // Called for every touch move on the View when it is not the responder till now : to become responder it should return true
                                                        // this is useful in case of drag kind of gesture where we want to start responding after certain time
                
                
                when we get true from above handlers it does not guarantee that it will be become responder

                JS responder system notifies us by calling one of the 2 methods if it can become responder or not

                ===== onResponderGrant : evt => {}    // when its granted to become responder
                ===== onResponderReject : evt => {}  // when its rejected to become responder

                once the view becomes responder, following methods starts invoking

                ===== onResponderMove : evt => {}
                ===== onResponderRelease : evt => {}
                ===== onResponderTerminationRequest : evt => {}   // gets called when something else wants to become responder
                ===== onResponderTerminate : evt => {}  //  The responder has been taken from the View. 
                                            //  Might be taken by other views after a call to onResponderTerminationRequest, 
                                            //  or might be taken by the OS without asking (happens with control center/ notification center on iOS)

        
        
    ------------------------- Pan responder ---------------------------
        - its built on top of JS responder system
        - PanResponder reconciles several touches into a single gesture
        - For each handler, it provides a new gestureState object alongside the native event object
        i.e. eg. onPanResponderMove: (event, gestureState) => {}

        const ExampleComponent = () => {
            const panResponder = React.useRef(
                PanResponder.create({
                // Ask to be the responder:
                onStartShouldSetPanResponder: (evt, gestureState) => true,
                onStartShouldSetPanResponderCapture: (evt, gestureState) =>
                    true,
                onMoveShouldSetPanResponder: (evt, gestureState) => true,
                onMoveShouldSetPanResponderCapture: (evt, gestureState) =>
                    true,

                onPanResponderGrant: (evt, gestureState) => {
                    // The gesture has started. Show visual feedback so the user knows
                    // what is happening!
                    // gestureState.d{x,y} will be set to zero now
                },
                onPanResponderMove: (evt, gestureState) => {
                    // The most recent move distance is gestureState.move{X,Y}
                    // The accumulated gesture distance since becoming responder is
                    // gestureState.d{x,y}
                },
                onPanResponderTerminationRequest: (evt, gestureState) =>
                    true,
                onPanResponderRelease: (evt, gestureState) => {
                    // The user has released all touches while this view is the
                    // responder. This typically means a gesture has succeeded
                },
                onPanResponderTerminate: (evt, gestureState) => {
                    // Another component has become the responder, so this gesture
                    // should be cancelled
                },
                onShouldBlockNativeResponder: (evt, gestureState) => {
                    // Returns whether this component should block native components from becoming the JS
                    // responder. Returns true by default. Is currently only supported on android.
                    return true;
                },
                }),
            ).current;

            return <View {...panResponder.panHandlers} />;
        };

    /////// till now we have seen touch in js but in react native there are also native components and they have there own native gesture recognizers
                *** native components with gestures examples
                1. switch
                2. drawer
                3. slider
                4. scrollView
        
        ** scrollView
        - It recognizes drag, pinch and also provides visual interactions(e.g. bounce in ios)
        


        ********* Issues/limitations of gesture responder system *********************

                1. - we cant place pan responder inside scrollview because pan responder gestures are in js(js thread) whereas scrollview gestures are in native (UI thread) 
                      .so they can not communicate with each other.  
                   - also we can't place long press button inside of a scrollview
                  .i.e. there might be cases where JS responder components are embedded inside native responder/recognizer components and they wont be able to communicate 
                    or in other terms both of these recognizers will listen for the gesture callbacks and we wont be able to figure out which one to trigger which will make 
                        recognizers unpredicatble

                Imp :::: 
                        -> if we have both the components in js responder system we will be able to negotiate which component will receive the callback
                        -> but unfortunately this is not the case if both of them in native geture recognizers 
                                (check point 2)
                
                2. suppose we have slider inside drawer component , the behaviour will be unpredictable
                  - so::  lack of API that would allow for defining interactions between 2 or more native gesture recognizers

                3. there is no "useNativeDriver: true" in JS responder system . so those gestures(Pan responder and Touchables) only run on JS thread.
                  - so:: touch events recognised by JS responder system can not be connected with native animated nodes

        ********** soltuion for above problems *************************
            - react native gesture handler
                    1. The ability to define relations between gesture handlers, 
                            e.g. when you have a pan handler in ScrollView you can make that ScrollView wait until it knows pan won't recognize.

                    2. A way to use a platform's native touch handling system for recognizing pinch, rotation and pan (besides a few other gestures)

                    3. Mechanisms to use touchables that run in native thread and follow platform default behavior;
                     e.g. in the event they are in a scrollable component, turning into pressed state is slightly delayed to prevent it from highlighting when you fling

        







*/