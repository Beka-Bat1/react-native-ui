import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({});
export const getStyleObj = () => {
  return StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: "gray",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    modalContent: {
      width: "80%",
      padding: 15,
      backgroundColor: "white",
      borderRadius: 15,
      marginBottom: 20,
      color: colors.blue,
      // borderTopLeftRadius: 15,
      // borderTopRightRadius: 15,
      // borderBottomRightRadius: 15,
      // borderBottomLeftRadius: 15,
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
