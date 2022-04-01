import { useState } from "react";
import { LayoutChangeEvent } from "react-native";

const useElementDimensions = () => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  return {
    onLayout: (e: LayoutChangeEvent) => {
      const layout = e.nativeEvent.layout;

      setHeight(layout.height);
      setWidth(layout.width);
    },
    dimensions: {
      width,
      height,
    },
  };
};

export default useElementDimensions;
