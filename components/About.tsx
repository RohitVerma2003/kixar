import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const About = () => {
  return (
    <View>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <TouchableOpacity style={[styles.button, { backgroundColor: "black" }]}>
          <Text
            style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
          >
            About
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "#777C6D", textAlign: "center" }}>
            Policies
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={styles.heading}>About Xciteplay Club</Text>
        <Text>
          Xciteplay Club is the perfect spot for football and cricket lovers to
          bring their game.{" "}
          <Text style={{ textDecorationLine: "underline", color: "#63A361" }}>
            read more
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  button: {
    padding: 12,
    color: "white",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#777C6D",
    width: "30%",
  },
  heading: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
  },
});
