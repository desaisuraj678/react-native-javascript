import React, {useRef} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {screeHeight, screenWidth} from '../../../../core_base/CoreApis';

function SpotifyMyPlaylist() {
  const imgSize = 250;
  const imgMarginTop = 48;
  const headerMarginTop = 70;
  const headerHeight = 32;
  const animatedImgTop = imgMarginTop + headerMarginTop + headerHeight;
  const bottomPadding = 16;
  const content = Array(25).fill(0);
  const scrollY = useSharedValue(0);
  const scrollViewScrollY = useSharedValue(0);
  const scrollViewRef = useRef();
  const momentumScrollRef = useRef(false);
  const scrollDragRef = useRef(false);
  const timeoutRef = useRef();
  const onScrollHandler = ({nativeEvent: {contentOffset}}) => {
    if (contentOffset.y >= 0) {
      scrollViewScrollY.value = contentOffset.y;
      scrollY.value = 0;
    }
    if (contentOffset.y <= 0) {
      scrollY.value = contentOffset.y;
      scrollViewScrollY.value = 0;
    }
  };

  const animatedImgStyle = useAnimatedStyle(() => {
    const scale = interpolate(scrollY.value, [0, -screeHeight, 0], [1, 2, 1], {
      extrapolateRight: Extrapolate.CLAMP,
      extrapolateLeft: Extrapolate.CLAMP,
    });
    const translateY = interpolate(
      scrollViewScrollY.value,
      [0, animatedImgTop],
      [0, animatedImgTop],
      {
        extrapolateRight: Extrapolate.CLAMP,
        extrapolateLeft: Extrapolate.CLAMP,
      },
    );

    const imgSizeInterpolate = interpolate(
      scrollViewScrollY.value,
      [0, animatedImgTop, imgSize + 48],
      [imgSize, imgSize, imgSize / 1.2],
      {
        extrapolateRight: Extrapolate.CLAMP,
        extrapolateLeft: Extrapolate.CLAMP,
      },
    );

    const imgOpacityInterpolate = interpolate(
      scrollViewScrollY.value,
      [0, animatedImgTop, imgSize + imgSize / 2],
      [1, 1, 0],
      {
        extrapolateRight: Extrapolate.CLAMP,
        extrapolateLeft: Extrapolate.CLAMP,
      },
    );

    return {
      width: imgSizeInterpolate,
      height: imgSizeInterpolate,
      opacity: imgOpacityInterpolate,
      transform: [{scale: scale}, {translateY: -translateY}],
    };
  });

  const animatedInputStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollViewScrollY.value,
      [0, headerMarginTop, 0],
      [0, -headerMarginTop, 0],
      {
        extrapolateRight: Extrapolate.CLAMP,
        extrapolateLeft: Extrapolate.CLAMP,
      },
    );

    const opacity = interpolate(
      scrollViewScrollY.value,
      [0, headerMarginTop],
      [1, 0],
      {
        extrapolateRight: Extrapolate.CLAMP,
        extrapolateLeft: Extrapolate.CLAMP,
      },
    );
    return {
      transform: [{translateY: translateY}],
      opacity: opacity,
    };
  });

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: -scrollY.value / 2}],
    };
  });

  const onMomentumScrollBegin = () => {
    momentumScrollRef.current = true;
  };

  const onMomentumScrollEnd = () => {
    clearTimeout(timeoutRef.current);
    if (momentumScrollRef.current) {
      momentumScrollRef.current = false;
    }
  };

  const onDragBegin = () => {
    clearTimeout(timeoutRef.current);
    scrollDragRef.current = true;
  };

  const onDragEnd = () => {
    clearTimeout(timeoutRef.current);
    if (!momentumScrollRef.current && scrollDragRef.current) {
      timeoutRef.current = setTimeout(() => {
        if (!momentumScrollRef.current && scrollDragRef.current) {
          if (scrollViewScrollY.value < headerMarginTop) {
            scrollViewRef.current.scrollTo({y: 0, animated: true});
          } else if (scrollViewScrollY.value < animatedImgTop) {
            scrollViewRef.current.scrollTo({y: animatedImgTop, animated: true});
          }
          scrollDragRef.current = false;
        } else {
          scrollDragRef.current = false;
        }
      }, 0);
    } else {
      scrollDragRef.current = false;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          {position: 'absolute', top: headerMarginTop},
          animatedInputStyle,
        ]}>
        <TextInput
          style={{
            width: screenWidth - 32,
            height: headerHeight,
            backgroundColor: '#a16a5c',
            borderRadius: 4,
            alignSelf: 'center',
          }}></TextInput>
      </Animated.View>
      <Animated.View style={[animatedContainerStyle]}>
        <Animated.Image
          source={require('../../../../resources/sp_song.png')}
          style={[
            {
              top: animatedImgTop,
              position: 'absolute',
              alignSelf: 'center',
              zIndex: -1,
            },
            animatedImgStyle,
          ]}
        />
      </Animated.View>

      <Animated.ScrollView
        onScroll={onScrollHandler}
        ref={scrollViewRef}
        bounces={true}
        decelerationRate={'normal'}
        onMomentumScrollBegin={onMomentumScrollBegin}
        onMomentumScrollEnd={onMomentumScrollEnd}
        onScrollBeginDrag={onDragBegin}
        onScrollEndDrag={onDragEnd}
        contentContainerStyle={{alignItems: 'center', width: screenWidth}}
        scrollEventThrottle={1}>
        <Animated.View
          style={[
            {
              paddingTop:
                imgMarginTop +
                imgSize +
                bottomPadding +
                headerMarginTop +
                headerHeight,
            },
          ]}>
          <Text
            style={{
              paddingHorizontal: 16,
              color: 'white',
              fontSize: 20,
              fontWeight: '700',
            }}>
            Punjabi songs
          </Text>
          <View style={{marginTop: 32}}>
            {content.map((_, index) => {
              return (
                <View
                  key={index}
                  style={{
                    width: screenWidth,
                    height: 60,
                    backgroundColor: '#171211',
                  }}
                />
              );
            })}
          </View>
        </Animated.View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

export default SpotifyMyPlaylist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#96452f',
    alignItems: 'center',
  },
});
