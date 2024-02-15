import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const LAZADARKUI17 = () => {
  return (
    <View style={styles.lazaDarkUi04}>
      <View style={styles.imgPosition}>
        <View style={[styles.imgChild, styles.imgPosition]} />
        <Image
          style={styles.image6Icon}
          contentFit="cover"
          source={require("../assets/image-61.png")}
        />
      </View>
      <Image
        style={[styles.backIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/back3.png")}
      />
      <Image
        style={[styles.lazaDarkUi04Child, styles.ctaLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-573.png")}
      />
      <View style={[styles.details, styles.sizeLayout7]}>
        <Text style={[styles.nikeClubFleece, styles.textTypo]}>
          Nike Club Fleece
        </Text>
        <Text style={[styles.text, styles.textPosition]}>$120</Text>
        <Text style={[styles.mensPrintedPullover, styles.priceLayout]}>
          Men's Printed Pullover Hoodie
        </Text>
        <Text style={[styles.price, styles.priceLayout]}>Price</Text>
      </View>
      <View style={[styles.description, styles.sizeLayout7]}>
        <Text style={[styles.description1, styles.sLayout]}>Description</Text>
        <Text
          style={[styles.theNikeThrowbackContainer, styles.loremIpsumDolorTypo]}
        >
          <Text style={styles.theNikeThrowbackPulloverHo}>
            <Text style={styles.theNikeThrowback}>
              The Nike Throwback Pullover Hoodie is made from premium French
              terry fabric that blends a performance feel with
            </Text>
            <Text style={styles.text1}>{` `}</Text>
          </Text>
          <Text style={styles.text1}>
            <Text style={styles.textTypo}>Read More..</Text>
          </Text>
        </Text>
      </View>
      <View style={[styles.size, styles.sizeLayout7]}>
        <Text style={[styles.description1, styles.sLayout]}>Size</Text>
        <Text style={[styles.sizeGuide, styles.viewAllTypo]}>Size Guide</Text>
        <View style={[styles.size2, styles.sizeLayout]}>
          <Text style={[styles.s, styles.sLayout]}>S</Text>
        </View>
        <View style={[styles.size3, styles.sizeLayout]}>
          <Text style={[styles.s, styles.sLayout]}>M</Text>
        </View>
        <View style={[styles.size4, styles.sizeLayout]}>
          <Text style={[styles.s, styles.sLayout]}>L</Text>
        </View>
        <View style={[styles.size5, styles.sizeFlexBox]}>
          <Text style={[styles.s, styles.sLayout]}>XL</Text>
        </View>
        <View style={[styles.size6, styles.sizeFlexBox]}>
          <Text style={[styles.s, styles.sLayout]}>2XL</Text>
        </View>
      </View>
      <View style={[styles.cta, styles.sizeFlexBox]}>
        <Text style={[styles.addToCart, styles.text3Typo]}>Add to Cart</Text>
      </View>
      <View style={[styles.price1, styles.sizeLayout7]}>
        <Text style={[styles.text2, styles.sLayout]}>$125</Text>
        <Text style={[styles.totalPrice, styles.text3Layout]}>Total Price</Text>
        <Text style={[styles.withVatsd, styles.rating1Typo]}>with VAT,SD</Text>
      </View>
      <Image
        style={styles.logoIcon}
        contentFit="cover"
        source={require("../assets/logo1.png")}
      />
      <View style={[styles.reviews, styles.sizeLayout7]}>
        <Text style={[styles.description1, styles.sLayout]}>Reviews</Text>
        <Text style={[styles.viewAll, styles.viewAllTypo]}>View All</Text>
        <View style={[styles.review, styles.sizeLayout7]}>
          <Text style={[styles.loremIpsumDolor, styles.loremIpsumDolorTypo]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque malesuada eget vitae amet...
          </Text>
          <View style={[styles.rating, styles.ratingPosition]}>
            <Text style={[styles.text3, styles.text3Typo]}>4.8</Text>
            <Text style={[styles.rating1, styles.rating1Typo]}>rating</Text>
          </View>
          <Image
            style={[styles.starIcon, styles.ratingPosition]}
            contentFit="cover"
            source={require("../assets/star.png")}
          />
          <Text style={[styles.ronaldRichards, styles.clockIconPosition]}>
            Ronald Richards
          </Text>
          <Text style={styles.sep2020}>13 Sep, 2020</Text>
          <Image
            style={[styles.clockIcon, styles.clockIconPosition]}
            contentFit="cover"
            source={require("../assets/clock.png")}
          />
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/97.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.cartIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/cart2.png")}
      />
      <View style={styles.productImg}>
        <Image
          style={[styles.productImgChild, styles.productLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-5791.png")}
        />
        <Image
          style={[styles.productImgItem, styles.productLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-580.png")}
        />
        <Image
          style={[styles.productImgInner, styles.productLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-581.png")}
        />
        <Image
          style={[styles.rectangleIcon, styles.productLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-582.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgPosition: {
    height: 418,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 45,
    width: 45,
    top: 45,
    position: "absolute",
  },
  ctaLayout: {
    width: 375,
    left: 0,
  },
  sizeLayout7: {
    width: 335,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  textPosition: {
    left: 281,
    textAlign: "left",
    position: "absolute",
  },
  priceLayout: {
    lineHeight: 14,
    fontSize: FontSize.size_smi,
  },
  sLayout: {
    lineHeight: 19,
    fontSize: FontSize.headlinesHeadline17_size,
  },
  loremIpsumDolorTypo: {
    lineHeight: 21,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  viewAllTypo: {
    color: Color.colorMediumslateblue,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  sizeLayout: {
    padding: Padding.p_3xs,
    alignItems: "center",
    height: 60,
    width: 60,
    backgroundColor: Color.colorDarkslategray_300,
    borderRadius: Border.br_3xs,
    top: 29,
  },
  sizeFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
  },
  text3Typo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
  },
  text3Layout: {
    lineHeight: 17,
    fontSize: FontSize.size_mini,
  },
  rating1Typo: {
    lineHeight: 12,
    fontSize: FontSize.size_2xs,
    color: Color.colorLightslategray,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  ratingPosition: {
    left: 276,
    position: "absolute",
  },
  clockIconPosition: {
    left: 51,
    position: "absolute",
  },
  productLayout: {
    width: 77,
    height: 77,
    borderRadius: Border.br_3xs,
    top: 0,
    position: "absolute",
  },
  imgChild: {
    backgroundColor: "#f2f2f2",
  },
  image6Icon: {
    top: 31,
    left: 32,
    width: 310,
    height: 387,
    position: "absolute",
  },
  backIcon: {
    left: 20,
  },
  lazaDarkUi04Child: {
    top: 387,
    height: 425,
    position: "absolute",
  },
  nikeClubFleece: {
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
    lineHeight: 24,
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
    top: 22,
    left: 0,
    position: "absolute",
  },
  text: {
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.size_3xl,
    top: 22,
  },
  mensPrintedPullover: {
    color: Color.colorLightslategray,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  price: {
    color: Color.colorLightslategray,
    fontFamily: FontFamily.interRegular,
    left: 281,
    textAlign: "left",
    position: "absolute",
    top: 0,
  },
  details: {
    top: 402,
    height: 46,
    left: 20,
  },
  description1: {
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: 0,
    top: 0,
    position: "absolute",
  },
  theNikeThrowback: {
    color: Color.colorLightslategray,
  },
  text1: {
    color: Color.colorWhitesmoke_100,
  },
  theNikeThrowbackPulloverHo: {
    fontFamily: FontFamily.interRegular,
  },
  theNikeThrowbackContainer: {
    top: 29,
    fontSize: FontSize.size_mini,
    width: 335,
  },
  description: {
    top: 670,
    height: 92,
    left: 20,
  },
  sizeGuide: {
    top: 1,
    left: 259,
    lineHeight: 17,
    fontSize: FontSize.size_mini,
  },
  s: {
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  size2: {
    justifyContent: "center",
    padding: Padding.p_3xs,
    alignItems: "center",
    height: 60,
    width: 60,
    backgroundColor: Color.colorDarkslategray_300,
    borderRadius: Border.br_3xs,
    position: "absolute",
    left: 0,
  },
  size3: {
    left: 69,
    justifyContent: "center",
    padding: Padding.p_3xs,
    alignItems: "center",
    height: 60,
    width: 60,
    backgroundColor: Color.colorDarkslategray_300,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  size4: {
    left: 137,
    justifyContent: "center",
    padding: Padding.p_3xs,
    alignItems: "center",
    height: 60,
    width: 60,
    backgroundColor: Color.colorDarkslategray_300,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  size5: {
    left: 206,
    padding: Padding.p_3xs,
    alignItems: "center",
    height: 60,
    width: 60,
    backgroundColor: Color.colorDarkslategray_300,
    borderRadius: Border.br_3xs,
    top: 29,
    flexDirection: "row",
  },
  size6: {
    left: 275,
    padding: Padding.p_3xs,
    alignItems: "center",
    height: 60,
    width: 60,
    backgroundColor: Color.colorDarkslategray_300,
    borderRadius: Border.br_3xs,
    top: 29,
    flexDirection: "row",
  },
  size: {
    top: 561,
    height: 89,
    left: 20,
  },
  addToCart: {
    lineHeight: 19,
    fontSize: FontSize.headlinesHeadline17_size,
  },
  cta: {
    top: 998,
    backgroundColor: Color.colorMediumslateblue,
    height: 75,
    paddingHorizontal: Padding.p_3xs,
    paddingTop: Padding.p_mini,
    paddingBottom: Padding.p_3xs,
    width: 375,
    left: 0,
  },
  text2: {
    top: 8,
    left: 294,
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  totalPrice: {
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: 0,
    top: 0,
    position: "absolute",
  },
  withVatsd: {
    top: 22,
    lineHeight: 12,
    left: 0,
  },
  price1: {
    top: 944,
    height: 34,
    left: 20,
  },
  logoIcon: {
    top: 338,
    left: 147,
    width: 80,
    height: 49,
    position: "absolute",
  },
  viewAll: {
    left: 286,
    top: 3,
    lineHeight: 14,
    fontSize: FontSize.size_smi,
  },
  loremIpsumDolor: {
    top: 50,
    width: 334,
    color: Color.colorLightslategray,
    fontFamily: FontFamily.interRegular,
  },
  text3: {
    lineHeight: 17,
    fontSize: FontSize.size_mini,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rating1: {
    left: 28,
    top: 3,
  },
  rating: {
    width: 59,
    height: 17,
    top: 3,
  },
  starIcon: {
    top: 25,
    width: 57,
    height: 13,
  },
  ronaldRichards: {
    top: 2,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
    lineHeight: 17,
    fontSize: FontSize.size_mini,
  },
  sep2020: {
    top: 26,
    left: 71,
    lineHeight: 11,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorLightslategray,
    textAlign: "left",
    position: "absolute",
  },
  clockIcon: {
    top: 24,
    width: 15,
    height: 15,
    overflow: "hidden",
  },
  icon: {
    left: 1,
    borderRadius: Border.br_81xl,
    width: 40,
    height: 40,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  review: {
    top: 34,
    height: 113,
    left: 0,
  },
  reviews: {
    top: 777,
    height: 147,
    left: 20,
  },
  cartIcon: {
    left: 310,
  },
  productImgChild: {
    left: 0,
  },
  productImgItem: {
    left: 86,
  },
  productImgInner: {
    left: 172,
  },
  rectangleIcon: {
    left: 258,
  },
  productImg: {
    top: 469,
    height: 77,
    width: 335,
    left: 20,
    position: "absolute",
  },
  lazaDarkUi04: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 1073,
    overflow: "hidden",
  },
});

export default LAZADARKUI17;
