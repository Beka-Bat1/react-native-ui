import React from "react";
import { Dimensions, TouchableOpacity, Alert, Text } from "react-native";
import Modal from "react-native-modal";
import { getStyleObj } from "./styles";
import Separator from "../Separator/Separator";

interface Props {
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
  const styles = getStyleObj();
  const { height, width } = Dimensions.get("window");
  const { modalToggler } = props;

  return (
    <>
      <Modal
        isVisible={props.isModalOpen}
        onBackdropPress={modalToggler}
        swipeDirection={["up", "down"]}
        backdropOpacity={0.7}
        hasBackdrop={true}
        useNativeDriver={true}
        deviceHeight={height}
        style={styles.modalContent}
      >
        <Text style={[styles.textStyle, styles.modalContentHeader]}>
          {modalContent.modalHeader}
        </Text>
        <Separator />

        {modalContent.modalButtons.map((modalButton, index) => (
          <>
            <TouchableOpacity onPress={modalButton.onPress} key={index}>
              <Text style={styles.textStyle}>{modalButton.title}</Text>
            </TouchableOpacity>
            {index < modalContent.modalButtons.length - 1 && <Separator />}
          </>
        ))}

        <TouchableOpacity
          onPress={() => props.modalToggler()}
          style={{
            width: width * 0.9,
            borderRadius: 15,
            backgroundColor: "#F8F8F8D1",
            position: "absolute",
            bottom: -80,
          }}
        >
          <Text style={styles.textStyle}>Cancel</Text>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default BottomHalfModal;
