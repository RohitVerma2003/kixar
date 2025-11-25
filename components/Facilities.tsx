import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Facilities = () => {
  const data = [
    { icon: "car-outline", name: "Parking" },
    { icon: "water-outline", name: "Water" },
    { icon: "basketball-outline", name: "Ball" },
    { icon: "bulb-outline", name: "Night Light" },
  ];
  return (
    <View>
      <Text style={styles.heading}>Facilities</Text>
      <View style={{ flex: 1, flexDirection: "row", gap: 10, flexWrap:"wrap" }}>
        {data.map((ele, index) => (
          <View
            key={index}
            style={{
              backgroundColor: "#1111",
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              padding: 10,
              borderRadius: 20,
            }}
          >
            <Ionicons name={ele.icon} size={20} />
            <Text>{ele.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Facilities;

const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 20,
  },
});
