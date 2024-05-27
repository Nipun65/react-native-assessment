import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const IconWrapper = ({ children, handleButton }: any) => {
  return (
    <TouchableOpacity onPress={handleButton} style={styles.circle}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "#12121259",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default IconWrapper;
