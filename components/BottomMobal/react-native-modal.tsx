import React, { useState } from "react";
import { StyleSheet, Button, Dimensions, Platform, View } from "react-native";
import Modal from "react-native-modal";
import LinearBackground from "../LinearBackground";

//TOFINDOUT customBackdrop does not work properly
const deviceWidth: any = Dimensions.get("window").width;
const deviceHeight: any =
  Platform.OS === "ios"
    ? Dimensions.get("window").height
    : require("react-native-extra-dimensions-android").get(
        "REAL_WINDOW_HEIGHT"
      );

const BottomHalfModal = (props: any) => {
  const [isVisible, setisVisible] = useState(false);

  

  return (
    <Modal
      testID={"modal"}
      isVisible={isVisible}
      swipeDirection={["up", "down"]}
      backdropColor={"gray"}
      backdropOpacity={0.7}
      hasBackdrop={true}
      useNativeDriver={true}
      deviceHeight={deviceHeight}
      deviceWidth={deviceWidth}
      // onBackdropPress={() => setisVisible(false)}
      style={styles.view}
    >
      {props.children}
    </Modal>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "flex-end",
    margin: 0,
    borderRadius: 35,
    height: deviceHeight / 4,
  },
});

export default BottomHalfModal;
