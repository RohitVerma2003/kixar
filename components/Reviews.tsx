import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Reviews = () => {
  return (
    <View>
      <Text style={styles.heading}>Ratings & Reviews</Text>
      <View style={styles.topContainer}>
        <Text style={styles.ratingButton}>
          4.5 <Ionicons name="star" color={"#F4991A"} />
        </Text>
        <Text style={{ color: "#777C6D" }}>15 Ratings | 10 Reviews</Text>
      </View>

      <View style={{ marginTop: 15 }}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Image
            source={require("../assets/images/person.jpg")}
            resizeMode="cover"
            style={styles.userImage}
          />
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Text style={{ fontWeight: "500", fontSize: 16 }}>Siva</Text>
              <Text style={{ fontWeight: "500", fontSize: 16 }}>.</Text>
              <Text style={styles.reviewRating}>
                4.5 <Ionicons name="star" color={"#F4991A"} />
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 12, marginTop: 3 }}>
                2 days ago . 22 Nov, 2025
              </Text>
              <Text style={styles.review}>
                Hand On The Best And The Easiest Way Of Booking Turfs Just In
                Seconds And Within Your Hand !
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Reviews;

const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 20,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },
  ratingButton: {
    backgroundColor: "#63A361",
    color: "white",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  userImage: {
    borderRadius: 100,
    width: 40,
    height: 40,
  },
  reviewRating: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
    fontWeight: "500",
    borderWidth: 1,
    borderColor: "#777C6D",
  },
  review: {
    fontSize: 14,
    marginTop: 10,
    width: "40%",
    fontWeight: "500",
  },
});
