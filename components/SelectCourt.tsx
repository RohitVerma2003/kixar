import { useBooking } from "@/context/bookingContext";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
const SelectCourt = () => {
  const { booking, setCourt } = useBooking();

  return (
    <View>
      <Text style={styles.heading}>Select Cricket Court</Text>

      <View style={styles.row}>
        <TouchableOpacity
          style={[
            styles.button,
            booking.court === "courtA" && styles.selectedButton,
          ]}
          onPress={() => setCourt("courtA")}
        >
          <Text
            style={[
              styles.text,
              booking.court === "courtA" && styles.selectedText,
            ]}
          >
            Court A
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            booking.court === "courtB" && styles.selectedButton,
          ]}
          onPress={() => setCourt("courtB")}
        >
          <Text
            style={[
              styles.text,
              booking.court === "courtB" && styles.selectedText,
            ]}
          >
            Court B
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectCourt;

const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 10,
    width: "48%",
    alignItems: "center",
    borderColor: "#444",
  },
  selectedButton: {
    backgroundColor: "black",
    borderColor: "black",
  },
  text: {
    color: "black",
    fontWeight: "500",
  },
  selectedText: {
    color: "white",
  },
});
