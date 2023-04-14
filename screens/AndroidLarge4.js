import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const AndroidLarge4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge4}>
      <Image
        style={[
          styles.materialSymbolsheartPlusOuIcon,
          styles.image1Americanas1Position,
        ]}
        resizeMode="cover"
        source={require("../assets/materialsymbolsheartplusoutline.png")}
      />
      <Image
        style={[styles.androidLarge4Child, styles.androidPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <Image
        style={[styles.image1Americanas1, styles.image1Americanas1Position]}
        resizeMode="cover"
        source={require("../assets/image-1-americanas-1.png")}
      />
      <Text style={[styles.lojasAmericanas, styles.lojasTypo]}>
        Lojas Americanas
      </Text>
      <Pressable
        style={styles.rectangleParent}
        onPress={() => navigation.navigate("AndroidLarge4")}
      >
        <View style={[styles.instanceChild, styles.instanceChildPosition]} />
        <Text style={styles.descontoPosition}>FELIZPASCOAto</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.rectanglePosition]}
        onPress={() => navigation.navigate("AndroidLarge4")}
      >
        <View style={[styles.instanceChild, styles.instanceChildPosition]} />
        <Text style={[styles.deDesconto1, styles.descontoPosition]} />
      </Pressable>
      <Pressable
        style={[styles.rectangleContainer, styles.rectanglePosition]}
        onPress={() => navigation.navigate("AndroidLarge4")}
      >
        <View style={[styles.instanceChild, styles.instanceChildPosition]} />
        <Text style={styles.descontoPosition}>15% de desconto</Text>
      </Pressable>
      <Text style={[styles.descontoEmOvos, styles.funcionouPosition]}>
        20% desconto em ovos de páscoa
      </Text>
      <View style={[styles.rectangleView, styles.androidPosition]}>
        <View style={[styles.instanceChild1, styles.instanceChildPosition]} />
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
      <View style={[styles.androidLarge4Item, styles.androidPosition]} />
      <View style={styles.vectorParent}>
        <Image
          style={[styles.componentChild, styles.instanceChildPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-8.png")}
        />
        <Image
          style={[styles.image1Americanas2, styles.empresasPosition]}
          resizeMode="cover"
          source={require("../assets/image-1-americanas-2.png")}
        />
        <Text style={[styles.lojasAmericanas1, styles.lojasTypo]}>
          Lojas Americanas
        </Text>
        <View style={[styles.componentItem, styles.componentPosition]} />
        <Text style={[styles.felizpascoa, styles.copiarTypo]}>FELIZPASCOA</Text>
        <Pressable
          style={styles.phxSquareThin}
          onPress={() => navigation.navigate("AndroidLarge3")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/phxsquarethin.png")}
          />
        </Pressable>
        <View style={[styles.componentInner, styles.componentPosition]} />
        <Text style={[styles.copiar, styles.copiarTypo]}>COPIAR</Text>
        <View style={[styles.componentChild1, styles.componentBorder]} />
        <Text style={[styles.funcionou, styles.funcionouPosition]}>
          Funcionou
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image1Americanas1Position: {
    top: 147,
    position: "absolute",
  },
  androidPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  lojasTypo: {
    height: 29,
    width: 201,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_11xl,
    position: "absolute",
  },
  instanceChildPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  rectanglePosition: {
    left: 32,
    height: 70,
    width: 310,
    position: "absolute",
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
  funcionouPosition: {
    left: 57,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  empresas1Typo: {
    fontSize: FontSize.size_7xl,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  empresasPosition: {
    left: 33,
    position: "absolute",
  },
  componentPosition: {
    width: 245,
    left: 42,
    position: "absolute",
  },
  copiarTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.black,
    fontSize: FontSize.size_11xl,
    position: "absolute",
  },
  componentBorder: {
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
  },
  materialSymbolsheartPlusOuIcon: {
    left: 306,
    width: 42,
    height: 40,
  },
  androidLarge4Child: {
    height: 102,
    top: 0,
    left: 0,
  },
  image1Americanas1: {
    left: 11,
    width: 164,
    height: 162,
  },
  lojasAmericanas: {
    top: 179,
    left: 184,
  },
  instanceChild: {
    backgroundColor: Color.coral_100,
  },
  rectangleParent: {
    top: 386,
    left: 29,
    height: 70,
    width: 310,
    position: "absolute",
  },
  deDesconto1: {
    display: "none",
  },
  rectangleGroup: {
    top: 517,
  },
  rectangleContainer: {
    top: 615,
  },
  descontoEmOvos: {
    width: 265,
    height: 82,
    top: 517,
    fontSize: FontSize.size_11xl,
    left: 57,
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
    top: 47,
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
  androidLarge4Item: {
    top: 2,
    backgroundColor: Color.gainsboro,
    height: 798,
  },
  componentChild: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  image1Americanas2: {
    top: 41,
    width: 88,
    height: 82,
  },
  lojasAmericanas1: {
    top: 43,
    left: 142,
  },
  componentItem: {
    top: 158,
    height: 56,
    backgroundColor: Color.coral_100,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 245,
    left: 42,
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
  componentInner: {
    top: 229,
    backgroundColor: Color.coral_200,
    height: 35,
  },
  copiar: {
    top: 228,
    left: 106,
  },
  componentChild1: {
    top: 278,
    left: 46,
    width: 127,
    height: 30,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  funcionou: {
    top: 282,
    fontSize: FontSize.size_xl,
    width: 186,
    height: 40,
  },
  vectorParent: {
    top: 271,
    left: 19,
    width: 323,
    height: 328,
    position: "absolute",
  },
  androidLarge4: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.white,
  },
});

export default AndroidLarge4;
