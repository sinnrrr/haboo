import { Center, Circle, Divider, Flex, View } from "native-base";
import PlayableCircle from "../components/PlayableCircle";

import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View flex={1} justifyContent="center" alignItems="center">
      <Flex
        w="full"
        justifyContent="space-between"
        direction="row"
        backgroundColor="amber.300"
        alignItems="center"
        p="6"
        style={{
          shadowColor: "#d97706",
          shadowOpacity: 1,
          shadowRadius: 100,
        }}
      >
        <PlayableCircle bg="secondary.400" />
        <Divider orientation="vertical" bgColor="red.400" thickness="3" />
        <PlayableCircle bg="primary.400" />
      </Flex>
    </View>
  );
}
