import React, { useEffect } from 'react'
import { Svg, Circle, Path, G, Rect, Text } from 'react-native-svg'
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import Ticker from './../../../../screens/home/lending-v2/text-ticker'
import { typography } from '../../../../utils/theme'
import { View, Text as RNText } from 'react-native'

function CreditScoreMeter({
  meterAnimationFinished,
}: {
  meterAnimationFinished: () => {}
}) {
  const minScore = 300
  const maxScrore = 850
  const userScore = 850
  const initialAngle = 74
  const finalAngle = 286
  let creditScoreText = "Excellent"
  const calCulatedAngle =
    (userScore * (finalAngle - initialAngle)) / (maxScrore - minScore)
  const currentAngle =
    calCulatedAngle > finalAngle
      ? finalAngle
      : calCulatedAngle < initialAngle
      ? initialAngle
      : calCulatedAngle
  const { sin, cos, PI } = Math
  const size = 186
  // arc lenghts
  const poorArcLengthPercent = 0.38
  const avgArcLengthPercent = 0.3
  const goodArcLengthPercent = 0.165
  const excellentArcLengthPercent = 0.165
  const startArcAngle = -PI / 6
  const endArcAngle = PI + PI / 6
  const angleDiff = endArcAngle - startArcAngle
  const gapAngle = PI / 60
  const strokeWidth = 24
  const rectWidth = 10
  const radius = (size - strokeWidth) / 2
  const innerCircleRadius = 44
  const outerCircleRadius = 50
  const rectHeight = radius + strokeWidth / 4
  const cx = size / 2
  const cy = size / 2

  // first arc
  const startAngle1 = startArcAngle
  const endAngle1 = startArcAngle + angleDiff * poorArcLengthPercent
  const startX1 = cx - radius * cos(startAngle1)
  const startY1 = cy - radius * sin(startAngle1)

  const endX1 = cx - radius * cos(endAngle1)
  const endY1 = cy - radius * sin(endAngle1)

  //second arc
  const startAngle2 = endAngle1 + gapAngle
  const endAngle2 =
    startArcAngle + angleDiff * (poorArcLengthPercent + avgArcLengthPercent)
  const startX2 = cx - radius * cos(startAngle2)
  const startY2 = cy - radius * sin(startAngle2)

  const endX2 = cx - radius * cos(endAngle2)
  const endY2 = cy - radius * sin(endAngle2)

  // third arc

  const startAngle3 = endAngle2 + gapAngle
  const endAngle3 =
    startArcAngle +
    angleDiff *
      (poorArcLengthPercent + avgArcLengthPercent + goodArcLengthPercent)
  const startX3 = cx - radius * cos(startAngle3)
  const startY3 = cy - radius * sin(startAngle3)

  const endX3 = cx - radius * cos(endAngle3)
  const endY3 = cy - radius * sin(endAngle3)

  // fourth arc

  const startAngle4 = endAngle3 + gapAngle
  // const endAngle4 = startArcAngle +
  // angleDiff *
  //   (poorArcLengthPercent + avgArcLengthPercent + goodArcLengthPercent+ excellentArcLengthPercent)
  const endAngle4 = endArcAngle
  const startX4 = cx - radius * cos(startAngle4)
  const startY4 = cy - radius * sin(startAngle4)

  const endX4 = cx - radius * cos(endAngle4)
  const endY4 = cy - radius * sin(endAngle4)

  //

  const sharedSinTheta = useSharedValue(initialAngle)
  const AnimatedG = Animated.createAnimatedComponent(G)
  const AnimatedText = Animated.createAnimatedComponent(Text)
  const animationDuration = 2000

  function animationFinished(){
    creditScoreText = 'Good'
    meterAnimationFinished()
  }

  useEffect(() => {
    sharedSinTheta.value = withTiming(
      currentAngle,
      {
        duration: animationDuration,
      },
      () => {
        runOnJS(animationFinished)()
      },
    )
  }, [])

  const animatedPropsG = useAnimatedProps(() => {
    return {
      transform: [
        { translateX: cx },
        { translateY: cy },
        { rotate: `${sharedSinTheta.value}deg` },
        { translateX: -cx },
        { translateY: -cy },
      ],
    }
  })

  const animatedPropsText = useAnimatedProps(() => {
    return {
      opacity : interpolate(sharedSinTheta.value,[80,currentAngle-1,currentAngle],[0,0,1])
    }
  })

  return (
    <View>
      <View
        style={{
          position: 'absolute',
          top: cy - 16,
          left: cx - 28,
          zIndex: 100,
          justifyContent: 'center',
          alignItems:'center'
        }}
      >
        <RNText style={[typography.tag3, { color: '#000' }]}>Your Score</RNText>
        <Ticker
          textStyle={[typography.subheading, { color: '#28233A' }]}
          number={String(userScore)}
          initialDelay={0}
          duration={animationDuration}
        />
      </View>
      <Svg height={`${size}`} width={`${size}`} viewBox={`0 0 ${size} ${size}`}>
        <G>
          <Path
            d={`M ${startX1} ${startY1} A ${radius} ${radius} 0 0 1 ${endX1} ${endY1}`}
            stroke="#C42742"
            strokeWidth={`${strokeWidth}`}
          />
          <Path
            d={`M ${startX2} ${startY2} A ${radius} ${radius} 0 0 1 ${endX2} ${endY2}`}
            stroke="#FF8933"
            strokeWidth={`${strokeWidth}`}
          />
          <Path
            d={`M ${startX3} ${startY3} A ${radius} ${radius} 0 0 1 ${endX3} ${endY3}`}
            stroke="#F4C430"
            strokeWidth={`${strokeWidth}`}
          />
          <Path
            d={`M ${startX4} ${startY4} A ${radius} ${radius} 0 0 1 ${endX4} ${endY4}`}
            stroke="#1EC664"
            strokeWidth={`${strokeWidth}`}
          />
        </G>

        <AnimatedG animatedProps={animatedPropsG}>
          <Rect
            x={cx - rectWidth / 2}
            y={cy}
            rx={7}
            width={rectWidth}
            height={rectHeight}
            fill={'white'}
          />
        </AnimatedG>
        <Circle
          cx={`${cx}`}
          cy={`${cy + 6}`}
          r={`${outerCircleRadius}`}
          fill="#AB8CFF"
        />
        <Circle
          cx={`${cx}`}
          cy={`${cy + 6}`}
          r={`${innerCircleRadius}`}
          fill="white"
        />
        <Rect
          x={0}
          y={cy + outerCircleRadius / 1.5}
          width={size}
          height={rectHeight}
          fill={'#492B9D'}
        ></Rect>
        <AnimatedText
          fill="#D9D9D9"
          fontSize="14"
          fontWeight="600"
          letterSpacing={'0.2'}
          x={cx}
          y={cy + outerCircleRadius + 6}
          textAnchor="middle"
          animatedProps={animatedPropsText}
        >
          {creditScoreText}
        </AnimatedText>
      </Svg>
    </View>
  )
}

export default React.memo(CreditScoreMeter)
