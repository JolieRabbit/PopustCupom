import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const AndroidLarge13 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge13}>
      <Image
        style={[styles.androidLarge13Child, styles.rectangleParentPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-11.png")}
      />
      <View style={[styles.rectangleParent, styles.rectangleParentPosition]}>
        <View style={[styles.instanceChild, styles.iconLayout]} />
        <Pressable
          style={[styles.minhaConta, styles.empresasPosition]}
          onPress={() => navigation.navigate("AndroidLarge2")}
        >
          <Text style={styles.minhaConta1}>Minha Conta</Text>
        </Pressable>
        <Pressable
          style={[styles.empresas, styles.empresasPosition]}
          onPress={() => navigation.navigate("AndroidLarge6")}
        >
          <Text style={[styles.empresas1, styles.vocNoTemTypo]}>Empresas</Text>
        </Pressable>
      </View>
      <Image
        style={styles.carbonuserAvatarFilledAltIcon}
        resizeMode="cover"
        source={require("../assets/carbonuseravatarfilledalt.png")}
      />
      <Text
        style={[styles.vocNoTem, styles.vocNoTemPosition]}
      >{`Você não tem nenhum cupom
 usado.`}</Text>
      <Pressable
        style={[styles.materialSymbolsarrowBackIo, styles.vocNoTemPosition]}
        onPress={() => navigation.navigate("AndroidLarge2")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/materialsymbolsarrowbackiosnew.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleParentPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  empresasPosition: {
    top: 47,
    position: "absolute",
  },
  vocNoTemTypo: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  vocNoTemPosition: {
    left: 23,
    position: "absolute",
  },
  androidLarge13Child: {
    top: 0,
    height: 102,
  },
  instanceChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.mediumturquoise,
    position: "absolute",
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
    fontSize: FontSize.size_7xl,
    color: Color.black,
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
  vocNoTem: {
    top: 134,
    fontSize: 22,
    width: 384,
    height: 186,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  materialSymbolsarrowBackIo: {
    top: 37,
    width: 44,
    height: 39,
  },
  androidLarge13: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default AndroidLarge13;
