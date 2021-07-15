import React, { useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Modalize } from "react-native-modalize";

const BottomModalize = () => {
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <>
      <TouchableOpacity onPress={onOpen}>
        <Text>Open the modal</Text>
      </TouchableOpacity>

      <Modalize ref={modalizeRef}>
        <Text>...your content</Text>
      </Modalize>
    </>
  );
};

export default BottomModalize;

const styles = StyleSheet.create({});
