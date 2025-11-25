import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const Map = () => {
  return (
    <View>
      <Text style={styles.heading}>Map View</Text>

      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 28.6139,
            longitude: 77.209,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          <Marker
            coordinate={{ latitude: 28.6139, longitude: 77.209 }}
            title="New Delhi"
            description="Capital of India"
          />
        </MapView>
        <TouchableOpacity
          style={{
            padding: 12,
            borderRadius: 20,
            backgroundColor: "black",
            position: "absolute",
            width: "90%",
            bottom: 10,
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 15,
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Get Directions
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 20,
  },
  container: {
    width: "100%",
    height: 300, // IMPORTANT
    borderRadius: 10,
    overflow: "hidden",
    position: "relative",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
