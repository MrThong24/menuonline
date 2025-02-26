import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Splash = () => {
  return (
    <View>
      <Text>Wellcome</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderStartColor: "red",
    backgroundColor: "orange",
  },
  textStyles: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
