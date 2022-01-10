import { View, Text } from "native-base";
import { RootTabScreenProps } from "../types";
import { Canvas, Circle, Paint, Group } from "@shopify/react-native-skia";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const r = 128;

  return (
    <View>
      <Text>hello</Text>
      <Canvas style={{ flex: 1 }}>
        <Circle cx={r} cy={r} r={r} />
      </Canvas>
    </View>
  );
}
