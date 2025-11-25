import { useBooking } from "@/context/bookingContext";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const PlayerCount = () => {
  const { booking, setPlayers } = useBooking();
  const count = booking.players;

  const handleAdd = () => {
    if (count >= 10) return;
    setPlayers(count + 1);
  };

  const handleSubtract = () => {
    if (count <= 1) return;
    setPlayers(count - 1);
  };

  return (
    <View>
      <Text style={styles.heading}>Select Player Count</Text>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity style={styles.button} onPress={handleSubtract}>
          <AntDesign name="minus" size={20} />
        </TouchableOpacity>

        <Text
          style={{
            width: "70%",
            textAlign: "center",
            borderTopWidth: 1,
            borderBottomWidth: 1,
            height: 45,
            textAlignVertical: "center",
            borderColor: "#1111",
          }}
        >
          {count} Players
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <AntDesign name="plus" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PlayerCount;

const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 20,
  },
  button: {
    width: 45,
    height: 45,
    backgroundColor: "#1111",
    justifyContent: "center",
    alignItems: "center",
  },
});
