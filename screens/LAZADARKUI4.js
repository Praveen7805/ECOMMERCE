import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const LAZADARKUI4 = () => {
  return (
    <View style={styles.lazaDarkUi16}>
      <Image
        style={styles.backIcon}
        contentFit="cover"
        source={require("../assets/back.png")}
      />
      <Text style={[styles.address, styles.addressTypo]}>Address</Text>
      <View style={styles.cta}>
        <Text style={[styles.saveAddress, styles.saveTypo]}>Save Address</Text>
      </View>
      <View style={[styles.name, styles.nameLayout]}>
        <View style={[styles.mrhRajuWrapper, styles.wrapperPosition]}>
          <Text style={[styles.mrhRaju, styles.mrhRajuTypo]}>Mrh Raju</Text>
        </View>
        <Text style={[styles.name1, styles.saveTypo]}>Name</Text>
      </View>
      <View style={[styles.phoneNumber, styles.nameLayout]}>
        <View style={[styles.mrhRajuWrapper, styles.wrapperPosition]}>
          <Text style={[styles.mrhRaju, styles.mrhRajuTypo]}>
            +880 1453-987533
          </Text>
        </View>
        <Text style={[styles.name1, styles.saveTypo]}>Phone Number</Text>
      </View>
      <View style={[styles.address1, styles.nameLayout]}>
        <View style={[styles.mrhRajuWrapper, styles.wrapperPosition]}>
          <Text style={[styles.mrhRaju, styles.mrhRajuTypo]}>
            Chhatak, Sunamgonj 12/8AB
          </Text>
        </View>
        <Text style={[styles.name1, styles.saveTypo]}>Address</Text>
      </View>
      <View style={[styles.country, styles.cityLayout]}>
        <View style={[styles.bangladeshWrapper, styles.cityLayout]}>
          <Text style={[styles.mrhRaju, styles.mrhRajuTypo]}>Bangladesh</Text>
        </View>
        <Text style={[styles.name1, styles.saveTypo]}>Country</Text>
      </View>
      <View style={[styles.city, styles.cityLayout]}>
        <View style={[styles.bangladeshWrapper, styles.cityLayout]}>
          <Text style={[styles.mrhRaju, styles.mrhRajuTypo]}>Sylhet</Text>
        </View>
        <Text style={[styles.name1, styles.saveTypo]}>City</Text>
      </View>
      <View style={[styles.save, styles.btnLayout]}>
        <Text style={[styles.saveAsPrimary, styles.mrhRajuTypo]}>
          Save as primary address
        </Text>
        <View style={[styles.onBtn, styles.btnLayout]}>
          <View style={[styles.onBtnChild, styles.btnLayout]} />
          <Image
            style={styles.onBtnItem}
            contentFit="cover"
            source={require("../assets/ellipse-774.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addressTypo: {
    textAlign: "left",
    lineHeight: 19,
    fontSize: FontSize.headlinesHeadline17_size,
  },
  saveTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorWhitesmoke_100,
  },
  nameLayout: {
    height: 79,
    width: 335,
    left: 20,
    position: "absolute",
  },
  wrapperPosition: {
    paddingRight: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_mini,
    alignItems: "center",
    height: 50,
    backgroundColor: Color.colorDarkslategray_300,
    borderRadius: Border.br_3xs,
    top: 29,
    paddingBottom: Padding.p_3xs,
    flexDirection: "row",
    left: 0,
  },
  mrhRajuTypo: {
    lineHeight: 17,
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  cityLayout: {
    width: 160,
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
  address: {
    top: 58,
    left: 153,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhitesmoke_100,
    textAlign: "left",
    lineHeight: 19,
    fontSize: FontSize.headlinesHeadline17_size,
    position: "absolute",
  },
  saveAddress: {
    textAlign: "left",
    lineHeight: 19,
    fontSize: FontSize.headlinesHeadline17_size,
    fontWeight: "500",
  },
  cta: {
    top: 737,
    backgroundColor: Color.colorMediumslateblue,
    width: 375,
    height: 75,
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingTop: Padding.p_mini,
    paddingBottom: Padding.p_3xs,
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  mrhRaju: {
    fontFamily: FontFamily.interRegular,
    color: Color.colorLightslategray,
  },
  mrhRajuWrapper: {
    width: 335,
    position: "absolute",
  },
  name1: {
    top: 0,
    left: 0,
    textAlign: "left",
    lineHeight: 19,
    fontSize: FontSize.headlinesHeadline17_size,
    fontWeight: "500",
    position: "absolute",
  },
  name: {
    top: 115,
  },
  phoneNumber: {
    top: 303,
  },
  address1: {
    top: 397,
  },
  bangladeshWrapper: {
    paddingRight: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_mini,
    alignItems: "center",
    height: 50,
    backgroundColor: Color.colorDarkslategray_300,
    borderRadius: Border.br_3xs,
    top: 29,
    paddingBottom: Padding.p_3xs,
    flexDirection: "row",
    left: 0,
  },
  country: {
    top: 209,
    width: 160,
    height: 79,
    left: 20,
  },
  city: {
    left: 195,
    top: 209,
    width: 160,
    height: 79,
  },
  saveAsPrimary: {
    top: 4,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorWhitesmoke_100,
    left: 0,
    position: "absolute",
  },
  onBtnChild: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorMediumseagreen,
    top: 0,
    left: 0,
    width: 45,
  },
  onBtnItem: {
    top: 2,
    left: 22,
    width: 21,
    height: 21,
    position: "absolute",
  },
  onBtn: {
    left: 290,
    top: 0,
    width: 45,
  },
  save: {
    top: 496,
    width: 335,
    left: 20,
  },
  lazaDarkUi16: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default LAZADARKUI4;
