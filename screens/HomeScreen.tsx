import { Divider, Flex, View } from "native-base";
import { useRef } from "react";
import PlayableCircle from "../components/PlayableCircle";
import useElementDimensions from "../hooks/useElementDimensions";
import { RootTabScreenProps } from "../types";

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  const fieldRef = useRef<HTMLElement>(null);
  const { onLayout, dimensions: fieldDimensions } = useElementDimensions();

  return (
    <View flex={1} justifyContent="center" alignItems="center">
      <Flex
        w="full"
        justifyContent="space-evenly"
        direction="row"
        backgroundColor="amber.300"
        alignItems="center"
        p="6"
        ref={fieldRef}
        style={{
          shadowColor: "#d97706",
          shadowOpacity: 1,
          shadowRadius: 100,
        }}
        onLayout={onLayout}
      >
        <PlayableCircle
          parentContainerDimensions={fieldDimensions}
          bg="secondary.400"
        />
        <Divider orientation="vertical" bgColor="red.400" thickness="3" />
        <PlayableCircle
          parentContainerDimensions={fieldDimensions}
          bg="primary.400"
        />
      </Flex>
    </View>
  );
}
