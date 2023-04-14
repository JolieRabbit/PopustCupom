import * as React from "react";
import { StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const AndroidLarge1 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.androidLarge1}
      onPress={() => navigation.navigate("AndroidLarge9")}
    >
      <View style={styles.androidLarge1Child} />
      <Image
        style={styles.frame812}
        resizeMode="cover"
        source={require("../assets/frame-8-1-2.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  androidLarge1Child: {
    top: 0,
    left: 0,
    backgroundColor: Color.mediumturquoise,
    width: 360,
    position: "absolute",
    height: 800,
  },
  frame812: {
    marginTop: -91,
    marginLeft: -79,
    top: "50%",
    left: "50%",
    width: 157,
    height: 157,
    position: "absolute",
  },
  androidLarge1: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default AndroidLarge1;
