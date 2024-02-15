import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const LAZADARKUI3 = () => {
  return (
    <View style={styles.lazaDarkUi17}>
      <Image
        style={styles.backIcon}
        contentFit="cover"
        source={require("../assets/back.png")}
      />
      <Text style={[styles.cart, styles.cartTypo]}>Cart</Text>
      <View style={styles.cta}>
        <Text style={[styles.checkout, styles.textTypo]}>Checkout</Text>
      </View>
      <View style={[styles.cart1, styles.cartLayout]}>
        <View style={[styles.cart1Child, styles.childPosition]} />
        <Text style={styles.mensTieDyeTShirt}>{`Men's Tie-Dye T-Shirt
Nike Sportswear`}</Text>
        <Text style={[styles.tax, styles.taxTypo]}>$45 (-$4.00 Tax)</Text>
        <Text style={[styles.text, styles.textLayout]}>1</Text>
        <Image
          style={[styles.cart1Item, styles.cart1IconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-767.png")}
        />
        <Image
          style={[styles.cart1Inner, styles.cart1IconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-767.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.cart1IconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-767.png")}
        />
        <Image
          style={[styles.arrowDown4, styles.arrowLayout]}
          contentFit="cover"
          source={require("../assets/arrow--down-4.png")}
        />
        <Image
          style={[styles.arrowUp4, styles.arrowLayout]}
          contentFit="cover"
          source={require("../assets/arrow--up-4.png")}
        />
        <Image
          style={[styles.deleteIcon, styles.arrowLayout]}
          contentFit="cover"
          source={require("../assets/delete.png")}
        />
        <View style={[styles.img, styles.imgLayout]}>
          <View style={[styles.imgChild, styles.imgLayout]} />
          <Image
            style={styles.image6Icon}
            contentFit="cover"
            source={require("../assets/image-6.png")}
          />
        </View>
      </View>
      <View style={[styles.cart2, styles.cartLayout]}>
        <View style={[styles.cart1Child, styles.childPosition]} />
        <Text style={styles.mensTieDyeTShirt}>{`Men's Tie-Dye T-Shirt
Nike Sportswear`}</Text>
        <Text style={[styles.tax, styles.taxTypo]}>$45 (-$4.00 Tax)</Text>
        <Text style={[styles.text, styles.textLayout]}>1</Text>
        <Image
          style={[styles.cart1Item, styles.cart1IconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-767.png")}
        />
        <Image
          style={[styles.cart1Inner, styles.cart1IconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-767.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.cart1IconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-767.png")}
        />
        <Image
          style={[styles.arrowDown4, styles.arrowLayout]}
          contentFit="cover"
          source={require("../assets/arrow--down-4.png")}
        />
        <Image
          style={[styles.arrowUp4, styles.arrowLayout]}
          contentFit="cover"
          source={require("../assets/arrow--up-4.png")}
        />
        <Image
          style={[styles.deleteIcon, styles.arrowLayout]}
          contentFit="cover"
          source={require("../assets/delete.png")}
        />
        <View style={[styles.img, styles.imgLayout]}>
          <View style={[styles.imgChild, styles.imgLayout]} />
          <Image
            style={styles.image6Icon}
            contentFit="cover"
            source={require("../assets/image-7.png")}
          />
        </View>
      </View>
      <View style={styles.orderInfo}>
        <Text style={styles.orderInfo1}>Order Info</Text>
        <Text style={[styles.subtotal, styles.text2Layout]}>Subtotal</Text>
        <Text style={[styles.text2, styles.text2Layout]}>$110</Text>
        <Text style={[styles.shippingCost, styles.text3Position]}>
          Shipping cost
        </Text>
        <Text style={[styles.total, styles.totalPosition]}>Total</Text>
        <Text style={[styles.text3, styles.text3Position]}>$10</Text>
        <Text style={[styles.text4, styles.totalPosition]}>$120</Text>
      </View>
      <View style={[styles.delivery, styles.paymentLayout]}>
        <Text style={styles.orderInfo1}>Delivery Address</Text>
        <Image
          style={[styles.arrowRight2, styles.arrowLayout]}
          contentFit="cover"
          source={require("../assets/arrow--right-2.png")}
        />
        <Text style={[styles.chhatakSunamgonj128ab, styles.sylhetPosition]}>
          Chhatak, Sunamgonj 12/8AB
        </Text>
        <Text style={[styles.sylhet, styles.sylhetPosition]}>Sylhet</Text>
        <Image
          style={styles.childLayout}
          contentFit="cover"
          source={require("../assets/rectangle-584.png")}
        />
        <Image
          style={styles.deliveryItem}
          contentFit="cover"
          source={require("../assets/ellipse-773.png")}
        />
        <Image
          style={styles.locationIcon}
          contentFit="cover"
          source={require("../assets/location.png")}
        />
        <Image
          style={[styles.checkIcon, styles.cart1IconLayout]}
          contentFit="cover"
          source={require("../assets/check.png")}
        />
      </View>
      <View style={[styles.payment, styles.paymentLayout]}>
        <Text style={styles.orderInfo1}>Payment Method</Text>
        <Image
          style={[styles.arrowRight2, styles.arrowLayout]}
          contentFit="cover"
          source={require("../assets/arrow--right-2.png")}
        />
        <Text style={[styles.chhatakSunamgonj128ab, styles.sylhetPosition]}>
          Visa Classic
        </Text>
        <Text style={[styles.sylhet, styles.sylhetPosition]}>**** 7690</Text>
        <View style={[styles.paymentChild, styles.childLayout]} />
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame.png")}
        />
        <Image
          style={[styles.checkIcon, styles.cart1IconLayout]}
          contentFit="cover"
          source={require("../assets/check.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorWhitesmoke_100,
  },
  cartLayout: {
    height: 120,
    width: 335,
    position: "absolute",
  },
  childPosition: {
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
  },
  taxTypo: {
    fontFamily: FontFamily.interRegular,
    color: Color.colorLightslategray,
  },
  textLayout: {
    lineHeight: 14,
    fontSize: FontSize.size_smi,
  },
  cart1IconLayout: {
    height: 25,
    width: 25,
    position: "absolute",
  },
  arrowLayout: {
    height: 15,
    width: 15,
    position: "absolute",
    overflow: "hidden",
  },
  imgLayout: {
    height: 100,
    width: 100,
    position: "absolute",
  },
  text2Layout: {
    lineHeight: 17,
    fontSize: FontSize.size_mini,
  },
  text3Position: {
    top: 61,
    lineHeight: 17,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
  },
  totalPosition: {
    top: 93,
    lineHeight: 17,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
  },
  paymentLayout: {
    height: 84,
    width: 335,
    left: 20,
    position: "absolute",
  },
  sylhetPosition: {
    left: 65,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  childLayout: {
    height: 50,
    width: 50,
    top: 34,
    borderRadius: Border.br_3xs,
    left: 0,
    position: "absolute",
  },
  backIcon: {
    top: 45,
    width: 45,
    height: 45,
    left: 20,
    position: "absolute",
  },
  cart: {
    left: 169,
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
    lineHeight: 19,
    fontSize: FontSize.headlinesHeadline17_size,
    top: 58,
  },
  checkout: {
    textAlign: "left",
    lineHeight: 19,
    fontSize: FontSize.headlinesHeadline17_size,
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
  cart1Child: {
    backgroundColor: Color.colorDarkslategray_300,
    height: 120,
    width: 335,
    position: "absolute",
  },
  mensTieDyeTShirt: {
    top: 12,
    lineHeight: 18,
    fontSize: FontSize.size_smi,
    left: 125,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
    position: "absolute",
  },
  tax: {
    fontSize: FontSize.size_2xs,
    lineHeight: 12,
    color: Color.colorLightslategray,
    left: 125,
    textAlign: "left",
    top: 58,
    position: "absolute",
  },
  text: {
    top: 91,
    left: 165,
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  cart1Item: {
    top: 85,
    width: 25,
    left: 125,
  },
  cart1Inner: {
    left: 187,
    top: 85,
    width: 25,
  },
  ellipseIcon: {
    left: 300,
    top: 85,
    width: 25,
  },
  arrowDown4: {
    left: 130,
    top: 90,
    width: 15,
  },
  arrowUp4: {
    left: 192,
    top: 90,
    width: 15,
  },
  deleteIcon: {
    left: 305,
    top: 90,
    width: 15,
  },
  imgChild: {
    backgroundColor: Color.colorDarkslategray_100,
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
  },
  image6Icon: {
    top: 4,
    left: 11,
    width: 77,
    height: 96,
    position: "absolute",
  },
  img: {
    top: 10,
    left: 10,
  },
  cart1: {
    top: 115,
    left: 20,
  },
  cart2: {
    top: 250,
    left: 20,
  },
  orderInfo1: {
    top: 0,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 0,
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
    lineHeight: 19,
    fontSize: FontSize.headlinesHeadline17_size,
    position: "absolute",
  },
  subtotal: {
    top: 34,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
    color: Color.colorLightslategray,
    fontFamily: FontFamily.interRegular,
    left: 0,
  },
  text2: {
    left: 301,
    top: 34,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorWhitesmoke_100,
  },
  shippingCost: {
    color: Color.colorLightslategray,
    fontFamily: FontFamily.interRegular,
    left: 0,
  },
  total: {
    color: Color.colorLightslategray,
    fontFamily: FontFamily.interRegular,
    left: 0,
  },
  text3: {
    left: 308,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorWhitesmoke_100,
  },
  text4: {
    left: 299,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorWhitesmoke_100,
  },
  orderInfo: {
    top: 588,
    height: 110,
    width: 335,
    left: 20,
    position: "absolute",
  },
  arrowRight2: {
    top: 2,
    left: 320,
  },
  chhatakSunamgonj128ab: {
    top: 39,
    lineHeight: 17,
    fontSize: FontSize.size_mini,
    color: Color.colorWhitesmoke_100,
  },
  sylhet: {
    top: 66,
    lineHeight: 14,
    fontSize: FontSize.size_smi,
    color: Color.colorLightslategray,
  },
  deliveryItem: {
    top: 49,
    left: 15,
    width: 20,
    height: 20,
    position: "absolute",
  },
  locationIcon: {
    top: 52,
    left: 18,
    width: 14,
    height: 14,
    position: "absolute",
    overflow: "hidden",
  },
  checkIcon: {
    top: 47,
    left: 310,
  },
  delivery: {
    top: 390,
  },
  paymentChild: {
    backgroundColor: Color.colorWhitesmoke_100,
  },
  frameIcon: {
    top: 44,
    width: 30,
    height: 30,
    left: 10,
    position: "absolute",
    overflow: "hidden",
  },
  payment: {
    top: 489,
  },
  lazaDarkUi17: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default LAZADARKUI3;
