import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import BottomHalfModal from "../components/BottomModal";
import Home from "../screens/home";
import NavigationModal from "../screens/ModalScreen";
import SixDigitInput from "../components/sixDigiInput/version1";
import OtherModals from "../screens/OtherModals";
import SixDigitsScreen from "../screens/SixDigitsScreen";

const Stack = createStackNavigator();
const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" mode="modal">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NavigationModal" component={NavigationModal} />
        <Stack.Screen name="SixDigit" component={SixDigitInput} />
        <Stack.Screen name="OtherModals" component={OtherModals} />
        <Stack.Screen name="SixDigitsScreen" component={SixDigitsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
