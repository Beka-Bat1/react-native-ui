import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({});
export const getStyleObj = () => {
  return StyleSheet.create({
    background: {
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-end",
    },
    modalContent: {
      width: "90%",
      padding: 15,
      backgroundColor: "#F8F8F8D1",
      borderRadius: 15,
      marginBottom: 20,
      color: colors.blue,
      // borderTopLeftRadius: 15,
      // borderTopRightRadius: 15,
      // borderBottomRightRadius: 15,
      // borderBottomLeftRadius: 15,
    },
    cancelButton: {
      width: "90%",
      backgroundColor: "red",
      borderRadius: 15,
      color: colors.blue,
    },
    // TOTAKE
    modalContentHeader: {
      color: "#8F8F8F",
      marginTop: 16,
      marginBottom: 11,
      marginHorizontal: 37,
      fontSize: 13,
      lineHeight: 18,
    },
    // TOASK text style from container or text
    textStyle: {
      textAlign: "center",
      color: "#007AFF",
      fontSize: 20,
      lineHeight: 24,
      marginHorizontal: 10,
      marginVertical: 13,
    },
  });
};
