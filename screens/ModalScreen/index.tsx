import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { StackActions } from "@react-navigation/native";
import Separator from "../../components/Separator/Separator";
import { getStyleObj } from "./styles";

export default () => {
  const navigation = useNavigation();
  const styles = getStyleObj();
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

  const closeModal = () => {
    navigation.dispatch(StackActions.pop());
  };
  return (
    <TouchableOpacity style={styles.background} onPress={closeModal}>
      <TouchableWithoutFeedback
        onPress={(e) => {
          e.preventDefault();
        }}
      >
        <View style={styles.modalContent}>
          <Text style={(styles.modalContentHeader, styles.textStyle)}>
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
        </View>
      </TouchableWithoutFeedback>
      <TouchableOpacity onPress={closeModal} style={styles.modalContent}>
        <Text style={styles.textStyle}>Cancel</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
