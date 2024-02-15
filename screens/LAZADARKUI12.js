import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const LAZADARKUI12 = () => {
  return (
    <View style={styles.lazaDarkUi09}>
      <View style={styles.text}>
        <Text style={[styles.hello, styles.helloTypo]}>Hello</Text>
        <Text style={[styles.welcomeToLaza, styles.search1Clr]}>
          Welcome to Laza.
        </Text>
      </View>
      <View style={styles.search}>
        <Image
          style={styles.searchIcon}
          contentFit="cover"
          source={require("../assets/search.png")}
        />
        <Text style={[styles.search1, styles.search1Clr]}>Search...</Text>
      </View>
      <Image
        style={styles.voiceIcon}
        contentFit="cover"
        source={require("../assets/voice.png")}
      />
      <View style={styles.chooseBrand}>
        <Text style={[styles.viewAll, styles.text1Typo]}>View All</Text>
        <View style={[styles.adidas, styles.adidasLayout]}>
          <View style={[styles.adidasChild, styles.childPosition]} />
          <View style={styles.adidasItem} />
          <Image
            style={[styles.adidasIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/adidas.png")}
          />
          <Text style={[styles.adidas1, styles.nike1Typo]}>Adidas</Text>
        </View>
        <View style={[styles.nike, styles.nikeLayout]}>
          <View style={[styles.nikeChild, styles.nikeLayout]} />
          <View style={[styles.nikeItem, styles.itemLayout]} />
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Text style={[styles.nike1, styles.nike1Typo]}>Nike</Text>
        </View>
        <Text style={[styles.chooseBrand1, styles.nike1Typo]}>
          Choose Brand
        </Text>
        <View style={[styles.fila, styles.filaLayout]}>
          <View style={[styles.filaChild, styles.filaLayout]} />
          <View style={[styles.nikeItem, styles.itemLayout]} />
          <Text style={[styles.nike1, styles.nike1Typo]}>Fila</Text>
          <Image
            style={[styles.fila91Icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/fila9-1.png")}
          />
        </View>
        <View style={[styles.puma, styles.pumaLayout]}>
          <View style={[styles.pumaChild, styles.pumaLayout]} />
          <View style={[styles.pumaItem, styles.itemLayout]} />
          <Text style={[styles.adidas1, styles.nike1Typo]}>Puma</Text>
          <Image
            style={[styles.pumaLogo1Icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/pumalogo-1.png")}
          />
        </View>
      </View>
      <View style={styles.newArraival}>
        <Text style={[styles.viewAll, styles.text1Typo]}>View All</Text>
        <Text style={[styles.chooseBrand1, styles.nike1Typo]}>
          New Arraival
        </Text>
        <View style={[styles.card01, styles.cardLayout]}>
          <Image
            style={styles.card01Child}
            contentFit="cover"
            source={require("../assets/rectangle-569.png")}
          />
          <Text
            style={[styles.nikeSportswearClub, styles.nikeSportswearClubTypo]}
          >
            Nike Sportswear Club Fleece
          </Text>
          <Text style={[styles.text1, styles.text1Typo]}>$99</Text>
          <Image
            style={[styles.heartIcon, styles.heartIconPosition]}
            contentFit="cover"
            source={require("../assets/heart.png")}
          />
        </View>
        <View style={[styles.card02, styles.cardLayout]}>
          <Image
            style={styles.card01Child}
            contentFit="cover"
            source={require("../assets/rectangle-570.png")}
          />
          <Text
            style={[styles.trailRunningJacket, styles.nikeSportswearClubTypo]}
          >
            Trail Running Jacket Nike Windrunner
          </Text>
          <Text style={[styles.text1, styles.text1Typo]}>$99</Text>
          <Image
            style={[styles.heartIcon1, styles.heartIconPosition]}
            contentFit="cover"
            source={require("../assets/heart.png")}
          />
        </View>
        <View style={[styles.card03, styles.cardPosition]}>
          <Image
            style={styles.card01Child}
            contentFit="cover"
            source={require("../assets/rectangle-5691.png")}
          />
          <Image
            style={[styles.heartIcon, styles.heartIconPosition]}
            contentFit="cover"
            source={require("../assets/heart.png")}
          />
          <Text
            style={[styles.nikeSportswearClub, styles.nikeSportswearClubTypo]}
          >{`Training Top
Nike Sport Clash`}</Text>
          <Text style={[styles.text1, styles.text1Typo]}>$99</Text>
        </View>
        <View style={[styles.card04, styles.cardPosition]}>
          <Image
            style={styles.card01Child}
            contentFit="cover"
            source={require("../assets/rectangle-5701.png")}
          />
          <Image
            style={[styles.heartIcon1, styles.heartIconPosition]}
            contentFit="cover"
            source={require("../assets/heart.png")}
          />
          <Text
            style={[styles.trailRunningJacket, styles.nikeSportswearClubTypo]}
          >
            Trail Running Jacket Nike Windrunner
          </Text>
          <Text style={[styles.text1, styles.text1Typo]}>$99</Text>
        </View>
      </View>
      <Image
        style={[styles.menuIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/menu.png")}
      />
      <View style={styles.tab}>
        <View style={styles.tabChild} />
        <View style={[styles.bag, styles.bagPosition]}>
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
        </View>
        <View style={[styles.heart, styles.bagPosition]}>
          <Image
            style={styles.vectorIcon2}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
        </View>
        <View style={[styles.wallet, styles.bagPosition]}>
          <Image
            style={styles.vectorIcon2}
            contentFit="cover"
            source={require("../assets/vector3.png")}
          />
        </View>
        <View style={[styles.home, styles.bagPosition]}>
          <Text style={styles.home1}>Home</Text>
        </View>
      </View>
      <Image
        style={[styles.cartIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/cart.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  helloTypo: {
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  search1Clr: {
    color: Color.colorLightslategray,
    fontFamily: FontFamily.interRegular,
  },
  text1Typo: {
    lineHeight: 14,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  adidasLayout: {
    width: 115,
    height: 50,
    position: "absolute",
  },
  childPosition: {
    top: 0,
    left: 0,
  },
  iconLayout1: {
    width: 25,
    position: "absolute",
    overflow: "hidden",
  },
  nike1Typo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
    position: "absolute",
  },
  nikeLayout: {
    width: 98,
    height: 50,
    position: "absolute",
  },
  itemLayout: {
    backgroundColor: Color.colorDarkslategray_100,
    height: 40,
    width: 40,
    top: 5,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  filaLayout: {
    width: 91,
    height: 50,
    position: "absolute",
  },
  pumaLayout: {
    width: 106,
    height: 50,
    position: "absolute",
  },
  cardLayout: {
    height: 257,
    width: 160,
    top: 34,
    position: "absolute",
  },
  nikeSportswearClubTypo: {
    lineHeight: 15,
    top: 208,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 0,
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
    position: "absolute",
  },
  heartIconPosition: {
    top: 15,
    height: 20,
    width: 20,
    position: "absolute",
    overflow: "hidden",
  },
  cardPosition: {
    top: 306,
    height: 257,
    width: 160,
    position: "absolute",
  },
  iconLayout: {
    height: 45,
    width: 45,
    top: 45,
    position: "absolute",
  },
  bagPosition: {
    width: "17.87%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  hello: {
    fontSize: FontSize.size_9xl,
    letterSpacing: -0.2,
    lineHeight: 31,
    textAlign: "left",
  },
  welcomeToLaza: {
    marginTop: 5,
    lineHeight: 17,
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  text: {
    top: 110,
    justifyContent: "center",
    left: 20,
    position: "absolute",
  },
  searchIcon: {
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  search1: {
    marginLeft: 10,
    lineHeight: 17,
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  search: {
    width: 275,
    padding: Padding.p_mini,
    alignItems: "center",
    top: 183,
    flexDirection: "row",
    backgroundColor: Color.colorDarkslategray_300,
    borderRadius: Border.br_3xs,
    left: 20,
    position: "absolute",
  },
  voiceIcon: {
    left: 305,
    width: 50,
    height: 50,
    top: 183,
    position: "absolute",
  },
  viewAll: {
    top: 3,
    left: 286,
    color: Color.colorLightslategray,
    fontFamily: FontFamily.interRegular,
  },
  adidasChild: {
    width: 115,
    height: 50,
    position: "absolute",
    backgroundColor: Color.colorDarkslategray_300,
    borderRadius: Border.br_3xs,
    top: 0,
  },
  adidasItem: {
    backgroundColor: Color.colorDarkslategray_200,
    height: 40,
    width: 40,
    top: 5,
    left: 5,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  adidasIcon: {
    left: 12,
    height: 17,
    top: 17,
  },
  adidas1: {
    left: 55,
    top: 17,
    lineHeight: 17,
    fontSize: FontSize.size_mini,
  },
  adidas: {
    left: 0,
    top: 34,
  },
  nikeChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorDarkslategray_300,
    borderRadius: Border.br_3xs,
  },
  nikeItem: {
    left: 6,
  },
  vectorIcon: {
    height: "27%",
    width: "26.53%",
    top: "38%",
    right: "59.18%",
    bottom: "35%",
    left: "14.29%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  nike1: {
    left: 56,
    top: 17,
    lineHeight: 17,
    fontSize: FontSize.size_mini,
  },
  nike: {
    left: 125,
    top: 34,
  },
  chooseBrand1: {
    fontSize: FontSize.headlinesHeadline17_size,
    lineHeight: 19,
    top: 0,
    left: 0,
  },
  filaChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorDarkslategray_300,
    borderRadius: Border.br_3xs,
  },
  fila91Icon: {
    top: 21,
    left: 14,
    height: 9,
  },
  fila: {
    left: 233,
    top: 34,
  },
  pumaChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorDarkslategray_300,
    borderRadius: Border.br_3xs,
  },
  pumaItem: {
    left: 5,
    backgroundColor: Color.colorDarkslategray_100,
  },
  pumaLogo1Icon: {
    top: 18,
    left: 13,
    height: 13,
  },
  puma: {
    left: 334,
    top: 34,
  },
  chooseBrand: {
    top: 253,
    width: 440,
    height: 84,
    left: 20,
    position: "absolute",
  },
  card01Child: {
    borderRadius: Border.br_mini,
    height: 203,
    width: 160,
    top: 0,
    left: 0,
    position: "absolute",
  },
  nikeSportswearClub: {
    width: 117,
  },
  text1: {
    top: 243,
    left: 0,
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  heartIcon: {
    left: 128,
  },
  card01: {
    left: 0,
  },
  trailRunningJacket: {
    width: 136,
  },
  heartIcon1: {
    left: 125,
  },
  card02: {
    left: 175,
  },
  card03: {
    left: 0,
  },
  card04: {
    left: 175,
  },
  newArraival: {
    top: 352,
    width: 335,
    height: 563,
    left: 20,
    position: "absolute",
  },
  menuIcon: {
    left: 20,
  },
  tabChild: {
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    backgroundColor: Color.colorDarkslategray_100,
    position: "absolute",
    width: "100%",
  },
  vectorIcon1: {
    width: 18,
    height: 19,
  },
  bag: {
    right: "29.33%",
    left: "52.8%",
    paddingHorizontal: Padding.p_10xs,
    paddingVertical: Padding.p_11xs,
    flexDirection: "row",
    width: "17.87%",
    overflow: "hidden",
  },
  vectorIcon2: {
    width: 19,
    height: 18,
  },
  heart: {
    right: "53.07%",
    left: "29.07%",
    padding: Padding.p_10xs,
    overflow: "hidden",
  },
  wallet: {
    right: "5.6%",
    left: "76.53%",
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: Padding.p_10xs,
    overflow: "hidden",
  },
  home1: {
    lineHeight: 12,
    color: Color.colorMediumslateblue,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  home: {
    right: "76.8%",
    left: "5.33%",
    padding: Padding.p_3xs,
    flexDirection: "row",
    width: "17.87%",
  },
  tab: {
    top: 732,
    shadowColor: "rgba(29, 30, 32, 0.08)",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 375,
    height: 80,
    left: 0,
    position: "absolute",
  },
  cartIcon: {
    left: 310,
  },
  lazaDarkUi09: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default LAZADARKUI12;
