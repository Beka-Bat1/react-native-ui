import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Modal, StyleSheet, Text, View } from "react-native";
import BottomHalfModal from "../components/BottomModal";
import Home from "../screens/home";
import NavigationModal from "../screens/ModalScreen";
import SixDigitInput from "../components/sixDigiInput/version1";
import OtherModals from "../screens/OtherModals";
import SixDigitsScreen from "../screens/SixDigitsScreen";
import CameraScreen from "../screens/CameraScreen";
import ActionSheetModal from "../components/ActionSheetModal";
import AnimationsScreen from "../screens/Animations";

const Stack = createStackNavigator();
const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        mode="modal"
        initialRouteName={"AnimationsScreen"}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="NavigationModal"
          component={NavigationModal}
          options={{
            detachPreviousScreen: false,
            headerShown: false,
            cardOverlayEnabled: true,
            cardStyle: { backgroundColor: "hsla(0, 0%, 30%, 0.6)", opacity: 1 },
            cardStyleInterpolator: ({ current: { progress } }) => ({
              cardStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 0.5, 0.9, 1],
                  outputRange: [0, 0.25, 0.7, 1],
                }),
              },
              overlayStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0.5],
                  extrapolate: "clamp",
                }),
              },
            }),
          }}
        />
        <Stack.Screen name="SixDigit" component={SixDigitInput} />
        <Stack.Screen name="OtherModals" component={OtherModals} />
        <Stack.Screen name="SixDigitsScreen" component={SixDigitsScreen} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
        <Stack.Screen name="ActionSheetModal" component={ActionSheetModal} />
        <Stack.Screen name="AnimationsScreen" component={AnimationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
