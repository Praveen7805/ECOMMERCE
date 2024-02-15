import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const LAZADARKUI2 = () => {
  return (
    <View style={styles.lazaDarkUi18}>
      <Image
        style={[styles.backIcon, styles.namePosition]}
        contentFit="cover"
        source={require("../assets/back1.png")}
      />
      <Text style={styles.addReview}>Add Review</Text>
      <View style={[styles.name, styles.namePosition]}>
        <View style={styles.typeYourNameWrapper}>
          <Text style={styles.typeYourName}>Type your name</Text>
        </View>
        <Text style={[styles.name1, styles.name1Typo]}>Name</Text>
      </View>
      <View style={[styles.experience, styles.namePosition]}>
        <View
          style={[styles.describeYourExperienceWrapper, styles.ctaPosition]}
        >
          <Text style={styles.typeYourName}>Describe your experience?</Text>
        </View>
        <Text style={[styles.name1, styles.name1Typo]}>
          How was your experience ?
        </Text>
      </View>
      <View style={[styles.star, styles.namePosition]}>
        <Text style={[styles.name1, styles.name1Typo]}>Star</Text>
        <View style={[styles.slider, styles.sliderLayout]}>
          <Image
            style={styles.sliderChild}
            contentFit="cover"
            source={require("../assets/rectangle-579.png")}
          />
          <Image
            style={[styles.sliderItem, styles.sliderLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-760.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>0.0</Text>
          <Text style={[styles.text1, styles.textTypo]}>5.0</Text>
        </View>
      </View>
      <View style={[styles.cta, styles.ctaPosition]}>
        <Text style={styles.name1Typo}>Submit Review</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  namePosition: {
    left: 20,
    position: "absolute",
  },
  name1Typo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
    lineHeight: 19,
    fontSize: FontSize.headlinesHeadline17_size,
  },
  ctaPosition: {
    paddingTop: Padding.p_mini,
    paddingBottom: Padding.p_3xs,
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  sliderLayout: {
    height: 20,
    position: "absolute",
  },
  textTypo: {
    lineHeight: 12,
    fontSize: FontSize.size_2xs,
    top: 4,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
    position: "absolute",
  },
  backIcon: {
    top: 45,
    width: 45,
    height: 45,
  },
  addReview: {
    top: 58,
    left: 139,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
    lineHeight: 19,
    fontSize: FontSize.headlinesHeadline17_size,
    position: "absolute",
  },
  typeYourName: {
    fontSize: FontSize.size_mini,
    lineHeight: 17,
    fontFamily: FontFamily.interRegular,
    color: Color.colorLightslategray,
    textAlign: "left",
  },
  typeYourNameWrapper: {
    height: 50,
    alignItems: "center",
    paddingTop: Padding.p_3xs,
    paddingBottom: Padding.p_3xs,
    flexDirection: "row",
    paddingRight: Padding.p_3xs,
    paddingLeft: Padding.p_mini,
    backgroundColor: Color.colorDarkslategray_300,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 29,
    width: 335,
    position: "absolute",
  },
  name1: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  name: {
    top: 115,
    height: 79,
    width: 335,
  },
  describeYourExperienceWrapper: {
    height: 213,
    paddingRight: Padding.p_3xs,
    paddingLeft: Padding.p_mini,
    backgroundColor: Color.colorDarkslategray_300,
    top: 29,
    paddingTop: Padding.p_mini,
    borderRadius: Border.br_3xs,
    width: 335,
  },
  experience: {
    top: 214,
    height: 242,
    width: 335,
  },
  sliderChild: {
    top: 3,
    left: 27,
    width: 281,
    height: 15,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  sliderItem: {
    left: 144,
    width: 20,
    top: 0,
  },
  text: {
    left: 0,
  },
  text1: {
    left: 318,
  },
  slider: {
    top: 31,
    left: 0,
    width: 335,
  },
  star: {
    top: 476,
    height: 51,
    width: 335,
  },
  cta: {
    top: 737,
    backgroundColor: Color.colorMediumslateblue,
    width: 375,
    height: 75,
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xs,
  },
  lazaDarkUi18: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default LAZADARKUI2;
