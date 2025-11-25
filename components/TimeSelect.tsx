import { useBooking } from "@/context/bookingContext";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

type Period = "morning" | "noon" | "evening" | "night";

type Range = {
  start: number;
  end: number;
};

const TIME_RANGES: Record<Period, Range> = {
  morning: { start: 6, end: 12 },
  noon: { start: 12, end: 16 },
  evening: { start: 16, end: 20 },
  night: { start: 20, end: 24 },
};

const getSlots = (start: number, end: number) => {
  const slots = [];
  for (let i = start; i < end; i++) {
    slots.push({ id: i, label: `${i}:00 - ${i + 1}:00` });
  }
  return slots;
};

const TimeSelect = () => {
  const { booking, setPeriod, setSlot } = useBooking();

  return (
    <View>
      <Text style={styles.heading}>Select Time</Text>

      <View>
        <View style={styles.row}>
          <TouchableOpacity
            style={[
              styles.button,
              booking.period === "morning" && styles.selectedButton,
            ]}
            onPress={() => {
              setPeriod("morning");
              setSlot(null);
            }}
          >
            <Ionicons
              name="partly-sunny-outline"
              size={20}
              color={booking.period === "morning" ? "white" : "black"}
            />
            <Text style={[booking.period === "morning" && { color: "white" }]}>
              Morning
            </Text>
            <Text
              style={[
                styles.slot,
                booking.period === "morning" && { color: "white" },
              ]}
            >
              4
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              booking.period === "noon" && styles.selectedButton,
            ]}
            onPress={() => {
              setPeriod("noon");
              setSlot(null);
            }}
          >
            <Ionicons
              name="sunny-outline"
              size={20}
              color={booking.period === "noon" ? "white" : "black"}
            />
            <Text style={[booking.period === "noon" && { color: "white" }]}>
              Noon
            </Text>
            <Text
              style={[
                styles.slot,
                booking.period === "noon" && { color: "white" },
              ]}
            >
              4
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.row, { marginTop: 10 }]}>
          <TouchableOpacity
            style={[
              styles.button,
              booking.period === "evening" && styles.selectedButton,
            ]}
            onPress={() => {
              setPeriod("evening");
              setSlot(null);
            }}
          >
            <MaterialCommunityIcons
              name="weather-sunset"
              size={20}
              color={booking.period === "evening" ? "white" : "black"}
            />
            <Text style={[booking.period === "evening" && { color: "white" }]}>
              Evening
            </Text>
            <Text
              style={[
                styles.slot,
                booking.period === "evening" && { color: "white" },
              ]}
            >
              2
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              booking.period === "night" && styles.selectedButton,
            ]}
            onPress={() => {
              setPeriod("night");
              setSlot(null);
            }}
          >
            <MaterialCommunityIcons
              name="weather-night"
              size={20}
              color={booking.period === "night" ? "white" : "black"}
            />
            <Text style={[booking.period === "night" && { color: "white" }]}>
              Night
            </Text>
            <Text
              style={[
                styles.slot,
                booking.period === "night" && { color: "white" },
              ]}
            >
              1
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* SLOT SELECTOR */}
      {booking.period && (
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 16, marginBottom: 10 }}>Select Slot</Text>

          <FlatList
            horizontal
            data={getSlots(
              TIME_RANGES[booking.period].start,
              TIME_RANGES[booking.period].end
            )}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => setSlot(item.id)}
                style={[
                  styles.slotCard,
                  booking.slot === item.id && styles.activeSlot,
                ]}
              >
                <Text
                  style={{
                    color: booking.slot === item.id ? "white" : "#555",
                  }}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default TimeSelect;

const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 25,
    padding: 10,
    width: "48%",
    justifyContent: "space-around",
  },
  selectedButton: {
    backgroundColor: "black",
    borderColor: "black",
  },
  slot: {
    backgroundColor: "#1111",
    borderRadius: 50,
    width: 25,
    height: 25,
    textAlign: "center",
    textAlignVertical: "center",
  },
  slotCard: {
    padding: 12,
    marginRight: 10,
    backgroundColor: "#e5e5e5",
    borderRadius: 8,
  },
  activeSlot: {
    backgroundColor: "black",
  },
});
