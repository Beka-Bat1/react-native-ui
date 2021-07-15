import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Modalize } from "react-native-modalize";
import BottomHalfModal from "../../components/BottomModal";
import { BottomModalize } from "../../Tests/BottomModalize";

const OtherModals = () => {
  const [isBottomHalfModal, setIsBottomHalfModal] = useState(false);
  const modalizeRef = useRef<Modalize>(null);

  const onBottomHalfModal = () => {
    setIsBottomHalfModal((prevState) => !prevState);
  };

  const onBottomModalizeOpen = () => {
    modalizeRef.current?.open();
  };

  const onBottomModalizeClose = () => {
    modalizeRef.current?.close();
  };

  return (
    <View style={styles.verticalContainer}>
      <BottomHalfModal
        isModalOpen={isBottomHalfModal}
        modalToggler={onBottomHalfModal}
      />
      <Button title="Open BottomHalf modal" onPress={onBottomHalfModal} />

      <Button title="Open BottomModalize" onPress={onBottomModalizeOpen} />

      <BottomModalize
        ref={modalizeRef}
        onBottomModalizeOpen={onBottomModalizeOpen}
        onBottomModalizeClose={onBottomModalizeClose}
      />
    </View>
  );
};

export default OtherModals;

const styles = StyleSheet.create({
  verticalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});
