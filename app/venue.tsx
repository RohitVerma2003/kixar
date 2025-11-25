import About from "@/components/About";
import AvailableSports from "@/components/AvailableSports";
import Banner from "@/components/Banner";
import Facilities from "@/components/Facilities";
import Map from "@/components/Map";
import Offers from "@/components/Offers";
import Reviews from "@/components/Reviews";
import Timings from "@/components/Timings";
import { router } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Venue = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{}}>
        <View>
          <Banner />
        </View>

        <View style={{ margin: 20, paddingBottom: 40 }}>
          <View
            style={{
              borderBottomWidth: 1,
              paddingBottom: 20,
              borderColor: "#777C6D",
            }}
          >
            <View style={styles["space-between"]}>
              <Text style={{ fontSize: 20, fontWeight: "500" }}>
                Xciteplay Club{" "}
                <FontAwesome name="check-circle" color={"#63A361"} size={20} />
              </Text>
              <View style={styles.ratings}>
                <Text style={[styles.ratingsText, { borderRightWidth: 1 }]}>
                  4.5 <FontAwesome name="star" color={"#F4991A"} />
                </Text>
                <Text
                  style={[
                    styles.ratingsText,
                    { fontSize: 12, color: "#777C6D" },
                  ]}
                >
                  15 Ratings
                </Text>
              </View>
            </View>
            <View
              style={{
                marginVertical: 15,
                flexDirection: "row",
                gap: 3,
              }}
            >
              <View>
                <FontAwesome name="map-marker" size={15} color={"#777C6D"} />
              </View>
              <Text
                style={{ fontSize: 14, textAlign: "left", color: "#777C6D" }}
              >
                516/A, Katol Rd, KT Nagar, Nagpur, Maharashtra 440013
              </Text>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 20,
                  borderColor: "#777C6D",
                  width: "80%",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 15,
                    fontWeight: "500",
                  }}
                >
                  Get Direction
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderRadius: "60%",
                  borderColor: "#777C6D",
                  width: 40,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome name="phone" size={20} color={"#777C6D"} />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              paddingVertical: 20,
              borderColor: "#777C6D",
            }}
          >
            <About />
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              paddingVertical: 20,
              borderColor: "#777C6D",
            }}
          >
            <Timings />
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              paddingVertical: 20,
              borderColor: "#777C6D",
            }}
          >
            <Facilities />
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              paddingVertical: 20,
              borderColor: "#777C6D",
            }}
          >
            <AvailableSports />
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              paddingVertical: 20,
              borderColor: "#777C6D",
            }}
          >
            <Offers />
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              paddingVertical: 20,
              borderColor: "#777C6D",
            }}
          >
            <Reviews />
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              paddingVertical: 20,
              borderColor: "#777C6D",
            }}
          >
            <Map />
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomBar}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ fontSize: 24, fontWeight: "800" }}>
              $1200{" "}
              <Text style={{ fontSize: 12, color: "#777C6D" }}>/ 1hour</Text>
            </Text>
            <Text style={{ fontSize: 15, color: "#777C6D" }}>
              per player cost in next step
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: "#56DFCF",
                padding: 12,
                borderRadius: 10,
              }}

              onPress={()=>router.push("/booking")}
            >
              <Text style={{ color: "white" , fontSize:16 , fontWeight: "500" }}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  "space-between": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ratings: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 20,
    borderBottomWidth: 2,
    borderColor: "#777C6D",
  },
  ratingsText: {
    paddingHorizontal: 5,
    fontSize: 15,
    fontWeight: "500",
    alignSelf: "center",
    alignItems: "center",
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 65,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ddd",
    marginBottom: 40,
    paddingHorizontal: 20,
    paddingVertical: 5
  },
});

export default Venue;
