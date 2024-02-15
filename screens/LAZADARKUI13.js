import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const LAZADARKUI13 = () => {
  return (
    <View style={styles.lazaDarkUi08}>
      <View style={styles.text}>
        <Text style={[styles.hello, styles.helloTypo]}>Hello</Text>
        <Text style={[styles.welcomeToLaza, styles.search1Typo]}>
          Welcome to Laza.
        </Text>
      </View>
      <View style={[styles.search, styles.searchFlexBox]}>
        <Image
          style={styles.iconLayout2}
          contentFit="cover"
          source={require("../assets/search.png")}
        />
        <Text style={[styles.search1, styles.search1Typo]}>Search...</Text>
      </View>
      <Image
        style={styles.voiceIcon}
        contentFit="cover"
        source={require("../assets/voice1.png")}
      />
      <View style={styles.chooseBrand}>
        <Text style={[styles.viewAll, styles.text1Layout]}>View All</Text>
        <View style={[styles.adidas, styles.adidasLayout]}>
          <View style={[styles.adidasChild, styles.adidasLayout]} />
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
        <Text style={[styles.chooseBrand1, styles.mrhRajuTypo]}>
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
        <Text style={[styles.viewAll, styles.text1Layout]}>View All</Text>
        <Text style={[styles.chooseBrand1, styles.mrhRajuTypo]}>
          New Arraival
        </Text>
        <View style={[styles.card01, styles.cardLayout]}>
          <Image
            style={styles.card01Child}
            contentFit="cover"
            source={require("../assets/rectangle-568.png")}
          />
          <Text
            style={[styles.nikeSportswearClub, styles.nikeSportswearClubTypo]}
          >
            Nike Sportswear Club Fleece
          </Text>
          <Text style={[styles.text1, styles.text1Layout]}>$99</Text>
          <Image
            style={[styles.heartIcon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/heart.png")}
          />
        </View>
        <View style={[styles.card02, styles.cardLayout]}>
          <Image
            style={styles.card01Child}
            contentFit="cover"
            source={require("../assets/rectangle-5692.png")}
          />
          <Text
            style={[styles.trailRunningJacket, styles.nikeSportswearClubTypo]}
          >
            Trail Running Jacket Nike Windrunner
          </Text>
          <Text style={[styles.text1, styles.text1Layout]}>$99</Text>
          <Image
            style={[styles.heartIcon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/heart.png")}
          />
        </View>
        <View style={[styles.card03, styles.cardPosition]}>
          <Image
            style={styles.card01Child}
            contentFit="cover"
            source={require("../assets/rectangle-5681.png")}
          />
          <Image
            style={[styles.heartIcon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/heart.png")}
          />
          <Text
            style={[styles.nikeSportswearClub, styles.nikeSportswearClubTypo]}
          >{`Training Top
Nike Sport Clash`}</Text>
          <Text style={[styles.text1, styles.text1Layout]}>$99</Text>
        </View>
        <View style={[styles.card04, styles.cardPosition]}>
          <Image
            style={styles.card01Child}
            contentFit="cover"
            source={require("../assets/rectangle-5693.png")}
          />
          <Image
            style={[styles.heartIcon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/heart.png")}
          />
          <Text
            style={[styles.trailRunningJacket, styles.nikeSportswearClubTypo]}
          >
            Trail Running Jacket Nike Windrunner
          </Text>
          <Text style={[styles.text1, styles.text1Layout]}>$99</Text>
        </View>
      </View>
      <Image
        style={[styles.menuIcon, styles.btnIconLayout]}
        contentFit="cover"
        source={require("../assets/menu.png")}
      />
      <View style={[styles.tab, styles.sidePosition]}>
        <View style={styles.tabChild} />
        <View style={[styles.bag, styles.bagLayout]}>
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
        </View>
        <View style={[styles.heart, styles.bagLayout]}>
          <Image
            style={styles.vectorIcon2}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
        </View>
        <View style={[styles.wallet, styles.bagLayout]}>
          <Image
            style={styles.vectorIcon2}
            contentFit="cover"
            source={require("../assets/vector5.png")}
          />
        </View>
        <View style={[styles.home, styles.homeSpaceBlock]}>
          <Text style={[styles.home1, styles.home1Typo]}>Home</Text>
        </View>
      </View>
      <Image
        style={[styles.cartIcon, styles.btnIconLayout]}
        contentFit="cover"
        source={require("../assets/cart1.png")}
      />
      <View style={[styles.sideMenu, styles.sidePosition]}>
        <View style={[styles.sideMenuChild, styles.sidePosition]} />
        <View style={styles.sideMenuItem} />
        <Image
          style={[styles.menuIcon, styles.btnIconLayout]}
          contentFit="cover"
          source={require("../assets/menu1.png")}
        />
        <View style={[styles.profile, styles.darkPosition]}>
          <Image
            style={[styles.frame11, styles.btnIconLayout]}
            contentFit="cover"
            source={require("../assets/frame-1-1.png")}
          />
          <Text style={[styles.mrhRaju, styles.mrhRajuPosition]}>Mrh Raju</Text>
          <Text style={[styles.verifiedProfile, styles.mrhRajuPosition]}>
            Verified Profile
          </Text>
          <Image
            style={styles.badgeIcon}
            contentFit="cover"
            source={require("../assets/badge.png")}
          />
          <View style={[styles.ordersWrapper, styles.homeSpaceBlock]}>
            <Text style={[styles.orders, styles.home1Typo]}>3 Orders</Text>
          </View>
        </View>
        <View style={[styles.ai, styles.aiSpaceBlock]}>
          <Image
            style={[styles.infoCircleIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/info-circle.png")}
          />
          <Text style={[styles.accountInformation, styles.search1Typo]}>
            Account Information
          </Text>
        </View>
        <View style={[styles.pass, styles.aiSpaceBlock]}>
          <Image
            style={[styles.infoCircleIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/lock.png")}
          />
          <Text style={[styles.accountInformation, styles.search1Typo]}>
            Password
          </Text>
        </View>
        <View style={[styles.order, styles.aiSpaceBlock]}>
          <Image
            style={[styles.infoCircleIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/bag.png")}
          />
          <Text style={[styles.accountInformation, styles.search1Typo]}>
            Order
          </Text>
        </View>
        <View style={[styles.mc, styles.aiSpaceBlock]}>
          <Image
            style={[styles.infoCircleIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/wallet.png")}
          />
          <Text style={[styles.accountInformation, styles.search1Typo]}>
            My Cards
          </Text>
        </View>
        <View style={[styles.wish, styles.aiSpaceBlock]}>
          <Image
            style={[styles.infoCircleIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/heart1.png")}
          />
          <Text style={[styles.accountInformation, styles.search1Typo]}>
            Wishlist
          </Text>
        </View>
        <View style={[styles.settings, styles.darkPosition]}>
          <Image
            style={[styles.infoCircleIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/setting.png")}
          />
          <Text style={[styles.accountInformation, styles.search1Typo]}>
            Settings
          </Text>
        </View>
        <View style={[styles.logout, styles.aiSpaceBlock]}>
          <Image
            style={[styles.infoCircleIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/logout.png")}
          />
          <Text style={[styles.logout1, styles.nike1Typo]}>Logout</Text>
        </View>
        <View style={[styles.dark, styles.darkPosition]}>
          <View style={[styles.dark1, styles.aiSpaceBlock]}>
            <Image
              style={[styles.infoCircleIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/sun.png")}
            />
            <Text style={[styles.accountInformation, styles.search1Typo]}>
              Dark Mode
            </Text>
          </View>
          <View style={[styles.onBtn, styles.btnIconLayout]}>
            <View style={[styles.onBtnChild, styles.btnIconLayout]} />
            <Image
              style={styles.onBtnItem}
              contentFit="cover"
              source={require("../assets/ellipse-7741.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  helloTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
  },
  search1Typo: {
    lineHeight: 17,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  searchFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  text1Layout: {
    lineHeight: 14,
    fontSize: FontSize.size_smi,
  },
  adidasLayout: {
    width: 115,
    left: 0,
    height: 50,
    position: "absolute",
  },
  iconLayout1: {
    width: 25,
    overflow: "hidden",
  },
  nike1Typo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 17,
    fontSize: FontSize.size_mini,
    textAlign: "left",
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
  mrhRajuTypo: {
    lineHeight: 19,
    fontSize: FontSize.headlinesHeadline17_size,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorWhitesmoke_100,
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
    width: 163,
    top: 34,
    position: "absolute",
  },
  nikeSportswearClubTypo: {
    lineHeight: 15,
    fontSize: FontSize.size_2xs,
    top: 208,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 0,
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
    position: "absolute",
  },
  iconLayout2: {
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  cardPosition: {
    top: 306,
    height: 257,
    width: 163,
    position: "absolute",
  },
  btnIconLayout: {
    width: 45,
    position: "absolute",
  },
  sidePosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  bagLayout: {
    width: "17.87%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  homeSpaceBlock: {
    padding: Padding.p_3xs,
    flexDirection: "row",
    position: "absolute",
  },
  home1Typo: {
    lineHeight: 12,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  darkPosition: {
    width: 260,
    left: 20,
    position: "absolute",
  },
  mrhRajuPosition: {
    left: 60,
    textAlign: "left",
    position: "absolute",
  },
  aiSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: 0,
    width: 260,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  hello: {
    fontSize: FontSize.size_9xl,
    letterSpacing: -0.2,
    lineHeight: 31,
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
  },
  welcomeToLaza: {
    marginTop: 5,
    color: Color.colorLightslategray,
    fontFamily: FontFamily.interRegular,
  },
  text: {
    top: 110,
    justifyContent: "center",
    left: 20,
    position: "absolute",
  },
  search1: {
    marginLeft: 10,
    color: Color.colorLightslategray,
    fontFamily: FontFamily.interRegular,
  },
  search: {
    width: 275,
    padding: Padding.p_mini,
    backgroundColor: Color.colorDarkslategray_300,
    borderRadius: Border.br_3xs,
    top: 183,
    alignItems: "center",
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
    left: 286,
    top: 3,
    color: Color.colorLightslategray,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  adidasChild: {
    top: 0,
    backgroundColor: Color.colorDarkslategray_300,
    borderRadius: Border.br_3xs,
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
    position: "absolute",
  },
  adidas1: {
    left: 55,
    top: 17,
    position: "absolute",
    color: Color.colorWhitesmoke_100,
  },
  adidas: {
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
    position: "absolute",
    color: Color.colorWhitesmoke_100,
  },
  nike: {
    left: 125,
    top: 34,
  },
  chooseBrand1: {
    top: 0,
    left: 0,
    textAlign: "left",
    position: "absolute",
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
    position: "absolute",
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
    position: "absolute",
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
    width: 163,
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
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  heartIcon: {
    top: 15,
    left: 128,
    position: "absolute",
  },
  card01: {
    left: 0,
  },
  trailRunningJacket: {
    width: 136,
  },
  card02: {
    left: 172,
  },
  card03: {
    left: 0,
  },
  card04: {
    left: 172,
  },
  newArraival: {
    top: 352,
    width: 335,
    height: 563,
    left: 20,
    position: "absolute",
  },
  menuIcon: {
    height: 45,
    top: 45,
    width: 45,
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
    position: "absolute",
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
    position: "absolute",
    overflow: "hidden",
  },
  wallet: {
    right: "5.6%",
    left: "76.53%",
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: Padding.p_10xs,
    position: "absolute",
    overflow: "hidden",
  },
  home1: {
    color: Color.colorMediumslateblue,
  },
  home: {
    right: "76.8%",
    left: "5.33%",
    width: "17.87%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
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
    height: 80,
  },
  cartIcon: {
    left: 310,
    height: 45,
    top: 45,
    width: 45,
  },
  sideMenuChild: {
    backgroundColor: "rgba(29, 30, 32, 0.2)",
    top: 0,
    height: 812,
  },
  sideMenuItem: {
    width: 300,
    top: 0,
    left: 0,
    position: "absolute",
    height: 812,
    backgroundColor: Color.colorGray_200,
  },
  frame11: {
    borderRadius: 50,
    height: 45,
    top: 0,
    left: 0,
  },
  mrhRaju: {
    lineHeight: 19,
    fontSize: FontSize.headlinesHeadline17_size,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorWhitesmoke_100,
    top: 3,
  },
  verifiedProfile: {
    top: 28,
    lineHeight: 14,
    fontSize: FontSize.size_smi,
    color: Color.colorLightslategray,
    fontFamily: FontFamily.interRegular,
  },
  badgeIcon: {
    top: 27,
    left: 152,
    width: 15,
    height: 15,
    position: "absolute",
  },
  orders: {
    color: Color.colorLightslategray,
  },
  ordersWrapper: {
    top: 7,
    left: 194,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorDarkslategray_300,
  },
  profile: {
    top: 120,
    height: 45,
  },
  infoCircleIcon: {
    height: 25,
  },
  accountInformation: {
    marginLeft: 10,
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhitesmoke_100,
  },
  ai: {
    top: 245,
    left: 20,
  },
  pass: {
    top: 295,
    left: 20,
  },
  order: {
    top: 345,
    left: 20,
  },
  mc: {
    top: 395,
    left: 20,
  },
  wish: {
    top: 445,
    left: 20,
  },
  settings: {
    top: 495,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_3xs,
    paddingBottom: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
  },
  logout1: {
    color: "#ff5757",
    marginLeft: 10,
  },
  logout: {
    top: 687,
    left: 20,
  },
  dark1: {
    top: 0,
    left: 0,
  },
  onBtnChild: {
    borderRadius: Border.br_11xl,
    backgroundColor: "#34c759",
    height: 25,
    top: 0,
    left: 0,
  },
  onBtnItem: {
    top: 2,
    left: 22,
    width: 21,
    height: 21,
    position: "absolute",
  },
  onBtn: {
    top: 10,
    left: 215,
    height: 25,
  },
  dark: {
    top: 195,
    height: 45,
  },
  sideMenu: {
    top: 0,
    height: 812,
  },
  lazaDarkUi08: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.colorGray_200,
  },
});

export default LAZADARKUI13;
