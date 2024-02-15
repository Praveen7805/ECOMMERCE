import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const LAZADARKUI16 = () => {
  return (
    <View style={styles.lazaDarkUi05}>
      <Image
        style={styles.backIcon}
        contentFit="cover"
        source={require("../assets/back.png")}
      />
      <Text style={styles.addNewCard}>Add New Card</Text>
      <View style={[styles.vectorWrapper, styles.wrapperFlexBox]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector9.png")}
        />
      </View>
      <View style={[styles.image10Wrapper, styles.wrapperFlexBox]}>
        <Image
          style={styles.image10Icon}
          contentFit="cover"
          source={require("../assets/image-10.png")}
        />
      </View>
      <View style={[styles.image9Wrapper, styles.wrapperFlexBox]}>
        <Image
          style={styles.image9Icon}
          contentFit="cover"
          source={require("../assets/image-9.png")}
        />
      </View>
      <View style={styles.cta}>
        <Text style={styles.cardTypo}>Add Card</Text>
      </View>
      <View style={[styles.cardOwner, styles.cardLayout]}>
        <View style={[styles.mrhRajuWrapper, styles.containerPosition]}>
          <Text style={styles.mrhRaju}>Mrh Raju</Text>
        </View>
        <Text style={[styles.cardOwner1, styles.cardTypo]}>Card Owner</Text>
      </View>
      <View style={[styles.cardNumber, styles.cardLayout]}>
        <View style={[styles.mrhRajuWrapper, styles.containerPosition]}>
          <Text style={styles.mrhRaju}>5254 7634 8734 7690</Text>
        </View>
        <Text style={[styles.cardOwner1, styles.cardTypo]}>Card Number</Text>
      </View>
      <View style={[styles.exp, styles.expLayout]}>
        <View style={[styles.container, styles.expLayout]}>
          <Text style={styles.mrhRaju}>24/24</Text>
        </View>
        <Text style={[styles.cardOwner1, styles.cardTypo]}>EXP</Text>
      </View>
      <View style={[styles.cvv, styles.expLayout]}>
        <View style={[styles.container, styles.expLayout]}>
          <Text style={styles.mrhRaju}>7763</Text>
        </View>
        <Text style={[styles.cardOwner1, styles.cardTypo]}>CVV</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperFlexBox: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_3xs,
    top: 115,
    position: "absolute",
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
    top: 29,
    paddingBottom: Padding.p_3xs,
    left: 0,
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    backgroundColor: Color.colorDarkslategray_300,
    borderRadius: Border.br_3xs,
  },
  cardTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
    lineHeight: 19,
    fontSize: FontSize.headlinesHeadline17_size,
  },
  expLayout: {
    width: 160,
    position: "absolute",
  },
  backIcon: {
    top: 45,
    width: 45,
    height: 45,
    left: 20,
    position: "absolute",
  },
  addNewCard: {
    top: 58,
    left: 128,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
    lineHeight: 19,
    fontSize: FontSize.headlinesHeadline17_size,
    position: "absolute",
  },
  vectorIcon: {
    width: 20,
    height: 20,
  },
  vectorWrapper: {
    left: 254,
    flexDirection: "row",
    height: 50,
    width: 100,
    backgroundColor: Color.colorDarkslategray_300,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_3xs,
    top: 115,
  },
  image10Icon: {
    width: 16,
    height: 18,
  },
  image10Wrapper: {
    left: 137,
    flexDirection: "row",
    height: 50,
    width: 100,
    backgroundColor: Color.colorDarkslategray_300,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_3xs,
    top: 115,
  },
  image9Icon: {
    width: 26,
    height: 17,
  },
  image9Wrapper: {
    backgroundColor: "#ffeee3",
    borderStyle: "solid",
    borderColor: "#ff5f00",
    borderWidth: 1,
    width: 101,
    height: 51,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_3xs,
    top: 115,
    left: 20,
  },
  cta: {
    top: 737,
    backgroundColor: Color.colorMediumslateblue,
    width: 375,
    height: 75,
    paddingHorizontal: Padding.p_3xs,
    paddingTop: Padding.p_mini,
    paddingBottom: Padding.p_3xs,
    left: 0,
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
  },
  mrhRaju: {
    fontSize: FontSize.size_mini,
    lineHeight: 17,
    fontFamily: FontFamily.interRegular,
    color: Color.colorLightslategray,
    textAlign: "left",
  },
  mrhRajuWrapper: {
    width: 335,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_mini,
    top: 29,
    position: "absolute",
  },
  cardOwner1: {
    top: 0,
    left: 0,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  cardOwner: {
    top: 195,
  },
  cardNumber: {
    top: 289,
  },
  container: {
    paddingRight: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_mini,
    top: 29,
    paddingBottom: Padding.p_3xs,
    left: 0,
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    backgroundColor: Color.colorDarkslategray_300,
    borderRadius: Border.br_3xs,
  },
  exp: {
    top: 383,
    width: 160,
    height: 79,
    left: 20,
  },
  cvv: {
    left: 195,
    top: 383,
    width: 160,
    height: 79,
  },
  lazaDarkUi05: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default LAZADARKUI16;
