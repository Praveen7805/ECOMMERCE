import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const LAZADARKUI19 = () => {
  return (
    <View style={styles.lazaDarkUi03}>
      <Text style={[styles.letsGetStarted, styles.labelTypo1]}>
        Let’s Get Started
      </Text>
      <Text style={styles.alreadyHaveAnContainer}>
        <Text style={styles.alreadyHaveAnAccount}>
          <Text style={styles.alreadyHaveAn}>Already have an account?</Text>
          <Text style={styles.text}>{` `}</Text>
        </Text>
        <Text style={styles.signin}>Signin</Text>
      </Text>
      <View
        style={[styles.mastersMasterButtonMaParent, styles.backIconPosition]}
      >
        <View style={[styles.mastersMasterButtonMa, styles.rectanglePosition]}>
          <View style={[styles.container, styles.containerPosition]}>
            <View style={[styles.facebook, styles.facebookLayout]}>
              <View style={styles.facebook1}>
                <View style={[styles.rectangle, styles.rectangleLayout]} />
                <Image
                  style={[styles.vectorIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector12.png")}
                />
              </View>
            </View>
            <Text style={[styles.label, styles.labelTypo]}>Facebook</Text>
            <View style={[styles.iconRight, styles.facebookLayout]}>
              <Text style={[styles.sfSymbol, styles.ctaPosition]}>􀀁</Text>
            </View>
          </View>
        </View>
        <View
          style={[styles.mastersMasterButtonMa1, styles.rectangle1Position]}
        >
          <View style={[styles.container1, styles.containerPosition]}>
            <View style={[styles.facebook, styles.facebookLayout]}>
              <View style={styles.facebook1}>
                <View style={[styles.rectangle1, styles.rectangle1Position]} />
                <Image
                  style={[styles.vectorIcon1, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector13.png")}
                />
              </View>
            </View>
            <Text style={[styles.label, styles.labelTypo]}>Google</Text>
            <View style={[styles.iconRight, styles.facebookLayout]}>
              <Text style={[styles.sfSymbol, styles.ctaPosition]}>􀀁</Text>
            </View>
          </View>
        </View>
        <View
          style={[styles.mastersMasterButtonMa2, styles.rectangle2Position]}
        >
          <View style={[styles.container2, styles.containerPosition]}>
            <View style={[styles.facebook, styles.facebookLayout]}>
              <View style={styles.facebook1}>
                <View style={[styles.rectangle2, styles.rectangle2Position]} />
                <Image
                  style={[styles.pathIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/path.png")}
                />
              </View>
            </View>
            <Text style={[styles.label, styles.labelTypo]}>Twitter</Text>
            <View style={[styles.iconRight, styles.facebookLayout]}>
              <Text style={[styles.sfSymbol, styles.ctaPosition]}>􀀁</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.cta, styles.ctaPosition]}>
        <Text style={styles.createAnAccount}>Create an Account</Text>
      </View>
      <Image
        style={[styles.backIcon, styles.backIconPosition]}
        contentFit="cover"
        source={require("../assets/back2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  labelTypo1: {
    color: Color.colorWhitesmoke_100,
    fontWeight: "600",
    textAlign: "left",
  },
  backIconPosition: {
    left: 20,
    position: "absolute",
  },
  rectanglePosition: {
    backgroundColor: Color.colorCornflowerblue_200,
    left: 0,
    right: 0,
    position: "absolute",
  },
  containerPosition: {
    left: "50%",
    top: "50%",
    marginTop: -11,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  facebookLayout: {
    height: 22,
    width: 22,
  },
  rectangleLayout: {
    borderRadius: Border.br_5xl,
    top: 0,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  labelTypo: {
    fontFamily: FontFamily.headlinesHeadline17,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.headlinesHeadline17_size,
  },
  ctaPosition: {
    justifyContent: "center",
    left: 0,
    position: "absolute",
  },
  rectangle1Position: {
    backgroundColor: Color.colorTomato_100,
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  rectangle2Position: {
    backgroundColor: Color.colorCornflowerblue_100,
    left: 0,
    right: 0,
    position: "absolute",
  },
  letsGetStarted: {
    top: "12.93%",
    left: "20%",
    fontSize: FontSize.size_9xl,
    letterSpacing: -0.2,
    lineHeight: 31,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    position: "absolute",
  },
  alreadyHaveAn: {
    color: Color.colorLightslategray,
  },
  text: {
    color: "#1d1e20",
  },
  alreadyHaveAnAccount: {
    fontFamily: FontFamily.interRegular,
  },
  signin: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorWhitesmoke_100,
  },
  alreadyHaveAnContainer: {
    top: 695,
    left: 72,
    fontSize: FontSize.size_mini,
    lineHeight: 17,
    textAlign: "left",
    position: "absolute",
  },
  rectangle: {
    bottom: 0,
    backgroundColor: Color.colorCornflowerblue_200,
    left: 0,
    right: 0,
    position: "absolute",
  },
  vectorIcon: {
    height: "66.82%",
    width: "34.55%",
    top: "16.82%",
    right: "34.55%",
    bottom: "16.36%",
    left: "30.91%",
  },
  facebook1: {
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  facebook: {
    overflow: "hidden",
  },
  label: {
    marginLeft: 4,
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
    fontWeight: "600",
  },
  sfSymbol: {
    color: Color.darkBase,
    textAlign: "center",
    display: "flex",
    fontFamily: FontFamily.headlinesHeadline17,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.headlinesHeadline17_size,
    height: 22,
    width: 22,
    alignItems: "center",
    top: 0,
  },
  iconRight: {
    display: "none",
    marginLeft: 4,
  },
  container: {
    marginLeft: -51.5,
    alignItems: "center",
    flexDirection: "row",
  },
  mastersMasterButtonMa: {
    bottom: 120,
    borderRadius: Border.br_3xs,
    top: 0,
  },
  rectangle1: {
    borderRadius: Border.br_5xl,
    top: 0,
  },
  vectorIcon1: {
    height: "68.18%",
    width: "66.82%",
    top: "15.91%",
    right: "16.36%",
    bottom: "15.91%",
    left: "16.82%",
  },
  container1: {
    marginLeft: -41.5,
    alignItems: "center",
    flexDirection: "row",
  },
  mastersMasterButtonMa1: {
    top: 120,
    borderRadius: Border.br_3xs,
  },
  rectangle2: {
    borderRadius: Border.br_5xl,
    top: 0,
    bottom: 0,
  },
  pathIcon: {
    height: "48.64%",
    width: "59.55%",
    top: "27.27%",
    right: "19.55%",
    bottom: "24.09%",
    left: "20.91%",
  },
  container2: {
    marginLeft: -41,
    alignItems: "center",
    flexDirection: "row",
  },
  mastersMasterButtonMa2: {
    top: 60,
    bottom: 60,
    borderRadius: Border.br_3xs,
  },
  mastersMasterButtonMaParent: {
    top: 321,
    right: 20,
    bottom: 321,
  },
  createAnAccount: {
    lineHeight: 19,
    fontSize: FontSize.headlinesHeadline17_size,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
  },
  cta: {
    top: 737,
    backgroundColor: Color.colorMediumslateblue,
    width: 375,
    height: 75,
    paddingHorizontal: Padding.p_3xs,
    paddingTop: Padding.p_mini,
    paddingBottom: Padding.p_3xs,
    flexDirection: "row",
  },
  backIcon: {
    top: 45,
    width: 45,
    height: 45,
  },
  lazaDarkUi03: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default LAZADARKUI19;
