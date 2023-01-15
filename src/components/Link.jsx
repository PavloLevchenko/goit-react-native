import { StyleSheet } from "react-native";
import { Link as NativeLink } from "@react-navigation/native";
import { colors, fonts, metrics } from "../theme";

export const Link = ({ to, children }) => {
  return (
    <NativeLink to={to} style={styles.link}>
      {children}
    </NativeLink>
  );
};

const styles = StyleSheet.create({
  link: {
    padding: metrics.sidePadding,
    color: colors.action,
    ...fonts.normal,
  },
});
