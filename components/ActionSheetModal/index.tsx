import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, TouchableOpacity } from "react-native";

import { ActionSheet } from "react-native-actionsheet-cstm";

const ActionSheetModal = (props: any) => {
  const { showActionSheet, onCloseActionSheet } = props;

  return (
    <ActionSheet
      visible={showActionSheet}
      onClose={onCloseActionSheet}
      useNativeDriver={true}
      actionItems={[
        {
          text: "Save",
          onPress: () => {
            console.log("Save");
          },
        },
        {
          text: "Update",
          onPress: () => {
            console.log("Update");
          },
        },
        {
          text: "Delete",
          textStyle: [{ color: "red" }],
          onPress: () => {
            console.log("Delete");
          },
        },
      ]}
    />
  );
};

export default ActionSheetModal;
