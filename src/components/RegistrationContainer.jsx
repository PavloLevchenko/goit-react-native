import { View, StyleSheet } from "react-native";
import { colors } from "../theme";

export const RegistrationContainer = ({ style, children }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
});
