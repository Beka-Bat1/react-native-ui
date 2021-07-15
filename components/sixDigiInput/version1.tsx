import React, { useRef } from "react";
import { StyleSheet, TextInput, View, Dimensions, Alert } from "react-native";

const screenPadding = 60;
const inlinePadding = 5;
const circleDiameter =
  (Dimensions.get("window").width - screenPadding * 2 - inlinePadding * 5) / 6;
const letterSpace = circleDiameter - inlinePadding;
// (Dimensions.get("window").width - screenPadding * 2) / 12 + inlinePadding * 2;

const SixDigitInput = () => {
  const [text, onChangeText] = React.useState("");

  const ref = useRef(null);

  return (
    <View style={styles.parentWrapper}>
      <View>
        <View style={styles.placeHolderWrapper}>
          {[...Array(6)].map((el, index) => (
            <View
              key={index}
              style={[
                styles.placeHolder,
                // { left: index * circleDiameter + inlinePadding },
              ]}
            />
          ))}
        </View>

        <TextInput
          value={text}
          onChangeText={onChangeText}
          style={styles.input}
          maxLength={6}
          numberOfLines={1}
          dataDetectorTypes={"none"}
          autoCompleteType={"off"}
          underlineColorAndroid="transparent"
          keyboardType="numeric"
          placeholderTextColor={"red"}
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry={false}
          textAlign={"left"}
          onBlur={() => Alert.alert("blured")}
          textContentType={"oneTimeCode"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: screenPadding,
  },
  placeHolderWrapper: {
    flexDirection: "row",
    height: circleDiameter,
    width: "100%",
  },
  placeHolder: {
    zIndex: 0,
    height: circleDiameter,
    width: circleDiameter,
    borderRadius: circleDiameter,
    marginHorizontal: inlinePadding,
    backgroundColor: "#dedede",
  },
  input: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 5,
    right: 0,
    height: circleDiameter,
    width: Dimensions.get("window").width,
    letterSpacing: letterSpace,
    color: "black",
    fontSize: 24,
    zIndex: 200,
  },
});

export default SixDigitInput;
