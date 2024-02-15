import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const LAZADARKUI = () => {
  return (
    <View style={styles.lazaDarkUi20}>
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
      <Image
        style={styles.undrawOrderConfirmedAaw71Icon}
        contentFit="cover"
        source={require("../assets/undraw-order-confirmed-aaw7-1.png")}
      />
      <Text style={styles.orderConfirmed}>Order Confirmed!</Text>
      <Text style={styles.yourOrderHas}>
        Your order has been confirmed, we will send you confirmation email
        shortly.
      </Text>
      <Image
        style={styles.backIcon}
        contentFit="cover"
        source={require("../assets/back.png")}
      />
      <View style={[styles.cta, styles.ctaFlexBox]}>
        <Text style={[styles.continueShopping, styles.goToOrdersTypo]}>
          Continue Shopping
        </Text>
      </View>
      <View style={[styles.gto, styles.ctaFlexBox]}>
        <Text style={[styles.goToOrders, styles.goToOrdersTypo]}>
          Go to Orders
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ctaFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
  },
  goToOrdersTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 19,
    fontSize: FontSize.headlinesHeadline17_size,
    textAlign: "left",
  },
  maskGroupIcon: {
    top: 145,
    left: -93,
    width: 566,
    height: 566,
    position: "absolute",
  },
  undrawOrderConfirmedAaw71Icon: {
    top: 196,
    left: 48,
    width: 279,
    height: 232,
    position: "absolute",
    overflow: "hidden",
  },
  orderConfirmed: {
    top: 458,
    left: 69,
    fontSize: FontSize.size_9xl,
    lineHeight: 31,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
    position: "absolute",
  },
  yourOrderHas: {
    top: 499,
    left: 27,
    fontSize: FontSize.size_mini,
    lineHeight: 21,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    width: 322,
    color: Color.colorLightslategray,
    position: "absolute",
  },
  backIcon: {
    top: 45,
    width: 45,
    height: 45,
    left: 20,
    position: "absolute",
  },
  continueShopping: {
    color: Color.colorWhitesmoke_100,
    fontWeight: "500",
    lineHeight: 19,
    fontSize: FontSize.headlinesHeadline17_size,
  },
  cta: {
    top: 737,
    left: 0,
    backgroundColor: Color.colorMediumslateblue,
    width: 375,
    height: 75,
    paddingHorizontal: Padding.p_3xs,
    paddingTop: Padding.p_mini,
    paddingBottom: Padding.p_3xs,
  },
  goToOrders: {
    color: Color.colorLightslategray,
  },
  gto: {
    top: 657,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_300,
    width: 335,
    height: 50,
    alignItems: "center",
    padding: Padding.p_3xs,
    left: 20,
  },
  lazaDarkUi20: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default LAZADARKUI;
