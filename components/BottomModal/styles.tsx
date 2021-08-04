import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const getStyleObj = () => {
  return StyleSheet.create({
    background: {
      flexDirection: "column",
      justifyContent: "flex-end",
    },
    /// TOASK marginTop Best Practices
    modalContent: {
      flex: 0.4,
      position: "absolute",
      bottom: 78,
      padding: 15,
      backgroundColor: "#F8F8F8D1",
      borderRadius: 15,
    },
    cancelButton: {
      width: "100%",
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
      color: "#007AFF",
      fontSize: 20,
      lineHeight: 24,
      marginVertical: 16,
    },
  });
};
