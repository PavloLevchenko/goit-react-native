import { useState } from "react";
import { View, Pressable, Text, Keyboard, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import { colors, fonts } from "../theme";
import { RegistrationInput } from "./RegistrationInput";

export const PasswordInput = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  style,
}) => {
  const [passwordVisiblity, setPasswordVisiblity] = useState(false);
  const { t } = useTranslation();
  return (
    <View style={[styles.container, style]}>
      <RegistrationInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.labelText}
        secureTextEntry={secureTextEntry && !passwordVisiblity}
      />
      <Pressable
        style={styles.button}
        onPress={() => {
          Keyboard.dismiss();
          setPasswordVisiblity(!passwordVisiblity);
        }}
      >
        <Text style={styles.text}>
          {passwordVisiblity ? t("Hide") : t("Show")}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  button: {
    position: "absolute",
    right: 0,
  },
  text: {
    textAlign: "right",
    padding: 16,
    color: colors.action,
    ...fonts.normal,
  },
});
