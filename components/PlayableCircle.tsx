import { Circle } from "native-base";
import { ComponentProps } from "react";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { snapPoint } from "react-native-redash";

type PlayableCircleProps = ComponentProps<typeof Circle> & {
  parentContainerDimensions: { width: number; height: number };
};

const PlayableCircle = (props: PlayableCircleProps) => {
  const x = useSharedValue(0);
  const y = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { x: number; y: number }
  >({
    onStart: (_, ctx) => {
      ctx.x = x.value;
      ctx.y = y.value;
    },
    onActive: ({ translationX, translationY }, ctx) => {
      x.value = ctx.x + translationX;
      y.value = ctx.y + translationY;
    },
    onEnd: ({ velocityX, velocityY }) => {
      const snapWidth = props.parentContainerDimensions.width / 2;

      const destination = snapPoint(x.value, velocityX, [
        -snapWidth,
        0,
        snapWidth,
      ]);

      x.value = withSpring(destination, { velocity: velocityX });
      y.value = withSpring(0, { velocity: velocityY });
    },
  });

  const style = useAnimatedStyle(() => ({
    transform: [{ translateX: x.value }, { translateY: y.value }],
  }));

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent} minDist={0}>
      <Animated.View style={[style]}>
        <Circle size={100} {...props} />
      </Animated.View>
    </PanGestureHandler>
  );
};

export default PlayableCircle;
