import { Text, StyleSheet } from "react-native";
import { colors, fonts, metrics } from "../theme";

export const Title = ({children}) => {
  return (
      <Text style={styles.text}>{children}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    height: 50,
    fontSize: 30,
    letterSpacing: 1,
  },
});
