import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const LAZADARKUI18 = () => {
  return (
    <View style={styles.lazaDarkUi02}>
      <Image
        style={[styles.lazaDarkUi02Child, styles.lazaLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-777.png")}
      />
      <Image
        style={[styles.lazaDarkUi02Item, styles.lazaLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-777.png")}
      />
      <Image
        style={styles.lazaDarkUi02Inner}
        contentFit="cover"
        source={require("../assets/ellipse-779.png")}
      />
      <Image
        style={[
          styles.smilingPrettyGirlWithWavyIcon,
          styles.menwomenChildPosition,
        ]}
        contentFit="cover"
        source={require("../assets/smilingprettygirlwithwavyhairstylestandingonelegpurplewallcheerfulbrunettefemalemodeldancingwhitesneakersremovebg-1.png")}
      />
      <View style={[styles.menwomen, styles.menwomenLayout]}>
        <Image
          style={[styles.menwomenChild, styles.menwomenLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-594.png")}
        />
        <Text style={[styles.skip, styles.menTypo]}>Skip</Text>
        <Text style={[styles.lookGoodFeel, styles.womenClr]}>
          Look Good, Feel Good
        </Text>
        <Text
          style={styles.createYourIndividual}
        >{`Create your individual & unique style and look amazing everyday.`}</Text>
        <View style={[styles.menWrapper, styles.wrapperFlexBox]}>
          <Text style={styles.menTypo}>Men</Text>
        </View>
        <View style={[styles.womenWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.women, styles.womenClr]}>Women</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lazaLayout: {
    height: 250,
    width: 250,
    position: "absolute",
  },
  menwomenChildPosition: {
    left: 0,
    top: 0,
  },
  menwomenLayout: {
    height: 244,
    width: 345,
    position: "absolute",
  },
  menTypo: {
    textAlign: "left",
    color: Color.colorLightslategray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 19,
    fontSize: FontSize.headlinesHeadline17_size,
  },
  womenClr: {
    color: Color.colorWhitesmoke_100,
    textAlign: "left",
  },
  wrapperFlexBox: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 60,
    width: 152,
    borderRadius: Border.br_3xs,
    top: 125,
    position: "absolute",
  },
  lazaDarkUi02Child: {
    top: -81,
    left: -42,
  },
  lazaDarkUi02Item: {
    top: 503,
    left: 194,
  },
  lazaDarkUi02Inner: {
    top: 381,
    left: -74,
    width: 148,
    height: 148,
    position: "absolute",
  },
  smilingPrettyGirlWithWavyIcon: {
    height: 812,
    position: "absolute",
    width: 375,
  },
  menwomenChild: {
    borderRadius: 20,
    left: 0,
    top: 0,
  },
  skip: {
    top: 205,
    left: 154,
    position: "absolute",
  },
  lookGoodFeel: {
    top: 25,
    left: 42,
    fontSize: 25,
    letterSpacing: -0.2,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    position: "absolute",
  },
  createYourIndividual: {
    top: 63,
    left: 25,
    fontSize: FontSize.size_mini,
    lineHeight: 21,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    width: 294,
    color: Color.colorLightslategray,
    position: "absolute",
  },
  menWrapper: {
    backgroundColor: Color.colorDarkslategray_300,
    left: 15,
  },
  women: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 19,
    fontSize: FontSize.headlinesHeadline17_size,
    color: Color.colorWhitesmoke_100,
  },
  womenWrapper: {
    left: 177,
    backgroundColor: Color.colorMediumslateblue,
  },
  menwomen: {
    top: 553,
    left: 15,
  },
  lazaDarkUi02: {
    backgroundColor: Color.colorGray_200,
    height: 871,
    overflow: "hidden",
    width: 375,
  },
});

export default LAZADARKUI18;
