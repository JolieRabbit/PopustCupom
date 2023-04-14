import * as React from "react";
import { Image, StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const AndroidLarge8 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge8}>
      <Image
        style={[styles.androidLarge8Child, styles.rectangleParentPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <Pressable
        style={[styles.materialSymbolsarrowBackIo, styles.download51Position]}
        onPress={() => navigation.navigate("AndroidLarge2")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/materialsymbolsarrowbackiosnew.png")}
        />
      </Pressable>
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
          <Text style={[styles.empresas1, styles.empresas1Clr]}>Empresas</Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.carbonuserAvatarFilledAlt}
        onPress={() => navigation.navigate("AndroidLarge2")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/carbonuseravatarfilledalt.png")}
        />
      </Pressable>
      <Text style={[styles.favoritos, styles.favoritosPosition]}>
        Favoritos
      </Text>
      <Image
        style={[styles.simpleOrganicLogo1Icon, styles.favoritosPosition]}
        resizeMode="cover"
        source={require("../assets/simple-organic-logo-11.png")}
      />
      <Image
        style={styles.icon2}
        resizeMode="cover"
        source={require("../assets/100935-11.png")}
      />
      <Image
        style={[styles.download51, styles.download51Position]}
        resizeMode="cover"
        source={require("../assets/download-5-11.png")}
      />
      <Text style={[styles.simpleOrganic, styles.caTypo]}>Simple Organic</Text>
      <Text style={[styles.ca, styles.caTypo]}>{`C&A`}</Text>
      <Text style={[styles.pocaCosmeticos, styles.caTypo]}>
        Época Cosmeticos
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleParentPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  download51Position: {
    left: 14,
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
  empresas1Clr: {
    color: Color.black,
    textAlign: "left",
  },
  favoritosPosition: {
    left: 16,
    position: "absolute",
  },
  caTypo: {
    left: 160,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_7xl,
    position: "absolute",
  },
  androidLarge8Child: {
    top: 0,
    height: 102,
  },
  materialSymbolsarrowBackIo: {
    top: 36,
    width: 44,
    height: 39,
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
    fontFamily: FontFamily.interRegular,
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
  carbonuserAvatarFilledAlt: {
    left: 238,
    top: 717,
    width: 49,
    height: 44,
    position: "absolute",
  },
  favoritos: {
    top: 123,
    fontSize: FontSize.size_13xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemibold,
    width: 162,
    height: 45,
    color: Color.black,
    textAlign: "left",
  },
  simpleOrganicLogo1Icon: {
    top: 452,
    width: 98,
    height: 78,
  },
  icon2: {
    top: 333,
    left: 12,
    width: 108,
    height: 91,
    position: "absolute",
  },
  download51: {
    top: 215,
    width: 100,
    height: 85,
  },
  simpleOrganic: {
    top: 466,
    width: 114,
    height: 48,
  },
  ca: {
    top: 233,
    width: 101,
    height: 46,
  },
  pocaCosmeticos: {
    top: 345,
    width: 158,
    height: 71,
  },
  androidLarge8: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default AndroidLarge8;
