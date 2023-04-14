import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const AndroidLarge10 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge10}>
      <Image
        style={[styles.androidLarge10Child, styles.rectangleParentPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <View style={[styles.rectangleParent, styles.rectangleParentPosition]}>
        <View style={styles.instanceChild} />
        <Text style={styles.minhaConta}>Minha Conta</Text>
        <Pressable
          style={styles.empresas}
          onPress={() => navigation.navigate("AndroidLarge6")}
        >
          <Text style={[styles.empresas1, styles.loginClr]}>Empresas</Text>
        </Pressable>
      </View>
      <Image
        style={styles.carbonuserAvatarFilledAltIcon}
        resizeMode="cover"
        source={require("../assets/carbonuseravatarfilledalt.png")}
      />
      <Text style={[styles.login, styles.loginClr]}>LOGIN</Text>
      <View style={[styles.androidLarge10Item, styles.androidLayout]} />
      <View style={[styles.androidLarge10Inner, styles.androidLayout]} />
      <Text style={[styles.usuario, styles.entrarTypo]}>USUARIO</Text>
      <Image
        style={[
          styles.mdipasswordOutlineIcon,
          styles.noTemContaContainerPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/mdipasswordoutline.png")}
      />
      <Image
        style={styles.oouiuserAvatarOutlineIcon}
        resizeMode="cover"
        source={require("../assets/oouiuseravataroutline.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.androidChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.androidLarge10Child1, styles.androidChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.androidLarge10Child2, styles.androidChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.androidLarge10Child3, styles.androidChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.androidLarge10Child4, styles.androidChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.androidLarge10Child5, styles.androidChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.androidLarge10Child6, styles.androidChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Pressable
        style={[styles.noTemContaContainer, styles.noTemContaContainerPosition]}
        onPress={() => navigation.navigate("AndroidLarge11")}
      >
        <Text style={[styles.noTemContaCadastreSe, styles.loginClr]}>
          Não tem conta? Cadastre-se
        </Text>
      </Pressable>
      <View style={styles.rectangleGroup}>
        <View style={styles.instanceItem} />
        <Text style={[styles.entrar, styles.entrarTypo]}>ENTRAR</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleParentPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  loginClr: {
    color: Color.black,
    textAlign: "left",
  },
  androidLayout: {
    height: 52,
    borderWidth: 1,
    borderStyle: "solid",
    width: 267,
    borderRadius: Border.br_xl,
    left: 47,
    position: "absolute",
    backgroundColor: Color.white,
  },
  entrarTypo: {
    fontSize: FontSize.size_5xl,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  noTemContaContainerPosition: {
    left: 62,
    position: "absolute",
  },
  androidChildLayout: {
    height: 10,
    width: 10,
    top: 397,
    position: "absolute",
  },
  androidLarge10Child: {
    top: 0,
    height: 102,
  },
  instanceChild: {
    height: "100%",
    bottom: "0%",
    backgroundColor: Color.mediumturquoise,
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  minhaConta: {
    left: 188,
    color: Color.lightcoral,
    width: 178,
    height: 38,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_7xl,
    top: 47,
    position: "absolute",
  },
  empresas1: {
    width: 138,
    height: 79,
    fontFamily: FontFamily.interRegular,
    color: Color.black,
    fontSize: FontSize.size_7xl,
  },
  empresas: {
    left: 33,
    top: 47,
    position: "absolute",
  },
  rectangleParent: {
    top: 712,
    height: 86,
  },
  carbonuserAvatarFilledAltIcon: {
    top: 717,
    left: 238,
    width: 49,
    height: 44,
    position: "absolute",
  },
  login: {
    top: 153,
    left: 125,
    fontSize: FontSize.size_13xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemibold,
    width: 162,
    height: 45,
    position: "absolute",
  },
  androidLarge10Item: {
    top: 276,
    borderColor: "rgba(0, 0, 0, 0.2)",
  },
  androidLarge10Inner: {
    top: 374,
    borderColor: "#000",
  },
  usuario: {
    top: 289,
    left: 130,
    width: 174,
    height: 46,
  },
  mdipasswordOutlineIcon: {
    top: 381,
    width: 42,
    height: 37,
  },
  oouiuserAvatarOutlineIcon: {
    top: 281,
    left: 69,
    width: 33,
    height: 34,
    position: "absolute",
  },
  ellipseIcon: {
    left: 136,
  },
  androidLarge10Child1: {
    left: 118,
  },
  androidLarge10Child2: {
    left: 154,
  },
  androidLarge10Child3: {
    left: 173,
  },
  androidLarge10Child4: {
    left: 208,
  },
  androidLarge10Child5: {
    left: 191,
  },
  androidLarge10Child6: {
    left: 227,
  },
  noTemContaCadastreSe: {
    fontSize: 18,
    lineHeight: 12,
    width: 260,
    height: 48,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    fontFamily: FontFamily.interRegular,
    color: Color.black,
  },
  noTemContaContainer: {
    top: 439,
  },
  instanceItem: {
    height: "98.18%",
    bottom: "1.82%",
    backgroundColor: Color.coral_100,
    borderRadius: Border.br_xl,
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  entrar: {
    height: "74.55%",
    width: "41.95%",
    top: "25.45%",
    left: "33.33%",
  },
  rectangleGroup: {
    top: 523,
    height: 55,
    width: 267,
    left: 47,
    position: "absolute",
  },
  androidLarge10: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default AndroidLarge10;
