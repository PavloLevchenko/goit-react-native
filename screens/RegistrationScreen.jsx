import { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { useTranslation } from "react-i18next";
import { ScreenTemplate } from "./ScreenTemplate";

import {
  RegistrationContainer,
  Avatar,
  Title,
  RegistrationInput,
  PasswordInput,
  TextButton,
  Link,
} from "../components";
import { metrics } from "../theme";

export const RegistrationScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { t } = useTranslation();

  const nameHandler = (text) => setName(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const onRegistration = () => {
    Alert.alert(t("Credentials"), `${name}+ ${email} + ${password}`);
  };

  return (
    <ScreenTemplate>
      <RegistrationContainer style={styles.container}>
        <Avatar />
        <Title>{t("Registration")}</Title>
        <View style={styles.inputContainer}>
          <RegistrationInput
            value={name}
            onChangeText={nameHandler}
            placeholder={t("Login")}
          />
          <RegistrationInput
            value={email}
            onChangeText={emailHandler}
            placeholder={t("Email")}
            style={styles.inputGap}
          />
          <PasswordInput
            value={password}
            onChangeText={passwordHandler}
            placeholder={t("Password")}
            secureTextEntry={true}
            style={styles.inputGap}
          />
        </View>
        <TextButton title={t("Register")} onPress={onRegistration} />
        <Link to={{ screen: "Login" }}>{t("Already_have_an_account")}</Link>
      </RegistrationContainer>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 92,
  },
  inputContainer: {
    marginTop: metrics.sidePadding * 2,
  },
  inputGap: {
    marginTop: metrics.sidePadding,
  },
});
