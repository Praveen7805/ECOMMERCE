import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const LAZADARKUI14 = () => {
  return (
    <View style={styles.lazaDarkUi07}>
      <Image
        style={[styles.backIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/back.png")}
      />
      <Image
        style={[styles.cartIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/cart1.png")}
      />
      <View style={[styles.vectorWrapper, styles.sortParentSpaceBlock]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector6.png")}
        />
      </View>
      <Text style={[styles.items, styles.textFlexBox]}>365 Items</Text>
      <Text style={[styles.availableInStock, styles.sortTypo]}>
        Available in stock
      </Text>
      <View style={[styles.sortParent, styles.sortParentSpaceBlock]}>
        <Image
          style={styles.sortIcon}
          contentFit="cover"
          source={require("../assets/sort.png")}
        />
        <Text style={[styles.sort, styles.sortTypo]}>Sort</Text>
      </View>
      <View style={[styles.card01, styles.cardLayout]}>
        <Image
          style={[styles.card01Child, styles.textPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-569.png")}
        />
        <Text
          style={[styles.nikeSportswearClub, styles.nikeSportswearClubTypo]}
        >
          Nike Sportswear Club Fleece
        </Text>
        <Text style={[styles.text, styles.textPosition]}>$99</Text>
        <Image
          style={[styles.heartIcon, styles.heartIconLayout]}
          contentFit="cover"
          source={require("../assets/heart.png")}
        />
      </View>
      <View style={[styles.card02, styles.cardLayout]}>
        <Image
          style={[styles.card01Child, styles.textPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-570.png")}
        />
        <Text
          style={[styles.trailRunningJacket, styles.nikeSportswearClubTypo]}
        >
          Trail Running Jacket Nike Windrunner
        </Text>
        <Text style={[styles.text, styles.textPosition]}>$99</Text>
        <Image
          style={[styles.heartIcon1, styles.heartIconLayout]}
          contentFit="cover"
          source={require("../assets/heart.png")}
        />
      </View>
      <View style={[styles.card03, styles.cardPosition1]}>
        <Image
          style={[styles.card01Child, styles.textPosition]}
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
        <Text style={[styles.text, styles.textPosition]}>$99</Text>
      </View>
      <View style={[styles.card04, styles.cardPosition1]}>
        <Image
          style={[styles.card01Child, styles.textPosition]}
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
        <Text style={[styles.text, styles.textPosition]}>$99</Text>
      </View>
      <View style={[styles.card031, styles.cardPosition]}>
        <Image
          style={[styles.card01Child, styles.textPosition]}
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
        <Text style={[styles.text, styles.textPosition]}>$99</Text>
      </View>
      <View style={[styles.card041, styles.cardPosition]}>
        <Image
          style={[styles.card01Child, styles.textPosition]}
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
        <Text style={[styles.text, styles.textPosition]}>$99</Text>
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
  sortParentSpaceBlock: {
    padding: Padding.p_3xs,
    backgroundColor: Color.colorDarkslategray_300,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
  },
  sortTypo: {
    lineHeight: 17,
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  cardLayout: {
    height: 257,
    top: 176,
    width: 160,
    position: "absolute",
  },
  textPosition: {
    left: 0,
    position: "absolute",
  },
  nikeSportswearClubTypo: {
    lineHeight: 15,
    fontSize: FontSize.size_2xs,
    top: 208,
    left: 0,
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  heartIconLayout: {
    height: 20,
    width: 20,
    top: 15,
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
  backIcon: {
    left: 20,
  },
  cartIcon: {
    left: 310,
  },
  vectorIcon: {
    width: 48,
    height: 25,
  },
  vectorWrapper: {
    left: 157,
    top: 45,
    backgroundColor: Color.colorDarkslategray_300,
    borderRadius: Border.br_3xs,
  },
  items: {
    top: 115,
    fontSize: FontSize.headlinesHeadline17_size,
    lineHeight: 19,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    left: 20,
    position: "absolute",
  },
  availableInStock: {
    top: 139,
    fontFamily: FontFamily.interRegular,
    color: Color.colorLightslategray,
    left: 20,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  sortIcon: {
    width: 15,
    height: 15,
    overflow: "hidden",
  },
  sort: {
    marginLeft: 5,
    color: Color.colorWhitesmoke_100,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  sortParent: {
    top: 117,
    left: 284,
    flexDirection: "row",
    alignItems: "center",
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
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
  },
  heartIcon: {
    left: 128,
  },
  card01: {
    left: 20,
  },
  trailRunningJacket: {
    width: 136,
  },
  heartIcon1: {
    left: 125,
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
  lazaDarkUi07: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default LAZADARKUI14;
