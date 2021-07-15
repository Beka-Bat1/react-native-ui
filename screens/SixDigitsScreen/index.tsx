import React from "react";
import { View, Text } from "react-native";
import SixDigitInput from "../../components/sixDigiInput/version1";
import SixDigitInput2 from "../../components/sixDigiInput/version2";

const SixDigitsScreen = () => {
  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "space-around" }}
    >
      <SixDigitInput />
      <SixDigitInput2 />
    </View>
  );
};

export default SixDigitsScreen;
