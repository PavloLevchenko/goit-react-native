import { useState } from "react";
import { TextInput, StyleSheet } from "react-native";
import { colors, fonts, metrics } from "../theme";

export const RegistrationInput = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  style,
}) => {
  const [focus, setFocus] = useState(false);
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      placeholder={placeholder}
      placeholderTextColor={colors.labelText}
      secureTextEntry={secureTextEntry}
      style={[styles.input, focus && styles.focused, style]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: metrics.screenWidth - metrics.sidePadding * 2,
    height: 50,
    padding: metrics.sidePadding,
    ...fonts.input,
    backgroundColor: colors.inputBg,
    color: colors.inputText,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 8,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 4,
  },
  focused: {
    borderColor: colors.accent,
    backgroundColor: colors.white,
    shadowRadius: 0,
    elevation: 0,
  },
});
