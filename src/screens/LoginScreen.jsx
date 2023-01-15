import { useState } from "react";
import { StyleSheet, View, Image, Alert } from "react-native";
import { useTranslation } from "react-i18next";
import { ScreenTemplate } from "./ScreenTemplate";
import {
  RegistrationContainer,
  Title,
  RegistrationInput,
  PasswordInput,
  TextButton,
  Link,
} from "../components";
import { metrics } from "../theme";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { t } = useTranslation();

  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const onLogin = () => {
    Alert.alert(t("Credentials"), `${email} + ${password}`);
  };

  return (
    <ScreenTemplate>
      <RegistrationContainer style={styles.container}>
        <Title>{t("Sign_in")}</Title>
        <View style={styles.inputContainer}>
          <RegistrationInput
            value={email}
            onChangeText={emailHandler}
            placeholder={t("Email")}
          />
          <PasswordInput
            value={password}
            onChangeText={passwordHandler}
            placeholder={t("Password")}
            secureTextEntry={true}
            style={styles.inputGap}
          />
        </View>
        <TextButton title={t("Login")} onPress={onLogin} />
        <Link to={{ screen: "Register" }} style={styles.link}>
          {t("Do_not_have_an_account")}
        </Link>
      </RegistrationContainer>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
  },
  inputContainer: {
    marginTop: metrics.sidePadding * 2,
  },
  inputGap: {
    marginTop: metrics.sidePadding,
  },
});
