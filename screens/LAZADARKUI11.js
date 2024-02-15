import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const LAZADARKUI11 = () => {
  return (
    <View style={styles.lazaDarkUi10}>
      <View style={styles.cta}>
        <Text style={[styles.confirmPassword, styles.passwordFlexBox]}>
          Confirm Password
        </Text>
      </View>
      <Text style={[styles.newPassword, styles.passwordFlexBox]}>
        New Password
      </Text>
      <View style={[styles.password, styles.passwordLayout]}>
        <Text style={[styles.password1, styles.password1Typo]}>Password</Text>
        <View style={styles.passwordChild} />
        <Text style={[styles.hj9783kja, styles.passwordFlexBox]}>
          HJ@#9783kja
        </Text>
      </View>
      <View style={[styles.confirmPassword1, styles.passwordLayout]}>
        <Text style={[styles.password1, styles.password1Typo]}>
          Confirm Password
        </Text>
        <View style={styles.passwordChild} />
        <Text style={[styles.hj9783kja, styles.passwordFlexBox]}>
          HJ@#9783kja
        </Text>
      </View>
      <Text style={[styles.pleaseWriteYour, styles.password1Typo]}>
        Please write your new password.
      </Text>
      <Image
        style={styles.backIcon}
        contentFit="cover"
        source={require("../assets/back1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  passwordFlexBox: {
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
  },
  passwordLayout: {
    height: 61,
    width: 335,
    left: 20,
    position: "absolute",
  },
  password1Typo: {
    color: Color.colorLightslategray,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  confirmPassword: {
    fontSize: FontSize.headlinesHeadline17_size,
    lineHeight: 19,
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
    position: "absolute",
  },
  newPassword: {
    top: "12.93%",
    left: "23.47%",
    fontSize: FontSize.size_9xl,
    letterSpacing: -0.2,
    lineHeight: 31,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    position: "absolute",
  },
  password1: {
    top: 0,
    lineHeight: 14,
    left: 0,
  },
  passwordChild: {
    top: 61,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    borderTopWidth: 1,
    width: 336,
    height: 1,
    left: 0,
    position: "absolute",
  },
  hj9783kja: {
    top: 29,
    fontSize: FontSize.size_mini,
    lineHeight: 17,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorWhitesmoke_100,
    left: 0,
    position: "absolute",
  },
  password: {
    top: 322,
  },
  confirmPassword1: {
    top: 403,
  },
  pleaseWriteYour: {
    top: 694,
    left: 87,
    lineHeight: 18,
  },
  backIcon: {
    top: 45,
    width: 45,
    height: 45,
    left: 20,
    position: "absolute",
  },
  lazaDarkUi10: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default LAZADARKUI11;
