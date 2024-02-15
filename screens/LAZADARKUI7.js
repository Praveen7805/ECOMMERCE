import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const LAZADARKUI7 = () => {
  return (
    <View style={styles.lazaDarkUi13}>
      <View style={styles.cta}>
        <Text style={[styles.login, styles.loginTypo]}>Login</Text>
      </View>
      <Text style={styles.welcome}>Welcome</Text>
      <View style={[styles.username, styles.usernameLayout]}>
        <Text style={[styles.username1, styles.yourClr]}>Username</Text>
        <View style={styles.usernameChild} />
        <Text style={[styles.estherHoward, styles.estherHowardTypo]}>
          Esther Howard
        </Text>
        <Image
          style={styles.checkIcon}
          contentFit="cover"
          source={require("../assets/check1.png")}
        />
      </View>
      <View style={[styles.rememberMe, styles.rememberMeLayout]}>
        <Text style={[styles.rememberMe1, styles.username1Typo]}>
          Remember me
        </Text>
        <Image
          style={[styles.switchesSwitchOn, styles.rememberMeLayout]}
          contentFit="cover"
          source={require("../assets/switches--switch-on.png")}
        />
      </View>
      <View style={[styles.password, styles.usernameLayout]}>
        <Text style={[styles.username1, styles.yourClr]}>Password</Text>
        <View style={styles.usernameChild} />
        <Text style={[styles.estherHoward, styles.estherHowardTypo]}>
          HJ@#9783kja
        </Text>
        <Text style={styles.strong}>Strong</Text>
      </View>
      <Text style={[styles.pleaseEnterYour, styles.estherHowardTypo]}>
        Please enter your data to continue
      </Text>
      <Text style={[styles.forgotPassword, styles.estherHowardTypo]}>
        Forgot password?
      </Text>
      <Text style={styles.byConnectingYourContainer}>
        <Text
          style={styles.yourClr}
        >{`By connecting your account confirm that you agree with our `}</Text>
        <Text style={[styles.termAndCondition, styles.loginTypo]}>
          Term and Condition
        </Text>
      </Text>
      <Image
        style={styles.backIcon}
        contentFit="cover"
        source={require("../assets/back2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginTypo: {
    fontFamily: FontFamily.interMedium,
    color: Color.colorWhitesmoke_100,
    fontWeight: "500",
  },
  usernameLayout: {
    height: 61,
    width: 335,
    left: 20,
    position: "absolute",
  },
  yourClr: {
    color: Color.colorLightslategray,
    fontFamily: FontFamily.interRegular,
  },
  estherHowardTypo: {
    lineHeight: 17,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
  },
  rememberMeLayout: {
    height: 18,
    position: "absolute",
  },
  username1Typo: {
    lineHeight: 14,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  login: {
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
  welcome: {
    top: "12.93%",
    left: "33.33%",
    fontSize: FontSize.size_9xl,
    letterSpacing: -0.2,
    lineHeight: 31,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
    position: "absolute",
  },
  username1: {
    lineHeight: 14,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    left: 0,
    position: "absolute",
    top: 0,
  },
  usernameChild: {
    top: 61,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    borderTopWidth: 1,
    width: 336,
    height: 1,
    left: 0,
    position: "absolute",
  },
  estherHoward: {
    top: 29,
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 0,
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
    top: 322,
  },
  rememberMe1: {
    top: 2,
    fontFamily: FontFamily.manropeMedium,
    color: Color.colorWhitesmoke_100,
    fontWeight: "500",
    lineHeight: 14,
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
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  password: {
    top: 403,
  },
  pleaseEnterYour: {
    top: 141,
    left: 66,
    color: Color.colorLightslategray,
    fontFamily: FontFamily.interRegular,
  },
  forgotPassword: {
    top: 494,
    left: 228,
    color: "#e96459",
    fontFamily: FontFamily.interRegular,
  },
  termAndCondition: {
    color: Color.colorWhitesmoke_100,
  },
  byConnectingYourContainer: {
    top: 675,
    left: 25,
    lineHeight: 18,
    textAlign: "center",
    width: 326,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  backIcon: {
    top: 45,
    width: 45,
    height: 45,
    left: 20,
    position: "absolute",
  },
  lazaDarkUi13: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default LAZADARKUI7;
