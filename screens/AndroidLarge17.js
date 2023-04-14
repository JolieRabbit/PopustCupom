import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const AndroidLarge17 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge17}>
      <Image
        style={[styles.androidLarge17Child, styles.androidPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <Text style={[styles.ca, styles.caTypo]}>{`C&A`}</Text>
      <Pressable
        style={[styles.rectangleParent, styles.rectangleLayout]}
        onPress={() => navigation.navigate("AndroidLarge4")}
      >
        <View style={[styles.instanceChild, styles.instanceChildPosition1]} />
        <Text style={styles.descontoPosition}>10% de desconto</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.rectangleLayout]}
        onPress={() => navigation.navigate("AndroidLarge4")}
      >
        <View style={[styles.instanceChild, styles.instanceChildPosition1]} />
        <Text style={[styles.deDesconto1, styles.descontoPosition]} />
      </Pressable>
      <Pressable
        style={[styles.rectangleContainer, styles.rectangleLayout]}
        onPress={() => navigation.navigate("AndroidLarge4")}
      >
        <View style={[styles.instanceChild, styles.instanceChildPosition1]} />
        <Text style={styles.descontoPosition}>15% de desconto</Text>
      </Pressable>
      <Text style={[styles.descontoEmMoveis, styles.download52Layout]}>
        20% desconto em moveis de madeira
      </Text>
      <View style={[styles.rectangleView, styles.androidPosition]}>
        <View style={[styles.instanceChild1, styles.instanceChildPosition1]} />
        <Text style={[styles.minhaConta, styles.empresas1Typo]}>
          Minha Conta
        </Text>
        <Pressable
          style={[styles.empresas, styles.empresasPosition]}
          onPress={() => navigation.navigate("AndroidLarge6")}
        >
          <Text style={[styles.empresas1, styles.empresas1Typo]}>Empresas</Text>
        </Pressable>
      </View>
      <Image
        style={styles.carbonuserAvatarFilledAltIcon}
        resizeMode="cover"
        source={require("../assets/carbonuseravatarfilledalt.png")}
      />
      <Image
        style={styles.download51}
        resizeMode="cover"
        source={require("../assets/download-5-1.png")}
      />
      <View style={[styles.androidLarge17Item, styles.androidPosition]} />
      <View style={styles.vectorParent}>
        <Image
          style={[styles.rectangleIcon, styles.instanceChildPosition1]}
          resizeMode="cover"
          source={require("../assets/rectangle-8.png")}
        />
        <Image
          style={[styles.image1Americanas2, styles.download52Layout]}
          resizeMode="cover"
          source={require("../assets/image-1-americanas-2.png")}
        />
        <Text style={[styles.lojasAmericanas, styles.caTypo]}>{`C&A`}</Text>
        <View style={[styles.instanceChild2, styles.instanceChildPosition]} />
        <Text style={[styles.felizpascoa, styles.caTypo]}> MADEIRA</Text>
        <Pressable
          style={styles.phxSquareThin}
          onPress={() => navigation.navigate("AndroidLarge16")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/phxsquarethin.png")}
          />
        </Pressable>
        <View style={[styles.instanceChild3, styles.instanceChildPosition]} />
        <Text style={[styles.copiar, styles.caTypo]}>COPIAR</Text>
        <View style={[styles.instanceChild4, styles.instanceChildBorder]} />
        <Text style={[styles.funcionou, styles.funcionouTypo]}>Funcionou</Text>
      </View>
      <Image
        style={[styles.download52, styles.download52Layout]}
        resizeMode="cover"
        source={require("../assets/download-5-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  androidPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  caTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.black,
    fontSize: FontSize.size_11xl,
    position: "absolute",
  },
  rectangleLayout: {
    height: 70,
    width: 310,
    position: "absolute",
  },
  instanceChildPosition1: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  descontoPosition: {
    height: 72,
    width: 206,
    left: 89,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_11xl,
    top: 0,
    position: "absolute",
  },
  download52Layout: {
    height: 82,
    position: "absolute",
  },
  empresas1Typo: {
    fontSize: FontSize.size_7xl,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  empresasPosition: {
    top: 47,
    position: "absolute",
  },
  instanceChildPosition: {
    width: 245,
    left: 42,
    position: "absolute",
  },
  instanceChildBorder: {
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
  },
  funcionouTypo: {
    left: 57,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
  },
  androidLarge17Child: {
    height: 102,
    top: 0,
    left: 0,
  },
  ca: {
    top: 202,
    left: 200,
    width: 235,
    height: 54,
  },
  instanceChild: {
    backgroundColor: Color.coral_100,
  },
  rectangleParent: {
    top: 381,
    left: 29,
  },
  deDesconto1: {
    display: "none",
  },
  rectangleGroup: {
    top: 499,
    left: 33,
  },
  rectangleContainer: {
    top: 617,
    left: 33,
  },
  descontoEmMoveis: {
    top: 497,
    width: 286,
    left: 57,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_11xl,
    height: 82,
  },
  instanceChild1: {
    backgroundColor: Color.mediumturquoise,
  },
  minhaConta: {
    left: 188,
    color: Color.lightcoral,
    width: 178,
    height: 38,
    top: 47,
    position: "absolute",
  },
  empresas1: {
    width: 138,
    height: 79,
    color: Color.black,
    fontSize: FontSize.size_7xl,
  },
  empresas: {
    left: 33,
  },
  rectangleView: {
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
  download51: {
    top: 154,
    left: 13,
    width: 171,
    height: 145,
    position: "absolute",
  },
  androidLarge17Item: {
    backgroundColor: Color.gainsboro,
    height: 798,
    top: 0,
    left: 0,
  },
  rectangleIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  image1Americanas2: {
    top: 41,
    width: 88,
    display: "none",
    left: 33,
  },
  lojasAmericanas: {
    top: 43,
    left: 142,
    width: 201,
    height: 29,
  },
  instanceChild2: {
    top: 158,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 56,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    backgroundColor: Color.coral_100,
  },
  felizpascoa: {
    top: 171,
    left: 67,
    width: 212,
    height: 43,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  phxSquareThin: {
    left: 257,
    top: 15,
    width: 48,
    height: 45,
    position: "absolute",
  },
  instanceChild3: {
    top: 229,
    backgroundColor: Color.coral_200,
    height: 35,
  },
  copiar: {
    top: 228,
    left: 106,
  },
  instanceChild4: {
    top: 278,
    left: 46,
    width: 127,
    height: 30,
    position: "absolute",
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
  },
  funcionou: {
    top: 282,
    fontSize: FontSize.size_xl,
    width: 186,
    height: 40,
    position: "absolute",
  },
  vectorParent: {
    top: 268,
    left: 22,
    width: 323,
    height: 328,
    position: "absolute",
  },
  download52: {
    top: 299,
    left: 50,
    width: 96,
  },
  androidLarge17: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default AndroidLarge17;
