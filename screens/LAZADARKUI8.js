import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const LAZADARKUI8 = () => {
  return (
    <View style={styles.lazaDarkUi12}>
      <View style={[styles.cta, styles.ctaPosition]}>
        <Text style={[styles.confirmMail, styles.confirmMailClr]}>
          Confirm Mail
        </Text>
      </View>
      <Text style={[styles.pleaseWriteYour, styles.emailAddress1Typo]}>
        Please write your email to receive a confirmation code to set a new
        password.
      </Text>
      <View style={[styles.emailAddress, styles.backIconPosition]}>
        <Text style={[styles.emailAddress1, styles.emailAddress1Typo]}>
          Email Address
        </Text>
        <View style={[styles.emailAddressChild, styles.ctaPosition]} />
        <Text style={[styles.billsandersexamplecom, styles.confirmMailClr]}>
          bill.sanders@example.com
        </Text>
      </View>
      <Text style={[styles.forgotPassword, styles.imgIconPosition]}>
        Forgot Password
      </Text>
      <Image
        style={[styles.backIcon, styles.backIconPosition]}
        contentFit="cover"
        source={require("../assets/back1.png")}
      />
      <Image
        style={[styles.imgIcon, styles.imgIconPosition]}
        contentFit="cover"
        source={require("../assets/img.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ctaPosition: {
    position: "absolute",
    left: 0,
  },
  confirmMailClr: {
    color: Color.colorWhitesmoke_100,
    textAlign: "left",
  },
  emailAddress1Typo: {
    color: Color.colorLightslategray,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  backIconPosition: {
    left: 20,
    position: "absolute",
  },
  imgIconPosition: {
    left: "20%",
    position: "absolute",
  },
  confirmMail: {
    fontSize: FontSize.headlinesHeadline17_size,
    lineHeight: 19,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
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
  },
  pleaseWriteYour: {
    top: 676,
    left: 56,
    lineHeight: 18,
    textAlign: "center",
    width: 263,
  },
  emailAddress1: {
    top: 0,
    lineHeight: 14,
    textAlign: "left",
    left: 0,
  },
  emailAddressChild: {
    top: 61,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    borderTopWidth: 1,
    width: 336,
    height: 1,
    left: 0,
  },
  billsandersexamplecom: {
    top: 29,
    fontSize: FontSize.size_mini,
    lineHeight: 17,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorWhitesmoke_100,
    left: 0,
    position: "absolute",
  },
  emailAddress: {
    top: 450,
    width: 335,
    height: 61,
  },
  forgotPassword: {
    top: "12.93%",
    fontSize: FontSize.size_9xl,
    letterSpacing: -0.2,
    lineHeight: 31,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
  },
  backIcon: {
    top: 45,
    width: 45,
    height: 45,
  },
  imgIcon: {
    height: "20.44%",
    width: "60%",
    top: "25.12%",
    right: "20%",
    bottom: "54.43%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  lazaDarkUi12: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default LAZADARKUI8;
