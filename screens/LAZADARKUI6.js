import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const LAZADARKUI6 = () => {
  return (
    <View style={styles.lazaDarkUi14}>
      <View style={[styles.cta, styles.ctaPosition]}>
        <Text style={[styles.signUp, styles.signFlexBox]}>Sign Up</Text>
      </View>
      <Text style={[styles.signUp1, styles.signFlexBox]}>Sign Up</Text>
      <View style={[styles.username, styles.usernameLayout]}>
        <Text style={[styles.username1, styles.strongTypo]}>Username</Text>
        <View style={[styles.usernameChild, styles.ctaPosition]} />
        <Text style={[styles.estherHoward, styles.signFlexBox]}>
          Esther Howard
        </Text>
        <Image
          style={styles.checkIcon}
          contentFit="cover"
          source={require("../assets/check1.png")}
        />
      </View>
      <View style={[styles.emailAddress, styles.usernameLayout]}>
        <Text style={[styles.username1, styles.strongTypo]}>Email Address</Text>
        <View style={[styles.usernameChild, styles.ctaPosition]} />
        <Text style={[styles.estherHoward, styles.signFlexBox]}>
          bill.sanders@example.com
        </Text>
        <Image
          style={styles.checkIcon}
          contentFit="cover"
          source={require("../assets/check1.png")}
        />
      </View>
      <View style={[styles.rememberMe, styles.rememberMeLayout]}>
        <Text style={[styles.rememberMe1, styles.username1Layout]}>
          Remember me
        </Text>
        <Image
          style={[styles.switchesSwitchOn, styles.rememberMeLayout]}
          contentFit="cover"
          source={require("../assets/switches--switch-on.png")}
        />
      </View>
      <View style={[styles.password, styles.usernameLayout]}>
        <Text style={[styles.username1, styles.strongTypo]}>Password</Text>
        <View style={[styles.usernameChild, styles.ctaPosition]} />
        <Text style={[styles.estherHoward, styles.signFlexBox]}>
          HJ@#9783kja
        </Text>
        <Text style={[styles.strong, styles.strongTypo]}>Strong</Text>
      </View>
      <Image
        style={styles.backIcon}
        contentFit="cover"
        source={require("../assets/back2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ctaPosition: {
    left: 0,
    position: "absolute",
  },
  signFlexBox: {
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
  },
  usernameLayout: {
    height: 61,
    width: 335,
    left: 20,
    position: "absolute",
  },
  strongTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  rememberMeLayout: {
    height: 18,
    position: "absolute",
  },
  username1Layout: {
    lineHeight: 14,
    fontSize: FontSize.size_smi,
    left: 0,
  },
  signUp: {
    fontSize: FontSize.headlinesHeadline17_size,
    lineHeight: 19,
    fontFamily: FontFamily.interMedium,
    color: Color.colorWhitesmoke_100,
    fontWeight: "500",
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
  },
  signUp1: {
    top: "12.93%",
    left: "36%",
    fontSize: FontSize.size_9xl,
    letterSpacing: -0.2,
    lineHeight: 31,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    position: "absolute",
  },
  username1: {
    color: Color.colorLightslategray,
    lineHeight: 14,
    fontSize: FontSize.size_smi,
    left: 0,
    top: 0,
  },
  usernameChild: {
    top: 61,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    borderTopWidth: 1,
    width: 336,
    height: 1,
  },
  estherHoward: {
    top: 29,
    fontSize: FontSize.size_mini,
    lineHeight: 17,
    fontFamily: FontFamily.interMedium,
    color: Color.colorWhitesmoke_100,
    fontWeight: "500",
    left: 0,
    position: "absolute",
  },
  checkIcon: {
    top: 28,
    left: 315,
    width: 20,
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  username: {
    top: 288,
  },
  emailAddress: {
    top: 450,
  },
  rememberMe1: {
    top: 2,
    fontFamily: FontFamily.manropeMedium,
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
    fontWeight: "500",
    lineHeight: 14,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  switchesSwitchOn: {
    left: 305,
    width: 30,
    top: 0,
  },
  rememberMe: {
    top: 551,
    width: 335,
    height: 18,
    left: 20,
  },
  strong: {
    top: 31,
    left: 300,
    fontSize: FontSize.size_2xs,
    lineHeight: 12,
    color: Color.colorLimegreen_100,
  },
  password: {
    top: 369,
  },
  backIcon: {
    top: 45,
    width: 45,
    height: 45,
    left: 20,
    position: "absolute",
  },
  lazaDarkUi14: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default LAZADARKUI6;
