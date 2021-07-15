import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Home() {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Hello world !</Text>

      <View style={styles.verticalContainer}>
        <Button
          title="navigate to modalScreen"
          onPress={() => navigation.push("NavigationModal")}
        />
        <Button title="six Digit" onPress={() => navigation.push("SixDigit")} />
        <Button
          title="other modal types"
          onPress={() => navigation.push("OtherModals")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  verticalContainer: {
    flexDirection: "column",
    alignItems: "stretch",
  },
});
