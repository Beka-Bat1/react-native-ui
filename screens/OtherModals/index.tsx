import { useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Modalize } from "react-native-modalize";
import ActionSheetModal from "../../components/ActionSheetModal";
import BottomHalfModal from "../../components/BottomModal";
import { BottomModalize } from "../../Tests/BottomModalize";

const OtherModals = () => {
  const [isBottomHalfModal, setIsBottomHalfModal] = useState(false);
  const modalizeRef = useRef<Modalize>(null);
  const navigation = useNavigation();
  const onBottomHalfModal = () => {
    setIsBottomHalfModal((prevState) => !prevState);
  };

  const onBottomModalizeOpen = () => {
    modalizeRef.current?.open();
  };

  const onBottomModalizeClose = () => {
    modalizeRef.current?.close();
  };

  const [showActionSheet, setShowActionSheet] = useState<boolean>(false);

  const onShowActionSheet = () => {
    setShowActionSheet(true);
  };

  const onCloseActionSheet = () => {
    setShowActionSheet(false);
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

      <Button title="Open actionSheetModal" onPress={onShowActionSheet} />

      <Button
        title="navigate to modalScreen"
        onPress={() => navigation.navigate("NavigationModal")}
      />

      <ActionSheetModal
        onCloseActionSheet={onCloseActionSheet}
        showActionSheet={showActionSheet}
      />
    </View>
  );
};

export default OtherModals;

const styles = StyleSheet.create({
  verticalContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
