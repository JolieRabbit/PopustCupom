import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const AndroidLarge11 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge11}>
      <Image
        style={[styles.androidLarge11Child, styles.rectangleParentPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <View style={[styles.rectangleParent, styles.rectangleParentPosition]}>
        <View style={styles.instanceChild} />
        <Pressable
          style={[styles.minhaConta, styles.empresasPosition]}
          onPress={() => navigation.navigate("AndroidLarge9")}
        >
          <Text style={styles.minhaConta1}>Minha Conta</Text>
        </Pressable>
        <Pressable
          style={[styles.empresas, styles.empresasPosition]}
          onPress={() => navigation.navigate("AndroidLarge6")}
        >
          <Text style={[styles.empresas1, styles.cadastroClr]}>Empresas</Text>
        </Pressable>
      </View>
      <Image
        style={styles.carbonuserAvatarFilledAltIcon}
        resizeMode="cover"
        source={require("../assets/carbonuseravatarfilledalt.png")}
      />
      <Text style={[styles.cadastro, styles.cadastroClr]}>CADASTRO</Text>
      <View style={[styles.androidLarge11Item, styles.androidLayout]} />
      <View style={[styles.androidLarge11Inner, styles.androidLayout]} />
      <Text style={[styles.nome, styles.nomeTypo]}>NOME</Text>
      <Image
        style={styles.mdipasswordOutlineIcon}
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
        style={[styles.androidLarge11Child1, styles.androidChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.androidLarge11Child2, styles.androidChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.androidLarge11Child3, styles.androidChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.androidLarge11Child4, styles.androidChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.androidLarge11Child5, styles.androidChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.androidLarge11Child6, styles.androidChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <View style={[styles.rectangleView, styles.androidLayout]} />
      <Image
        style={styles.carbonemailIcon}
        resizeMode="cover"
        source={require("../assets/carbonemail.png")}
      />
      <Text style={[styles.sabrinagmailcom, styles.cadastroClr]}>
        sabrina@gmail.com
      </Text>
      <View style={styles.rectangleGroup}>
        <View style={styles.instanceItem} />
        <Text style={[styles.cadastrar, styles.nomeTypo]}>CADASTRAR</Text>
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
  empresasPosition: {
    top: 47,
    position: "absolute",
  },
  cadastroClr: {
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
  nomeTypo: {
    fontSize: FontSize.size_5xl,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  androidChildLayout: {
    height: 10,
    width: 10,
    top: 443,
    position: "absolute",
  },
  androidLarge11Child: {
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
  minhaConta1: {
    color: Color.lightcoral,
    width: 178,
    height: 38,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_7xl,
  },
  minhaConta: {
    left: 188,
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
  cadastro: {
    top: 151,
    left: 77,
    fontSize: FontSize.size_13xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemibold,
    width: 205,
    height: 45,
    position: "absolute",
  },
  androidLarge11Item: {
    top: 276,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: 1,
    borderStyle: "solid",
  },
  androidLarge11Inner: {
    top: 424,
    borderColor: "#000",
    borderWidth: 1,
    borderStyle: "solid",
  },
  nome: {
    top: 289,
    left: 130,
    width: 174,
    height: 46,
  },
  mdipasswordOutlineIcon: {
    top: 430,
    left: 62,
    width: 42,
    height: 37,
    position: "absolute",
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
  androidLarge11Child1: {
    left: 118,
  },
  androidLarge11Child2: {
    left: 154,
  },
  androidLarge11Child3: {
    left: 173,
  },
  androidLarge11Child4: {
    left: 212,
  },
  androidLarge11Child5: {
    left: 193,
  },
  androidLarge11Child6: {
    left: 230,
  },
  rectangleView: {
    top: 351,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: 1,
    borderStyle: "solid",
  },
  carbonemailIcon: {
    top: 361,
    left: 65,
    width: 32,
    height: 32,
    position: "absolute",
  },
  sabrinagmailcom: {
    top: 364,
    left: 109,
    fontSize: FontSize.size_xl,
    width: 245,
    height: 15,
    fontFamily: FontFamily.interRegular,
    color: Color.black,
    position: "absolute",
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
  cadastrar: {
    height: "58.18%",
    width: "129.21%",
    top: "23.64%",
    left: "22.47%",
  },
  rectangleGroup: {
    top: 525,
    height: 55,
    width: 267,
    left: 47,
    position: "absolute",
  },
  androidLarge11: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default AndroidLarge11;
