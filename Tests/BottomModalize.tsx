import React, { forwardRef } from "react";
import { Text, TouchableOpacity, Alert, Dimensions } from "react-native";
import { Modalize } from "react-native-modalize";
import Separator from "../components/Separator/Separator";
import { getStyleObj } from "./styles";

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

const snapPoint: any = Dimensions.get("window").height * 0.57;

export const BottomModalize = forwardRef((props: any, ref: any) => {
  const styles = getStyleObj();

  return (
    <>
      <Modalize
        ref={ref}
        modalTopOffset={snapPoint}
        modalStyle={{ marginHorizontal: 15, zIndex: 200 }}
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
          onPress={() => props.onBottomModalizeClose()}
          style={styles.cancelButton}
        >
          <Text style={styles.textStyle}>Cancel</Text>
        </TouchableOpacity>
      </Modalize>
    </>
  );
});
