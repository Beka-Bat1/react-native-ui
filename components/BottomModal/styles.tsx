import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const getStyleObj = () => {
  return StyleSheet.create({
    background: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: "red",
      alignItems: "flex-end",
      justifyContent: "flex-end",
    },
    /// TOASK marginTop Best Practices
    modalContent: {
      marginTop: Dimensions.get("window").height * 0.55,
      padding: 15,
      backgroundColor: "white",
      borderRadius: 15,
    },
    cancelButton: {
      width: "80%",
      backgroundColor: "red",
      borderRadius: 15,
      color: colors.blue,
    },
    modalContentHeader: {
      color: colors.gray1,
      marginVertical: 15,
    },
    // TOASK text style from container or text
    textStyle: {
      textAlign: "center",
      color: colors.blue,
      fontSize: 22,
    },
  });
};
