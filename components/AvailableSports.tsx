import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const image = require("../assets/images/ground.png");

const AvailableSports = () => {
  return (
    <View>
      <Text style={styles.heading}>AvailableSports</Text>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <TouchableOpacity style={[styles.button, { backgroundColor: "black" }]}>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
              alignItems: "center",
            }}
          >
            <Ionicons name="football-outline" size={12} /> Football
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "#777C6D", textAlign: "center" }}>
            <MaterialIcons name="sports-cricket" size={12} /> Cricket
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Image
          source={image}
          resizeMode="contain"
          style={{ width: "auto", height: 150 }}
        />
        <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "500" }}>
          Turf - Foot Ball & Cricket
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 15,
            fontWeight: "500",
            color: "#777C6D",
          }}
        >
          7v7
        </Text>
      </View>
    </View>
  );
};

export default AvailableSports;

const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 20,
  },
  button: {
    padding: 12,
    color: "white",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#777C6D",
    width: "35%",
  },
});
