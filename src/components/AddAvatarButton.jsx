import { useState } from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { colors } from "../theme";
import Cross from "../assets/svg/Cross.svg";
import Iks from "../assets/svg/Iks.svg";

export const AddAvatarButton = ({ onPress, title }) => {
  const [rotated, setRotated] = useState(false);

  return (
    <Pressable
      style={[styles.button, rotated && styles.rotatedBtn]}
      onPress={() => {
        setRotated(!rotated);
        onPress();
      }}
    >
      {rotated ? Iks : Cross}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: -25 / 2,
    bottom: 25 / 2,
    width: 25,
    height: 25,
    borderRadius: 25,
    backgroundColor: colors.white,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: colors.accent,
    zIndex: 2,
  },
  text: {
    color: colors.accent,
  },
  rotatedBtn: {
    borderColor: colors.border,
  },
});
