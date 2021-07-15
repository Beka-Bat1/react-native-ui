import React from "react";
import {
  Dimensions,
  TouchableOpacity,
  Alert,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import Modal from "react-native-modal";
import { getStyleObj } from "./styles";
import Separator from "../Separator/Separator";
//TOFINDOUT customBackdrop does not work properly

interface Props {
  //// TOASK
  modalToggler: any;
  isModalOpen: boolean;
}

const modalContent = {
  modalHeader: "Select the transaction period to display",
  modalButtons: [
    {
      title: "This Month",
      onPress: () => {
        Alert.alert("This Month");
      },
    },
    {
      title: "This Year",
      onPress: () => {
        Alert.alert("This Year");
      },
    },
    {
      title: "All Time",
      onPress: () => {
        Alert.alert("All Time");
      },
    },
  ],
};

const BottomHalfModal = (props: Props) => {
  //// TOASK static javascript?
  const styles = getStyleObj();
  const deviceHeight: any = Dimensions.get("window").height;
  // Platform.OS === "ios"
  //   ? Dimensions.get("window").height
  //   : require("react-native-extra-dimensions-android").get(
  //       "REAL_WINDOW_HEIGHT"
  //     );

  const { modalToggler } = props;

  //// TODO customBackdrop={<View style={{flex: 1}} />} instead of TouchableWithoutFeedback

  return (
    <TouchableWithoutFeedback style={styles.background}>
      <Modal
        isVisible={props.isModalOpen}
        onBackdropPress={modalToggler}
        onSwipeComplete={modalToggler}
        swipeDirection={["up", "down"]}
        backdropOpacity={0.6}
        hasBackdrop={true}
        useNativeDriver={true}
        deviceHeight={deviceHeight}
        style={styles.modalContent}
      >
        <Text style={{ ...styles.textStyle, ...styles.modalContentHeader }}>
          {modalContent.modalHeader}
        </Text>
        <Separator />

        {modalContent.modalButtons.map((modalButton, index) => (
          <>
            <TouchableOpacity onPress={modalButton.onPress} key={index}>
              <Text style={styles.textStyle}>{modalButton.title}</Text>
            </TouchableOpacity>
            <Separator />
          </>
        ))}
        <TouchableOpacity
          onPress={() => props.modalToggler()}
          style={{ flex: 1 }}
        >
          <Text style={styles.textStyle}>Cancel</Text>
        </TouchableOpacity>
      </Modal>
    </TouchableWithoutFeedback>
  );
};

export default BottomHalfModal;
