import { useBooking } from "@/context/bookingContext";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getDatesToEndOfMonth = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const lastDay = new Date(year, month + 1, 0).getDate();
  const result = [];

  for (let d = today.getDate(); d <= lastDay; d++) {
    const current = new Date(year, month, d);
    result.push({
      id: d,
      date: d,
      day: days[current.getDay()],
    });
  }

  return result;
};

const DateSelect = () => {
  const { booking, setDate } = useBooking();
  const dates = getDatesToEndOfMonth();

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  return (
    <View>
      <Text style={styles.heading}>Select Date</Text>

      <Text style={styles.month}>
        {monthNames[month]} {year}
      </Text>

      <FlatList
        horizontal
        data={dates}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        renderItem={({ item }) => {
          const isSelected = booking.date === item.date.toString();

          return (
            <TouchableOpacity
              onPress={() => setDate(item.date.toString())} 
              style={[styles.card]}
            >
              <Text
                style={[styles.day, { color: isSelected ? "#000" : "#555" }]}
              >
                {item.day}
              </Text>

              <Text
                style={[
                  styles.date,
                  {
                    color: isSelected ? "white" : "#333",
                    backgroundColor: isSelected ? "#0ABAB5" : "#e5e5e5",
                  },
                ]}
              >
                {item.date}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default DateSelect;

const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 20,
  },
  month: {
    paddingHorizontal: 20,
    paddingBottom: 15,
    fontSize: 18,
    fontWeight: "500",
  },
  card: {
    width: 50,
    height: 65,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  day: {
    fontSize: 12,
    fontWeight: "500",
  },
  date: {
    fontSize: 15,
    fontWeight: "600",
    marginTop: 10,
    padding: 8,
    borderRadius: 10,
  },
});
