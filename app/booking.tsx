import DateSelect from "@/components/DateSelect";
import PlayerCount from "@/components/PlayerCount";
import SelectCourt from "@/components/SelectCourt";
import TimeSelect from "@/components/TimeSelect";
import { useBooking } from "@/context/bookingContext";
import React from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const booking = () => {
  const { booking, book } = useBooking();

  const handleBooking = async () => {
    const result = await book();

    if (result.success) {
      Alert.alert("Success", result.message);
    } else {
      Alert.alert("Error", result.message);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ margin: 20, paddingBottom: 40 }}>
          <View
            style={{
              borderBottomWidth: 1,
              paddingVertical: 20,
              borderColor: "#777C6D",
            }}
          >
            <DateSelect />
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              paddingVertical: 20,
              borderColor: "#777C6D",
            }}
          >
            <TimeSelect />
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              paddingVertical: 20,
              borderColor: "#777C6D",
            }}
          >
            <SelectCourt />
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              paddingVertical: 20,
              borderColor: "#777C6D",
            }}
          >
            <PlayerCount />
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
              ${booking.cost}{" "}
              <Text style={{ fontSize: 12, color: "#777C6D" }}>
                / $240 per player
              </Text>
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: "#63A361",
                textDecorationLine: "underline",
              }}
            >
              view price breakup
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: "#56DFCF",
                padding: 12,
                borderRadius: 10,
              }}
              onPress={() => handleBooking()}
            >
              <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default booking;

const styles = StyleSheet.create({
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
    paddingVertical: 5,
  },
});
