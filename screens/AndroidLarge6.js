import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const AndroidLarge6 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge6}>
      <Image
        style={[styles.androidLarge6Child, styles.rectangleParentPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-12.png")}
      />
      <Image
        style={[
          styles.materialSymbolsarrowBackIoIcon,
          styles.rectangleContainerPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/materialsymbolsarrowbackiosnew1.png")}
      />
      <View style={[styles.rectangleParent, styles.rectangleParentPosition]}>
        <View style={[styles.instanceChild, styles.instanceChildPosition]} />
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
          source={require("../assets/carbonuseravatarfilledalt1.png")}
        />
      </Pressable>
      <View style={styles.rectangleGroup}>
        <View style={[styles.componentChild, styles.instanceChildPosition]} />
        <Pressable
          style={[styles.image1Americanas1, styles.download51Layout]}
          onPress={() => navigation.navigate("AndroidLarge3")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/image-1-americanas-11.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.lojasAmericanas, styles.americanasPosition]}
          onPress={() => navigation.navigate("AndroidLarge3")}
        >
          <Text style={[styles.lojasAmericanas1, styles.empresas1Typo]}>
            Lojas Americanas
          </Text>
        </Pressable>
        <Pressable
          style={[styles.download2CasasBahia1, styles.casasPosition]}
          onPress={() => navigation.navigate("AndroidLarge7")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/download-2-casas-bahia-11.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.casasBahia, styles.casasPosition]}
          onPress={() => navigation.navigate("AndroidLarge7")}
        >
          <Text style={[styles.casasBahia1, styles.ca1Typo]}>Casas Bahia</Text>
        </Pressable>
        <Pressable
          style={[styles.download51, styles.download51Layout]}
          onPress={() => navigation.navigate("AndroidLarge16")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/download-5-11.png")}
          />
        </Pressable>
        <Pressable
          style={styles.ca}
          onPress={() => navigation.navigate("AndroidLarge16")}
        >
          <Text style={[styles.ca1, styles.ca1Typo]}>{`C&A`}</Text>
        </Pressable>
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("AndroidLarge18")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/100935-11.png")}
          />
        </Pressable>
        <Pressable
          style={styles.pocaCosmeticos}
          onPress={() => navigation.navigate("AndroidLarge18")}
        >
          <Text style={[styles.pocaCosmeticos1, styles.empresas1Typo]}>
            Época Cosmeticos
          </Text>
        </Pressable>
        <Pressable
          style={[styles.download21, styles.downloadLayout]}
          onPress={() => navigation.navigate("AndroidLarge20")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/download-2-11.png")}
          />
        </Pressable>
        <Pressable
          style={styles.imaginarium}
          onPress={() => navigation.navigate("AndroidLarge20")}
        >
          <Text style={[styles.imaginarium1, styles.sallve1Typo]}>
            Imaginarium
          </Text>
        </Pressable>
        <Pressable
          style={[styles.download41, styles.downloadLayout]}
          onPress={() => navigation.navigate("AndroidLarge22")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/download-4-11.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.download31, styles.download31Layout]}
          onPress={() => navigation.navigate("AndroidLarge24")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/download-3-11.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.simpleOrganicLogo1, styles.download31Layout]}
          onPress={() => navigation.navigate("AndroidLarge26")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/simple-organic-logo-11.png")}
          />
        </Pressable>
        <Pressable
          style={styles.principia}
          onPress={() => navigation.navigate("AndroidLarge22")}
        >
          <Text style={[styles.principia1, styles.empresas1Typo]}>
            Principia
          </Text>
        </Pressable>
        <Pressable
          style={[styles.sallve, styles.sallvePosition]}
          onPress={() => navigation.navigate("AndroidLarge24")}
        >
          <Text style={[styles.sallve1, styles.sallve1Typo]}>Sallve</Text>
        </Pressable>
        <Pressable
          style={[styles.simpleOrganic, styles.sallvePosition]}
          onPress={() => navigation.navigate("AndroidLarge26")}
        >
          <Text style={[styles.simpleOrganic1, styles.empresas1Typo]}>
            Simple Organic
          </Text>
        </Pressable>
      </View>
      <View
        style={[styles.rectangleContainer, styles.rectangleContainerPosition]}
      >
        <View style={[styles.instanceItem, styles.instanceChildPosition]} />
        <Image
          style={styles.mdisearchIcon}
          resizeMode="cover"
          source={require("../assets/mdisearch.png")}
        />
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
  rectangleContainerPosition: {
    top: 33,
    position: "absolute",
  },
  instanceChildPosition: {
    left: "0%",
    position: "absolute",
  },
  empresasPosition: {
    top: 47,
    position: "absolute",
  },
  empresas1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_7xl,
  },
  download51Layout: {
    width: 100,
    left: 40,
  },
  americanasPosition: {
    top: 53,
    position: "absolute",
  },
  casasPosition: {
    top: 182,
    position: "absolute",
  },
  ca1Typo: {
    height: 46,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_7xl,
  },
  downloadLayout: {
    height: 94,
    width: 100,
    left: 40,
    position: "absolute",
  },
  sallve1Typo: {
    height: 51,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_7xl,
  },
  download31Layout: {
    width: 98,
    position: "absolute",
  },
  sallvePosition: {
    left: 191,
    position: "absolute",
  },
  androidLarge6Child: {
    top: 0,
    height: 102,
  },
  materialSymbolsarrowBackIoIcon: {
    left: 15,
    width: 52,
    height: 42,
    display: "none",
  },
  instanceChild: {
    backgroundColor: Color.mediumturquoise,
    bottom: "0%",
    right: "0%",
    top: "0%",
    left: "0%",
    height: "100%",
    width: "100%",
  },
  minhaConta1: {
    width: 178,
    height: 38,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_7xl,
  },
  minhaConta: {
    left: 188,
  },
  empresas1: {
    color: Color.lightcoral,
    width: 138,
    height: 79,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_7xl,
  },
  empresas: {
    left: 33,
  },
  rectangleParent: {
    top: 717,
    height: 86,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  carbonuserAvatarFilledAlt: {
    left: 244,
    top: 722,
    width: 49,
    height: 44,
    position: "absolute",
  },
  componentChild: {
    bottom: "0%",
    right: "0%",
    top: "0%",
    left: "0%",
    height: "100%",
    width: "100%",
    backgroundColor: Color.white,
  },
  image1Americanas1: {
    height: 83,
    top: 53,
    position: "absolute",
  },
  lojasAmericanas1: {
    width: 201,
    height: 29,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_7xl,
  },
  lojasAmericanas: {
    left: 180,
  },
  download2CasasBahia1: {
    height: 82,
    width: 100,
    left: 40,
  },
  casasBahia1: {
    width: 111,
  },
  casasBahia: {
    left: 180,
  },
  download51: {
    top: 326,
    height: 85,
    position: "absolute",
  },
  ca1: {
    width: 101,
  },
  ca: {
    top: 341,
    left: 180,
    position: "absolute",
  },
  pressable: {
    left: 36,
    top: 473,
    width: 108,
    height: 91,
    position: "absolute",
  },
  pocaCosmeticos1: {
    height: 71,
    width: 158,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_7xl,
  },
  pocaCosmeticos: {
    top: 479,
    left: 180,
    position: "absolute",
  },
  download21: {
    top: 618,
  },
  imaginarium1: {
    width: 158,
  },
  imaginarium: {
    top: 633,
    left: 180,
    position: "absolute",
  },
  download41: {
    top: 774,
  },
  download31: {
    left: 42,
    top: 930,
    height: 84,
  },
  simpleOrganicLogo1: {
    top: 1076,
    height: 78,
    left: 40,
    width: 98,
  },
  principia1: {
    width: 145,
    height: 31,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_7xl,
  },
  principia: {
    top: 805,
    left: 180,
    position: "absolute",
  },
  sallve1: {
    width: 124,
  },
  sallve: {
    top: 952,
  },
  simpleOrganic1: {
    width: 114,
    height: 48,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_7xl,
  },
  simpleOrganic: {
    top: 1084,
  },
  rectangleGroup: {
    top: 102,
    left: -12,
    width: 338,
    height: 586,
    position: "absolute",
  },
  instanceItem: {
    height: "95.35%",
    width: "99.89%",
    top: "95.35%",
    right: "0.11%",
    bottom: "-90.7%",
    borderRadius: Border.br_xl,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    transform: [
      {
        rotate: "0.43deg",
      },
    ],
    display: "none",
    backgroundColor: Color.white,
  },
  mdisearchIcon: {
    height: "93.02%",
    width: "15.71%",
    top: "6.98%",
    right: "6.47%",
    left: "77.82%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    bottom: "0%",
    position: "absolute",
  },
  rectangleContainer: {
    left: 79,
    width: 267,
    height: 43,
  },
  androidLarge6: {
    flex: 1,
    height: 800,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default AndroidLarge6;
