import * as React from "react";
import { Image, StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const AndroidLarge9 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge9}>
      <Pressable
        style={[styles.carbonuserAvatar, styles.favoritosPosition]}
        onPress={() => navigation.navigate("AndroidLarge10")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/carbonuseravatar.png")}
        />
      </Pressable>
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
        onPress={() => navigation.navigate("AndroidLarge10")}
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
      <Image
        style={[styles.androidLarge9Child, styles.frame811Position]}
        resizeMode="cover"
        source={require("../assets/rectangle-2.png")}
      />
      <Pressable
        style={[styles.favoritos, styles.favoritosPosition]}
        onPress={() => navigation.navigate("AndroidLarge10")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/favoritos.png")}
        />
      </Pressable>
      <Pressable
        style={styles.cuponsUsados}
        onPress={() => navigation.navigate("AndroidLarge10")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/cupons-usados.png")}
        />
      </Pressable>
      <Image
        style={[styles.notificaesIcon, styles.favoritosPosition]}
        resizeMode="cover"
        source={require("../assets/notificaes.png")}
      />
      <View style={styles.rectangleParent}>
        <View style={[styles.instanceChild, styles.iconLayout]} />
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
      <Pressable
        style={styles.login}
        onPress={() => navigation.navigate("AndroidLarge10")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/login.png")}
        />
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
  favoritosPosition: {
    left: 118,
    position: "absolute",
  },
  bxscouponPosition: {
    left: 14,
    position: "absolute",
  },
  frame811Position: {
    height: 102,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  empresas1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_7xl,
  },
  empresasPosition: {
    top: 47,
    position: "absolute",
  },
  carbonuserAvatar: {
    top: 108,
    width: 137,
    height: 126,
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
    left: 0,
  },
  androidLarge9Child: {
    left: 137,
    width: 222,
  },
  favoritos: {
    top: 332,
    width: 135,
    height: 24,
  },
  cuponsUsados: {
    left: 108,
    top: 458,
    width: 236,
    height: 30,
    position: "absolute",
  },
  notificaesIcon: {
    top: 586,
    width: 185,
    height: 31,
  },
  instanceChild: {
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
    color: Color.black,
    width: 138,
    height: 79,
  },
  empresas: {
    left: 33,
  },
  rectangleParent: {
    top: 715,
    width: 360,
    height: 86,
    left: 0,
    position: "absolute",
  },
  carbonuserAvatarFilledAltIcon: {
    top: 719,
    left: 240,
    width: 49,
    height: 44,
    position: "absolute",
  },
  login: {
    left: 139,
    top: 263,
    width: 88,
    height: 22,
    position: "absolute",
  },
  basilnotificationSolidIcon: {
    top: 566,
    left: 19,
    width: 68,
    height: 67,
    position: "absolute",
  },
  androidLarge9: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default AndroidLarge9;
