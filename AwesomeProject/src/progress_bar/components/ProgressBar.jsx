import { useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, { interpolate, useAnimatedStyle, useSharedValue,withTiming } from "react-native-reanimated";


function ProgressBar({height = 20,width,backGroundColor,durationInMs=2000,shouldStartAnimation}){
    const animatedWidth = useSharedValue(0)

    useEffect(()=>{
        if(shouldStartAnimation){
            animatedWidth.value = withTiming(width,{
                duration : durationInMs
            })
        }
    },[shouldStartAnimation])

    const animatedStyle = useAnimatedStyle(()=>{
        const color = interpolate(animatedWidth.value,[0,30,90],['red','orange','green'])
        return {
            width : animatedWidth.value,
            height : height,
            backgroundColor: color,
        }
    })



    return <Animated.View style={[animatedStyle]}/>

}

export default ProgressBar

const styles = StyleSheet.create({
    progressBarStyle : {

    }
})