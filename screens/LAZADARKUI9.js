import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const LAZADARKUI9 = () => {
  return (
    <View style={styles.lazaDarkUi11}>
      <View style={styles.cta}>
        <Text style={[styles.confirmCode, styles.textTypo1]}>Confirm Code</Text>
      </View>
      <Text style={styles.resendConfirmationCodeContainer}>
        <Text style={[styles.text, styles.textTypo1]}>00:20</Text>
        <Text style={styles.resendConfirmationCode}>
          {" "}
          resend confirmation code.
        </Text>
      </Text>
      <Text style={styles.verificationCode}>Verification Code</Text>
      <View style={styles.code}>
        <View style={[styles.codeChild, styles.codeLayout]} />
        <View style={[styles.codeItem, styles.codeLayout]} />
        <View style={[styles.codeInner, styles.codeLayout]} />
        <View style={[styles.rectangleView, styles.codeLayout]} />
        <Text style={[styles.text1, styles.textTypo]}>7</Text>
        <Text style={[styles.text2, styles.textTypo]}>4</Text>
        <Text style={[styles.text3, styles.textTypo]}>2</Text>
        <Text style={[styles.text4, styles.textTypo]}>3</Text>
      </View>
      <Image
        style={styles.backIcon}
        contentFit="cover"
        source={require("../assets/back1.png")}
      />
      <Image
        style={styles.imgIcon}
        contentFit="cover"
        source={require("../assets/img1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo1: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorWhitesmoke_100,
  },
  codeLayout: {
    width: 77,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    top: 0,
    height: 98,
    position: "absolute",
  },
  textTypo: {
    lineHeight: 24,
    fontSize: FontSize.size_3xl,
    top: 37,
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  confirmCode: {
    fontSize: FontSize.headlinesHeadline17_size,
    lineHeight: 19,
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
  },
  cta: {
    top: 737,
    backgroundColor: Color.colorMediumslateblue,
    width: 375,
    height: 75,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingTop: Padding.p_mini,
    paddingBottom: Padding.p_3xs,
    left: 0,
    position: "absolute",
  },
  text: {
    color: Color.colorWhitesmoke_100,
  },
  resendConfirmationCode: {
    fontFamily: FontFamily.interRegular,
    color: Color.colorLightslategray,
  },
  resendConfirmationCodeContainer: {
    top: 694,
    left: 87,
    fontSize: FontSize.size_smi,
    lineHeight: 18,
    textAlign: "left",
    position: "absolute",
  },
  verificationCode: {
    top: "12.93%",
    left: "19.2%",
    fontSize: FontSize.size_9xl,
    letterSpacing: -0.2,
    lineHeight: 31,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
    position: "absolute",
  },
  codeChild: {
    left: 0,
  },
  codeItem: {
    left: 172,
  },
  codeInner: {
    left: 86,
  },
  rectangleView: {
    left: 258,
  },
  text1: {
    left: 32,
  },
  text2: {
    left: 118,
  },
  text3: {
    left: 203,
  },
  text4: {
    left: 289,
  },
  code: {
    top: 430,
    width: 335,
    height: 98,
    left: 20,
    position: "absolute",
  },
  backIcon: {
    top: 45,
    width: 45,
    height: 45,
    left: 20,
    position: "absolute",
  },
  imgIcon: {
    height: "20.44%",
    width: "60%",
    top: "25.12%",
    right: "20%",
    bottom: "54.43%",
    left: "20%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  lazaDarkUi11: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default LAZADARKUI9;
