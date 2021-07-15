import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import colors from "../../constants/colors";
// import { styles } from "./styles";

// interface Props {
//   onPress: Function;
//   title: string;
//   style?: Object;
// }

const PersonDetailForm = (props: any) => {
  const [text, onChangeText] = useState("");

  const onPress = () => {
    console.log("pressed");
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback style={[props.style]} onPress={onPress}>
        <TextInput
          value={text}
          onChangeText={onChangeText}
          style={styles.input}
          maxLength={100}
          // numberOfLines={1}
          // textBreakStrategy={'balanced'}
          dataDetectorTypes={"none"}
          autoCompleteType={"off"}
          underlineColorAndroid="transparent"
          keyboardType="numeric"
          // placeholderTextColor={"red"}
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry={false}
          textAlign={"left"}
          onBlur={() => console.log("blured")}
          textContentType={"oneTimeCode"}
        />

        {Array(6)
          .slice()
          .map((el, index) => (
            <TextInput
              key={index}
              value={text}
              onChangeText={onChangeText}
              style={styles.input}
              maxLength={100}
              // numberOfLines={1}
              // textBreakStrategy={'balanced'}
              dataDetectorTypes={"none"}
              autoCompleteType={"off"}
              underlineColorAndroid="transparent"
              keyboardType="numeric"
              // placeholderTextColor={"red"}
              autoCorrect={false}
              autoCapitalize="none"
              secureTextEntry={false}
              textAlign={"left"}
              onBlur={() => console.log("blured")}
              textContentType={"oneTimeCode"}
            />
          ))}
      </TouchableWithoutFeedback>
    </View>
  );
};

export default PersonDetailForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.white,
    fontWeight: "500",
    fontSize: 20,
  },
  input: {
    height: 80,
    padding: "offset",
    borderRadius: 35,
    letterSpacing: 1,
    paddingHorizontal: 20,
    paddingVertical: 5,
    color: colors.black,
    backgroundColor: colors.white,

    fontSize: 50,
  },
});
