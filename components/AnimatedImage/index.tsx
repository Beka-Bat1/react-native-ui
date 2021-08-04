import React from "react";
import { StyleSheet, Image, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const AnimatedImage = () => {
  const randomNumber = useSharedValue(100);

  const style = useAnimatedStyle(() => {
    return {
      width: withSpring(randomNumber.value),
      height: withSpring(randomNumber.value, { stiffness: 10 }),
    };
  });

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#7CA1B4",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          randomNumber.value = Math.random() * 350;
        }}
      >
        <Animated.Image
          source={require("./rns.png")}
          resizeMode="contain"
          style={style}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AnimatedImage;

const styles = StyleSheet.create({});
