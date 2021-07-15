import React, {
    createRef,
    forwardRef,
    useEffect,
    useRef,
    useState,
  } from "react";
  import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Alert,
    TextInput,
    Button,
    Dimensions,
    TouchableHighlight,
  } from "react-native";
  import colors from "../../constants/colors";

  const CustomTextInput = forwardRef((props: any, ref: any) => {
    return <TextInput ref={ref} style={{ ...props.style }} {...props} />;
  });

  const screenPadding = 30;
  const inlinePadding = 5;
  const circleDiameter =
    (Dimensions.get("window").width - screenPadding * 2 - inlinePadding * 5) / 6;

  const SixDigitInput2 = () => {
    const inputRef_1: any = useRef();
    const inputRef_2: any = useRef();
    const inputRef_3: any = useRef();
    const inputRef_4: any = useRef();
    const inputRef_5: any = useRef();
    const inputRef_6: any = useRef();

    const inputArray = [
      inputRef_1,
      inputRef_2,
      inputRef_3,
      inputRef_4,
      inputRef_5,
      inputRef_6,
    ];

    const pressHandler = () => {
      inputRef_1?.current.focus();
    };

      useEffect(() => {
        pressHandler();
      }, []);

    return (
      <TouchableHighlight style={styles.container}>
        <>
          {[...inputArray].map((currentRef, index: any) => {
            return (
              <CustomTextInput
                key={index}
                ref={currentRef}
                returnKeyType="next"
                maxLength={1}
                style={styles.circleInput}
                keyboardType={"numeric"}
                onChange={(e: any) => {
                  console.log(e.nativeEvent.key);

                  /// check if delate or otherwise
                  if (!e.nativeEvent.text) {
                    return inputArray[index - 1]?.current?.focus();
                  }

                  return inputArray[index + 1]?.current?.focus();
                }}
                blurOnSubmit={false}
              />
            );
          })}
        </>
      </TouchableHighlight>
    );
  };

  export default SixDigitInput2;

  const styles = StyleSheet.create({
    circleInput: {
      height: circleDiameter,
      width: circleDiameter,
      borderRadius: circleDiameter,
      backgroundColor: "gray",
      color: "black",
      fontSize: 20,
      textAlign: "center",
      textAlignVertical: "center",
      // zIndex: -1,
      margin: inlinePadding,
    },
    container: {
      // position: "absolute",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      backgroundColor: "transparent",
      // padding: screenPadding,
      zIndex: 200,
    },
  });
