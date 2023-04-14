import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const AndroidLarge2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge2}>
      <View style={[styles.androidLarge2Child, styles.frame811Layout]} />
      <Pressable
        style={[styles.bxscoupon, styles.bxscouponPosition]}
        onPress={() => navigation.navigate("AndroidLarge13")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/bxscoupon.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.mdicardsHeart, styles.bxscouponPosition]}
        onPress={() => navigation.navigate("AndroidLarge8")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/mdicardsheart.png")}
        />
      </Pressable>
      <Image
        style={[styles.frame811, styles.frame811Position]}
        resizeMode="cover"
        source={require("../assets/frame-8-1-1.png")}
      />
      <Pressable
        style={[styles.favoritos, styles.favoritosPosition]}
        onPress={() => navigation.navigate("AndroidLarge8")}
      >
        <Text style={[styles.favoritos1, styles.olSabrinaFlexBox]}>
          Favoritos
        </Text>
      </Pressable>
      <Pressable
        style={styles.cuponsUsados}
        onPress={() => navigation.navigate("AndroidLarge13")}
      >
        <Text style={[styles.cuponsUsados1, styles.olSabrinaFlexBox]}>
          Cupons Usados
        </Text>
      </Pressable>
      <Text style={[styles.notificaes, styles.olSabrinaFlexBox]}>
        Notificações
      </Text>
      <View style={[styles.rectangleParent, styles.frame811Position]}>
        <View style={[styles.componentChild, styles.iconLayout]} />
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
        style={styles.frameIcon}
        resizeMode="cover"
        source={require("../assets/frame.png")}
      />
      <Image
        style={styles.carbonuserAvatarFilledAltIcon}
        resizeMode="cover"
        source={require("../assets/carbonuseravatarfilledalt.png")}
      />
      <Text style={[styles.olSabrina, styles.olSabrinaFlexBox]}>
        Olá Sabrina
      </Text>
      <Pressable
        style={styles.sairDaMinhaContainer}
        onPress={() => navigation.navigate("AndroidLarge10")}
      >
        <Text style={[styles.sairDaMinhaConta, styles.olSabrinaFlexBox]}>
          Sair da minha conta
        </Text>
      </Pressable>
      <Image
        style={styles.basilnotificationSolidIcon}
        resizeMode="cover"
        source={require("../assets/basilnotificationsolid.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frame811Layout: {
    height: 102,
    top: 0,
  },
  bxscouponPosition: {
    left: 14,
    position: "absolute",
  },
  frame811Position: {
    left: 0,
    position: "absolute",
  },
  favoritosPosition: {
    left: 115,
    position: "absolute",
  },
  olSabrinaFlexBox: {
    textAlign: "left",
    color: Color.black,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
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
  androidLarge2Child: {
    width: 228,
    backgroundColor: Color.mediumturquoise,
    position: "absolute",
    left: 131,
  },
  bxscoupon: {
    top: 450,
    width: 70,
    height: 64,
  },
  mdicardsHeart: {
    top: 318,
    width: 64,
    height: 58,
  },
  frame811: {
    width: 147,
    height: 102,
    top: 0,
  },
  favoritos1: {
    width: 162,
    height: 45,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    fontSize: FontSize.size_13xl,
  },
  favoritos: {
    top: 325,
  },
  cuponsUsados1: {
    width: 268,
    height: 37,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    fontSize: FontSize.size_13xl,
  },
  cuponsUsados: {
    left: 106,
    top: 451,
    position: "absolute",
  },
  notificaes: {
    top: 579,
    width: 218,
    height: 46,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    fontSize: FontSize.size_13xl,
    left: 115,
    position: "absolute",
  },
  componentChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.mediumturquoise,
    position: "absolute",
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
  rectangleParent: {
    top: 715,
    width: 360,
    height: 86,
  },
  frameIcon: {
    top: 135,
    width: 101,
    height: 101,
    left: 131,
    position: "absolute",
    overflow: "hidden",
  },
  carbonuserAvatarFilledAltIcon: {
    top: 719,
    left: 240,
    width: 49,
    height: 44,
    position: "absolute",
  },
  olSabrina: {
    top: 252,
    left: 100,
    fontSize: FontSize.size_11xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemibold,
    width: 186,
    height: 42,
    position: "absolute",
  },
  sairDaMinhaConta: {
    fontSize: 27,
    textDecoration: "underline",
    width: 292,
    height: 34,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  sairDaMinhaContainer: {
    left: 70,
    top: 659,
    position: "absolute",
  },
  basilnotificationSolidIcon: {
    top: 568,
    left: 19,
    width: 68,
    height: 67,
    position: "absolute",
  },
  androidLarge2: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default AndroidLarge2;
