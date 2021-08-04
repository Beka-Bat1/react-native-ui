import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Separator = () => {
  return <View style={styles.separator} />;
};

export default Separator;

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomColor: "#3F3F3F",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
