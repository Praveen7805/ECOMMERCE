import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, Padding, FontFamily, Color, Border } from "../GlobalStyles";

const LAZADARKUI15 = () => {
  return (
    <View style={styles.lazaDarkUi06}>
      <Image
        style={[styles.cartIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/cart1.png")}
      />
      <Text style={styles.items}>365 Items</Text>
      <Text style={[styles.inWishlist, styles.editTypo]}>in wishlist</Text>
      <View style={[styles.editParent, styles.savedSpaceBlock]}>
        <Image
          style={styles.editIcon}
          contentFit="cover"
          source={require("../assets/edit.png")}
        />
        <Text style={[styles.edit, styles.editTypo]}>Edit</Text>
      </View>
      <Image
        style={[styles.backIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/back.png")}
      />
      <Text style={[styles.wishlist, styles.textTypo]}>Wishlist</Text>
      <View style={[styles.card01, styles.cardLayout]}>
        <Image
          style={[styles.card01Child, styles.tabPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-569.png")}
        />
        <Text
          style={[styles.nikeSportswearClub, styles.nikeSportswearClubTypo]}
        >
          Nike Sportswear Club Fleece
        </Text>
        <Text style={[styles.text, styles.tabPosition]}>$99</Text>
        <Image
          style={[styles.heartIcon, styles.heartIconLayout]}
          contentFit="cover"
          source={require("../assets/heart.png")}
        />
      </View>
      <View style={[styles.card02, styles.cardLayout]}>
        <Image
          style={[styles.card01Child, styles.tabPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-570.png")}
        />
        <Text
          style={[styles.trailRunningJacket, styles.nikeSportswearClubTypo]}
        >
          Trail Running Jacket Nike Windrunner
        </Text>
        <Text style={[styles.text, styles.tabPosition]}>$99</Text>
        <Image
          style={[styles.heartIcon1, styles.heartIconLayout]}
          contentFit="cover"
          source={require("../assets/heart.png")}
        />
      </View>
      <View style={[styles.card03, styles.cardPosition1]}>
        <Image
          style={[styles.card01Child, styles.tabPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-5691.png")}
        />
        <Image
          style={[styles.heartIcon, styles.heartIconLayout]}
          contentFit="cover"
          source={require("../assets/heart.png")}
        />
        <Text
          style={[styles.nikeSportswearClub, styles.nikeSportswearClubTypo]}
        >{`Training Top
Nike Sport Clash`}</Text>
        <Text style={[styles.text, styles.tabPosition]}>$99</Text>
      </View>
      <View style={[styles.card04, styles.cardPosition1]}>
        <Image
          style={[styles.card01Child, styles.tabPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-5701.png")}
        />
        <Image
          style={[styles.heartIcon1, styles.heartIconLayout]}
          contentFit="cover"
          source={require("../assets/heart.png")}
        />
        <Text
          style={[styles.trailRunningJacket, styles.nikeSportswearClubTypo]}
        >
          Trail Running Jacket Nike Windrunner
        </Text>
        <Text style={[styles.text, styles.tabPosition]}>$99</Text>
      </View>
      <View style={[styles.card031, styles.cardPosition]}>
        <Image
          style={[styles.card01Child, styles.tabPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-5691.png")}
        />
        <Image
          style={[styles.heartIcon, styles.heartIconLayout]}
          contentFit="cover"
          source={require("../assets/heart.png")}
        />
        <Text
          style={[styles.nikeSportswearClub, styles.nikeSportswearClubTypo]}
        >{`Training Top
Nike Sport Clash`}</Text>
        <Text style={[styles.text, styles.tabPosition]}>$99</Text>
      </View>
      <View style={[styles.card041, styles.cardPosition]}>
        <Image
          style={[styles.card01Child, styles.tabPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-5701.png")}
        />
        <Image
          style={[styles.heartIcon1, styles.heartIconLayout]}
          contentFit="cover"
          source={require("../assets/heart.png")}
        />
        <Text
          style={[styles.trailRunningJacket, styles.nikeSportswearClubTypo]}
        >
          Trail Running Jacket Nike Windrunner
        </Text>
        <Text style={[styles.text, styles.tabPosition]}>$99</Text>
      </View>
      <View style={[styles.tab, styles.tabPosition]}>
        <View style={styles.tabChild} />
        <View style={[styles.bag, styles.bagFlexBox]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector7.png")}
          />
        </View>
        <View style={[styles.wallet, styles.savedPosition]}>
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector5.png")}
          />
        </View>
        <View style={[styles.saved, styles.savedPosition]}>
          <Text style={styles.wishlist1}>Wishlist</Text>
        </View>
        <View style={[styles.home, styles.bagFlexBox]}>
          <Image
            style={styles.vectorIcon2}
            contentFit="cover"
            source={require("../assets/vector8.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 45,
    width: 45,
    top: 45,
    position: "absolute",
  },
  editTypo: {
    lineHeight: 17,
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  savedSpaceBlock: {
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  textTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
  },
  cardLayout: {
    height: 257,
    top: 176,
    width: 160,
    position: "absolute",
  },
  tabPosition: {
    left: 0,
    position: "absolute",
  },
  nikeSportswearClubTypo: {
    lineHeight: 15,
    top: 208,
    fontSize: FontSize.size_2xs,
    left: 0,
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  heartIconLayout: {
    width: 20,
    top: 15,
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  cardPosition1: {
    top: 448,
    height: 257,
    width: 160,
    position: "absolute",
  },
  cardPosition: {
    top: 720,
    height: 257,
    width: 160,
    position: "absolute",
  },
  bagFlexBox: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_10xs,
    justifyContent: "center",
    width: "17.87%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  savedPosition: {
    justifyContent: "center",
    width: "17.87%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    alignItems: "center",
    position: "absolute",
  },
  cartIcon: {
    left: 310,
  },
  items: {
    top: 115,
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 19,
    fontSize: FontSize.headlinesHeadline17_size,
    left: 20,
    position: "absolute",
  },
  inWishlist: {
    top: 139,
    fontFamily: FontFamily.interRegular,
    color: Color.colorLightslategray,
    left: 20,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  editIcon: {
    width: 15,
    height: 15,
    overflow: "hidden",
  },
  edit: {
    marginLeft: 5,
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
  },
  editParent: {
    top: 117,
    left: 287,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_300,
    alignItems: "center",
    padding: Padding.p_3xs,
    flexDirection: "row",
    position: "absolute",
  },
  backIcon: {
    left: 20,
  },
  wishlist: {
    top: 58,
    left: 155,
    lineHeight: 19,
    fontSize: FontSize.headlinesHeadline17_size,
    fontWeight: "600",
    position: "absolute",
  },
  card01Child: {
    top: 0,
    borderRadius: Border.br_mini,
    height: 203,
    width: 160,
    left: 0,
  },
  nikeSportswearClub: {
    width: 117,
  },
  text: {
    top: 243,
    fontSize: FontSize.size_smi,
    lineHeight: 14,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
  },
  heartIcon: {
    left: 128,
    height: 20,
  },
  card01: {
    left: 20,
  },
  trailRunningJacket: {
    width: 136,
  },
  heartIcon1: {
    left: 125,
    height: 20,
  },
  card02: {
    left: 195,
  },
  card03: {
    left: 20,
  },
  card04: {
    left: 195,
  },
  card031: {
    left: 20,
  },
  card041: {
    left: 195,
  },
  tabChild: {
    right: "0%",
    left: "0%",
    backgroundColor: Color.colorGray_100,
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  vectorIcon: {
    width: 18,
    height: 19,
  },
  bag: {
    right: "29.33%",
    left: "52.8%",
  },
  vectorIcon1: {
    height: 18,
    width: 19,
  },
  wallet: {
    right: "5.6%",
    left: "76.53%",
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: Padding.p_10xs,
    overflow: "hidden",
  },
  wishlist1: {
    lineHeight: 12,
    color: Color.colorMediumslateblue,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  saved: {
    right: "53.07%",
    left: "29.07%",
    padding: Padding.p_3xs,
    flexDirection: "row",
    width: "17.87%",
  },
  vectorIcon2: {
    width: 19,
    height: 20,
  },
  home: {
    right: "76.8%",
    left: "5.33%",
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
  },
  lazaDarkUi06: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default LAZADARKUI15;
