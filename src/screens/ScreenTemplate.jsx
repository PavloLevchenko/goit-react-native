import {
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";

export const ScreenTemplate = ({ children }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ImageBackground
        resizeMode="cover"
        source={require("../assets/images/background.jpg")}
        style={styles.image}
      />
      {children}
    </KeyboardAvoidingView>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    fontFamily: "Roboto",
    color: "#212121",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});
