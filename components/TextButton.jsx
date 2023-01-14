import { Text, StyleSheet, Pressable } from "react-native";
import { colors, fonts, metrics } from "../theme";

export const TextButton = ({ onPress, title }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: metrics.screenWidth - metrics.sidePadding * 2,
    height: 50,
    padding: metrics.sidePadding,
    marginTop: 43,
    borderRadius: 100,
    backgroundColor: colors.accent,
  },
  text: {
    textAlign: "center",
    color: colors.white,
    ...fonts.button,
  },
});
