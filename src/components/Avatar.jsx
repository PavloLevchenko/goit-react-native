import { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { AddAvatarButton } from "./AddAvatarButton";
import { colors, metrics } from "../theme";
import photo from "../assets/images/example_photo.jpg";

export const Avatar = () => {
  const [image, setImage] = useState(null);
  return (
    <View style={styles.imageContainer}>
      <AddAvatarButton
        onPress={() => (image ? setImage(null) : setImage(photo))}
        title={"+"}
      ></AddAvatarButton>
      <Image source={image} resizeMode="cover" style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: colors.inputBg,
    borderRadius: metrics.sidePadding,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: metrics.sidePadding,
    resizeMode: "cover",
  },
});
