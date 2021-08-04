import React from "react";
import { LogBox } from "react-native";
import RootStack from "./navigation/RootStack";

export default function App() {
  LogBox.ignoreAllLogs();
  return <RootStack />;
}
