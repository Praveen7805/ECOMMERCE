import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const LAZADARKUI1 = () => {
  return (
    <View style={styles.lazaDarkUi19}>
      <Image
        style={styles.backIcon}
        contentFit="cover"
        source={require("../assets/back1.png")}
      />
      <Text style={styles.reviews}>Reviews</Text>
      <View style={styles.addReview}>
        <View style={styles.addReview1}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/edit-square.png")}
          />
          <Text style={[styles.addReview2, styles.sep2020Typo]}>
            Add Review
          </Text>
        </View>
        <Text style={[styles.reviews1, styles.reviews1Typo]}>245 Reviews</Text>
        <Text style={[styles.text, styles.textPosition]}>4.8</Text>
        <Image
          style={[styles.starIcon, styles.starIconLayout]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
      </View>
      <View style={[styles.card01, styles.cardLayout]}>
        <Text style={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          malesuada eget vitae amet...
        </Text>
        <View style={[styles.rating, styles.ratingPosition]}>
          <Text style={[styles.reviews1, styles.reviews1Typo]}>4.8</Text>
          <Text style={[styles.rating1, styles.rating1Typo]}>rating</Text>
        </View>
        <Image
          style={[styles.starIcon1, styles.ratingPosition]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Text style={[styles.jennyWilson, styles.clockIconPosition]}>
          Jenny Wilson
        </Text>
        <Text style={[styles.sep2020, styles.rating1Typo]}>13 Sep, 2020</Text>
        <Image
          style={[styles.clockIcon, styles.clockIconPosition]}
          contentFit="cover"
          source={require("../assets/clock.png")}
        />
        <Image
          style={[styles.icon, styles.textPosition]}
          contentFit="cover"
          source={require("../assets/97.png")}
        />
      </View>
      <View style={[styles.card02, styles.cardLayout]}>
        <Text style={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          malesuada eget vitae amet...
        </Text>
        <View style={[styles.rating, styles.ratingPosition]}>
          <Text style={[styles.reviews1, styles.reviews1Typo]}>4.8</Text>
          <Text style={[styles.rating1, styles.rating1Typo]}>rating</Text>
        </View>
        <Image
          style={[styles.starIcon1, styles.ratingPosition]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Text style={[styles.jennyWilson, styles.clockIconPosition]}>
          Ronald Richards
        </Text>
        <Text style={[styles.sep2020, styles.rating1Typo]}>13 Sep, 2020</Text>
        <Image
          style={[styles.clockIcon, styles.clockIconPosition]}
          contentFit="cover"
          source={require("../assets/clock.png")}
        />
        <Image
          style={[styles.icon, styles.textPosition]}
          contentFit="cover"
          source={require("../assets/41.png")}
        />
      </View>
      <View style={[styles.card03, styles.cardLayout]}>
        <Text style={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          malesuada eget vitae amet...
        </Text>
        <View style={[styles.rating, styles.ratingPosition]}>
          <Text style={[styles.reviews1, styles.reviews1Typo]}>4.8</Text>
          <Text style={[styles.rating1, styles.rating1Typo]}>rating</Text>
        </View>
        <Image
          style={[styles.starIcon1, styles.ratingPosition]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Text style={[styles.sep2020, styles.rating1Typo]}>13 Sep, 2020</Text>
        <Image
          style={[styles.clockIcon, styles.clockIconPosition]}
          contentFit="cover"
          source={require("../assets/clock.png")}
        />
        <Image
          style={[styles.icon, styles.textPosition]}
          contentFit="cover"
          source={require("../assets/39.png")}
        />
        <Text style={[styles.jennyWilson, styles.clockIconPosition]}>
          Guy Hawkins
        </Text>
      </View>
      <View style={[styles.card04, styles.cardLayout]}>
        <Text style={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          malesuada eget vitae amet...
        </Text>
        <View style={[styles.rating, styles.ratingPosition]}>
          <Text style={[styles.reviews1, styles.reviews1Typo]}>4.8</Text>
          <Text style={[styles.rating1, styles.rating1Typo]}>rating</Text>
        </View>
        <Image
          style={[styles.starIcon1, styles.ratingPosition]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Text style={[styles.sep2020, styles.rating1Typo]}>13 Sep, 2020</Text>
        <Image
          style={[styles.clockIcon, styles.clockIconPosition]}
          contentFit="cover"
          source={require("../assets/clock.png")}
        />
        <Image
          style={[styles.icon, styles.textPosition]}
          contentFit="cover"
          source={require("../assets/129.png")}
        />
        <Text style={[styles.jennyWilson, styles.clockIconPosition]}>
          Savannah Nguyen
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sep2020Typo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  reviews1Typo: {
    lineHeight: 17,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
  },
  textPosition: {
    left: 0,
    position: "absolute",
  },
  starIconLayout: {
    height: 13,
    width: 57,
  },
  cardLayout: {
    height: 113,
    width: 335,
    left: 20,
    position: "absolute",
  },
  ratingPosition: {
    left: 276,
    position: "absolute",
  },
  rating1Typo: {
    fontSize: FontSize.size_2xs,
    color: Color.colorLightslategray,
    textAlign: "left",
    position: "absolute",
  },
  clockIconPosition: {
    left: 50,
    position: "absolute",
  },
  backIcon: {
    top: 45,
    width: 45,
    height: 45,
    left: 20,
    position: "absolute",
  },
  reviews: {
    top: 58,
    left: 157,
    fontSize: FontSize.headlinesHeadline17_size,
    lineHeight: 19,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
    position: "absolute",
  },
  iconLayout: {
    height: 15,
    width: 15,
    overflow: "hidden",
  },
  addReview2: {
    marginLeft: 5,
    lineHeight: 14,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
  },
  addReview1: {
    top: 1,
    left: 221,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorMediumslateblue,
    flexDirection: "row",
    alignItems: "center",
    padding: Padding.p_3xs,
    position: "absolute",
  },
  reviews1: {
    left: 0,
    position: "absolute",
    top: 0,
  },
  text: {
    top: 22,
    fontFamily: FontFamily.interRegular,
    lineHeight: 14,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
  },
  starIcon: {
    top: 23,
    left: 22,
    position: "absolute",
  },
  addReview: {
    top: 115,
    height: 36,
    width: 335,
    left: 20,
    position: "absolute",
  },
  loremIpsumDolor: {
    top: 50,
    lineHeight: 21,
    width: 334,
    color: Color.colorLightslategray,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    left: 0,
    textAlign: "left",
    position: "absolute",
  },
  rating1: {
    left: 28,
    lineHeight: 12,
    top: 3,
    fontFamily: FontFamily.interRegular,
  },
  rating: {
    width: 59,
    height: 17,
    top: 3,
  },
  starIcon1: {
    top: 25,
    height: 13,
    width: 57,
  },
  jennyWilson: {
    top: 2,
    lineHeight: 17,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
  },
  sep2020: {
    top: 26,
    left: 70,
    lineHeight: 11,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  clockIcon: {
    top: 24,
    height: 15,
    width: 15,
    overflow: "hidden",
  },
  icon: {
    borderRadius: Border.br_81xl,
    width: 40,
    height: 40,
    top: 0,
    left: 0,
    overflow: "hidden",
  },
  card01: {
    top: 181,
  },
  card02: {
    top: 314,
  },
  card03: {
    top: 447,
  },
  card04: {
    top: 580,
  },
  lazaDarkUi19: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default LAZADARKUI1;
