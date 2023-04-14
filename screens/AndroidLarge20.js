import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const AndroidLarge20 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge20}>
      <Image
        style={[styles.androidLarge20Child, styles.rectangleViewPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <Text style={[styles.imaginarium, styles.imaginariumTypo]}>
        Imaginarium
      </Text>
      <Pressable
        style={[styles.rectangleParent, styles.rectangleLayout]}
        onPress={() => navigation.navigate("AndroidLarge21")}
      >
        <View style={[styles.instanceChild, styles.instanceChildPosition]} />
        <Text style={styles.descontoPosition}>10% de desconto</Text>
      </Pressable>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.instanceChild, styles.instanceChildPosition]} />
        <Text style={[styles.deDesconto1, styles.descontoPosition]} />
      </View>
      <Pressable
        style={[styles.rectangleContainer, styles.rectangleLayout]}
        onPress={() => navigation.navigate("AndroidLarge21")}
      >
        <View style={[styles.instanceChild, styles.instanceChildPosition]} />
        <Text style={styles.descontoPosition}>15% de desconto</Text>
      </Pressable>
      <Text style={[styles.descontoEmItens, styles.imaginariumTypo]}>
        20% desconto em itens de viagem
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewPosition]}>
        <View style={[styles.instanceChild1, styles.instanceChildPosition]} />
        <Pressable
          style={[styles.minhaConta, styles.empresasPosition]}
          onPress={() => navigation.navigate("AndroidLarge2")}
        >
          <Text style={[styles.minhaConta1, styles.empresas1Typo]}>
            Minha Conta
          </Text>
        </Pressable>
        <Pressable
          style={[styles.empresas, styles.empresasPosition]}
          onPress={() => navigation.navigate("AndroidLarge6")}
        >
          <Text style={[styles.empresas1, styles.empresas1Typo]}>Empresas</Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.carbonuserAvatarFilledAlt}
        onPress={() => navigation.navigate("AndroidLarge2")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/carbonuseravatarfilledalt.png")}
        />
      </Pressable>
      <Image
        style={[styles.download21, styles.download21Position]}
        resizeMode="cover"
        source={require("../assets/download-2-2.png")}
      />
      <Image
        style={[
          styles.materialSymbolsheartPlusOuIcon,
          styles.download21Position,
        ]}
        resizeMode="cover"
        source={require("../assets/materialsymbolsheartplusoutline.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  imaginariumTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_11xl,
    color: Color.black,
    position: "absolute",
  },
  rectangleLayout: {
    height: 70,
    width: 310,
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
  empresasPosition: {
    top: 47,
    position: "absolute",
  },
  empresas1Typo: {
    fontSize: FontSize.size_7xl,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  download21Position: {
    top: 153,
    position: "absolute",
  },
  androidLarge20Child: {
    height: 102,
    top: 0,
    left: 0,
  },
  imaginarium: {
    top: 214,
    left: 184,
    width: 176,
    height: 77,
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
  descontoEmItens: {
    top: 497,
    left: 57,
    width: 286,
    height: 82,
  },
  instanceChild1: {
    backgroundColor: Color.mediumturquoise,
  },
  minhaConta1: {
    color: Color.lightcoral,
    width: 178,
    height: 38,
  },
  minhaConta: {
    left: 188,
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
  icon: {
    height: "100%",
    width: "100%",
  },
  carbonuserAvatarFilledAlt: {
    left: 238,
    top: 717,
    width: 49,
    height: 44,
    position: "absolute",
  },
  download21: {
    left: 8,
    width: 168,
    height: 158,
  },
  materialSymbolsheartPlusOuIcon: {
    left: 297,
    width: 42,
    height: 40,
  },
  androidLarge20: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default AndroidLarge20;
