import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Offers = () => {
  return (
    <View>
      <Text style={styles.heading}>Offers</Text>
      <View style={styles.discount}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <MaterialCommunityIcons
            name="brightness-percent"
            color={"#63A361"}
            size={15}
          />
          <Text style={{ fontSize: 15, fontWeight: "700" }}>FIRSTBOOK</Text>
        </View>
        <Text style={{ marginTop: 10, fontWeight: "500" }}>
          Get a 20% Offer on your first turf booking with Kixar App
        </Text>
      </View>
    </View>
  );
};

export default Offers;

const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 20,
  },
  discount: {
    backgroundColor: "#F4FBFA",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#CAEBE8",
  },
});
