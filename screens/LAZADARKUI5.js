import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const LAZADARKUI5 = () => {
  return (
    <View style={styles.lazaDarkUi15}>
      <Image
        style={styles.backIcon}
        contentFit="cover"
        source={require("../assets/back.png")}
      />
      <Text style={[styles.payment, styles.cardTypo]}>Payment</Text>
      <View style={styles.cta}>
        <Text style={[styles.saveCard, styles.mrhCardTypo]}>Save Card</Text>
      </View>
      <View style={[styles.card2, styles.cardLayout1]}>
        <Image
          style={[styles.maskGroupIcon, styles.cardLayout1]}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
        <Text style={[styles.mrhRaju, styles.textTypo1]}>Mrh Raju</Text>
        <Text style={[styles.text, styles.textTypo1]}>$3,763.87</Text>
        <Image
          style={[styles.frameIcon, styles.frameIconLayout]}
          contentFit="cover"
          source={require("../assets/frame1.png")}
        />
        <Text style={[styles.visaClassic, styles.visaTypo]}>Visa Classic</Text>
        <Text style={[styles.text1, styles.textTypo]}>5254 **** **** 7690</Text>
      </View>
      <View style={[styles.card1, styles.cardLayout1]}>
        <Image
          style={[styles.maskGroupIcon, styles.cardLayout1]}
          contentFit="cover"
          source={require("../assets/mask-group2.png")}
        />
        <Text style={[styles.mrhRaju1, styles.textTypo1]}>Mrh Raju</Text>
        <Text style={[styles.text2, styles.textTypo1]}>$3,763.87</Text>
        <Image
          style={[styles.frameIcon1, styles.frameIconLayout]}
          contentFit="cover"
          source={require("../assets/frame1.png")}
        />
        <Text style={[styles.visaClassic1, styles.visaTypo]}>Visa Classic</Text>
        <Text style={[styles.text3, styles.textTypo]}>5254 **** **** 7690</Text>
      </View>
      <View style={[styles.cardOwner, styles.cardLayout]}>
        <View style={[styles.mrhRajuWrapper, styles.containerPosition]}>
          <Text style={[styles.mrhRaju2, styles.textTypo]}>Mrh Raju</Text>
        </View>
        <Text style={[styles.cardOwner1, styles.mrhCardTypo]}>Card Owner</Text>
      </View>
      <View style={[styles.cardNumber, styles.cardLayout]}>
        <View style={[styles.mrhRajuWrapper, styles.containerPosition]}>
          <Text style={[styles.mrhRaju2, styles.textTypo]}>
            5254 7634 8734 7690
          </Text>
        </View>
        <Text style={[styles.cardOwner1, styles.mrhCardTypo]}>Card Number</Text>
      </View>
      <View style={[styles.exp, styles.expLayout]}>
        <View style={[styles.container, styles.expLayout]}>
          <Text style={[styles.mrhRaju2, styles.textTypo]}>24/24</Text>
        </View>
        <Text style={[styles.cardOwner1, styles.mrhCardTypo]}>EXP</Text>
      </View>
      <View style={[styles.cvv, styles.expLayout]}>
        <View style={[styles.container, styles.expLayout]}>
          <Text style={[styles.mrhRaju2, styles.textTypo]}>7763</Text>
        </View>
        <Text style={[styles.cardOwner1, styles.mrhCardTypo]}>CVV</Text>
      </View>
      <View style={styles.frameView}>
        <View style={styles.view}>
          <Image
            style={[styles.plusIcon, styles.plusIconPosition]}
            contentFit="cover"
            source={require("../assets/plus.png")}
          />
          <Text style={[styles.addNewCard, styles.mrhCardTypo]}>
            Add new card
          </Text>
        </View>
      </View>
      <View style={[styles.save, styles.btnLayout]}>
        <Text style={[styles.saveAsPrimary, styles.textTypo1]}>
          Save as primary address
        </Text>
        <View style={[styles.onBtn, styles.btnLayout]}>
          <View style={[styles.onBtnChild, styles.btnLayout]} />
          <Image
            style={[styles.onBtnItem, styles.plusIconPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-774.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardTypo: {
    textAlign: "left",
    lineHeight: 19,
    fontSize: FontSize.headlinesHeadline17_size,
  },
  mrhCardTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  cardLayout1: {
    height: 185,
    width: 300,
    position: "absolute",
  },
  textTypo1: {
    lineHeight: 17,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
    position: "absolute",
  },
  frameIconLayout: {
    height: 30,
    width: 30,
    left: 245,
    position: "absolute",
    overflow: "hidden",
  },
  visaTypo: {
    lineHeight: 14,
    fontSize: FontSize.size_smi,
    left: 25,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interRegular,
    lineHeight: 17,
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  cardLayout: {
    height: 79,
    width: 335,
    left: 20,
    position: "absolute",
  },
  containerPosition: {
    paddingRight: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_mini,
    backgroundColor: Color.colorDarkslategray_300,
    top: 29,
    alignItems: "center",
    height: 50,
    borderRadius: Border.br_3xs,
    paddingBottom: Padding.p_3xs,
    flexDirection: "row",
    left: 0,
  },
  expLayout: {
    width: 160,
    position: "absolute",
  },
  plusIconPosition: {
    top: 2,
    position: "absolute",
  },
  btnLayout: {
    height: 25,
    position: "absolute",
  },
  backIcon: {
    top: 45,
    height: 45,
    width: 45,
    left: 20,
    position: "absolute",
  },
  payment: {
    top: 58,
    left: 151,
    color: Color.colorWhitesmoke_100,
    textAlign: "left",
    lineHeight: 19,
    fontSize: FontSize.headlinesHeadline17_size,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  saveCard: {
    textAlign: "left",
    lineHeight: 19,
    fontSize: FontSize.headlinesHeadline17_size,
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
    justifyContent: "center",
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  maskGroupIcon: {
    top: 0,
    left: 0,
  },
  mrhRaju: {
    top: 28,
    left: 25,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  text: {
    top: 146,
    left: 25,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  frameIcon: {
    top: 22,
  },
  visaClassic: {
    top: 92,
  },
  text1: {
    top: 114,
    letterSpacing: 5.8,
    fontFamily: FontFamily.interRegular,
    left: 25,
    color: Color.colorWhitesmoke_100,
    position: "absolute",
  },
  card2: {
    left: 335,
    top: 115,
    width: 300,
  },
  mrhRaju1: {
    top: 25,
    left: 25,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  text2: {
    top: 143,
    left: 25,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  frameIcon1: {
    top: 19,
  },
  visaClassic1: {
    top: 89,
  },
  text3: {
    top: 111,
    letterSpacing: 5.8,
    fontFamily: FontFamily.interRegular,
    left: 25,
    color: Color.colorWhitesmoke_100,
    position: "absolute",
  },
  card1: {
    top: 115,
    width: 300,
    left: 20,
  },
  mrhRaju2: {
    color: Color.colorLightslategray,
  },
  mrhRajuWrapper: {
    width: 335,
    position: "absolute",
  },
  cardOwner1: {
    top: 0,
    left: 0,
    textAlign: "left",
    lineHeight: 19,
    fontSize: FontSize.headlinesHeadline17_size,
    color: Color.colorWhitesmoke_100,
    position: "absolute",
  },
  cardOwner: {
    top: 385,
  },
  cardNumber: {
    top: 479,
  },
  container: {
    paddingRight: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_mini,
    backgroundColor: Color.colorDarkslategray_300,
    top: 29,
    alignItems: "center",
    height: 50,
    borderRadius: Border.br_3xs,
    paddingBottom: Padding.p_3xs,
    flexDirection: "row",
    left: 0,
  },
  exp: {
    top: 573,
    width: 160,
    height: 79,
    left: 20,
  },
  cvv: {
    left: 195,
    top: 573,
    width: 160,
    height: 79,
  },
  plusIcon: {
    width: 15,
    height: 15,
    left: 0,
    overflow: "hidden",
  },
  addNewCard: {
    color: Color.colorMediumslateblue,
    top: 0,
    textAlign: "left",
    lineHeight: 19,
    fontSize: FontSize.headlinesHeadline17_size,
    fontWeight: "500",
    left: 20,
    position: "absolute",
  },
  view: {
    width: 133,
    height: 19,
  },
  frameView: {
    top: 315,
    backgroundColor: "#2f244e",
    borderStyle: "solid",
    borderColor: Color.colorMediumslateblue,
    borderWidth: 1,
    alignItems: "center",
    height: 50,
    borderRadius: Border.br_3xs,
    width: 335,
    justifyContent: "center",
    flexDirection: "row",
    left: 20,
    position: "absolute",
  },
  saveAsPrimary: {
    top: 4,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 0,
  },
  onBtnChild: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorMediumseagreen,
    top: 0,
    left: 0,
    width: 45,
  },
  onBtnItem: {
    left: 22,
    width: 21,
    height: 21,
  },
  onBtn: {
    left: 290,
    top: 0,
    width: 45,
  },
  save: {
    top: 672,
    width: 335,
    left: 20,
  },
  lazaDarkUi15: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default LAZADARKUI5;
