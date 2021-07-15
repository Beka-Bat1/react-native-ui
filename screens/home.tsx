import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import BottomHalfModal from "../components/BottomMobal/react-native-modal";
// import BottomModalize from "./components/BottomMobal/BottomModalize";
// import UselessTextInput from "./components/sixDigiInput";

export default function Home() {
  const navigation = useNavigation();

  const navigationHandler = () => {
    navigation.navigate("NavigationModal");
  };

  return (
    <View style={styles.container}>
      <Text>Hello world !</Text>
      <Button title="navigate to modalScreen" onPress={navigationHandler} />
      <BottomHalfModal />
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
});
