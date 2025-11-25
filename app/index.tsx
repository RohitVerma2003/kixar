import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Home() {
  const [booking, setBooking] = useState<any>(null);

  useEffect(() => {
    const loadBooking = async () => {
      try {
        const data = await AsyncStorage.getItem("latestBooking");
        if (data) setBooking(JSON.parse(data));
      } catch (error) {
        console.log("Error loading booking:", error);
      }
    };
    loadBooking();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.heading}>Your Booking</Text>

          {!booking && (
            <View style={styles.noBookingCard}>
              <Ionicons name="alert-circle-outline" size={40} color="#aaa" />
              <Text style={styles.noBookingText}>No booking yet</Text>
              <Text style={styles.noBookingSubText}>
                Book a court to see your details here.
              </Text>
            </View>
          )}

          {booking && (
            <View style={styles.bookingCard}>
              <Text style={styles.title}>Booking Details</Text>

              <View style={styles.row}>
                <Ionicons name="calendar-outline" size={24} color="#0ABAB5" />
                <View style={styles.textGroup}>
                  <Text style={styles.label}>Date</Text>
                  <Text style={styles.value}>
                    {new Date(booking.date).toLocaleDateString("en-IN", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </Text>
                </View>
              </View>

              <View style={styles.row}>
                <Ionicons name="time-outline" size={24} color="#0ABAB5" />
                <View style={styles.textGroup}>
                  <Text style={styles.label}>Time</Text>
                  <Text style={styles.value}>
                    {booking.slot}:00 - {booking.slot + 1}:00 ({booking.period})
                  </Text>
                </View>
              </View>

              <View style={styles.row}>
                <MaterialCommunityIcons
                  name="stadium-variant"
                  size={26}
                  color="#0ABAB5"
                />
                <View style={styles.textGroup}>
                  <Text style={styles.label}>Court</Text>
                  <Text style={styles.value}>
                    {booking.court.toUpperCase()}
                  </Text>
                </View>
              </View>

              <View style={styles.row}>
                <Ionicons name="people-outline" size={24} color="#0ABAB5" />
                <View style={styles.textGroup}>
                  <Text style={styles.label}>Players</Text>
                  <Text style={styles.value}>{booking.players}</Text>
                </View>
              </View>

              <View style={styles.row}>
                <Ionicons name="wallet-outline" size={24} color="#0ABAB5" />
                <View style={styles.textGroup}>
                  <Text style={styles.label}>Total Cost</Text>
                  <Text style={styles.value}>₹{booking.cost}</Text>
                </View>
              </View>

              <Text style={styles.createdAt}>
                Booked on: {new Date(booking.createdAt).toLocaleString()}
              </Text>
            </View>
          )}
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.bookButton}
            onPress={() => router.push("/venue")}
          >
            <Text style={styles.bookButtonText}>Book Venue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 140,
  },
  heading: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },

  // No Booking
  noBookingCard: {
    padding: 30,
    borderRadius: 15,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    elevation: 2,
  },
  noBookingText: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: "600",
    color: "#555",
  },
  noBookingSubText: {
    marginTop: 5,
    fontSize: 14,
    color: "#888",
  },

  // Booking Card
  bookingCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    elevation: 4,
    borderLeftWidth: 6,
    borderLeftColor: "#0ABAB5",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  textGroup: {
    marginLeft: 15,
  },
  label: {
    fontSize: 14,
    color: "#777",
  },
  value: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 2,
  },
  createdAt: {
    marginTop: 15,
    fontSize: 12,
    color: "#999",
    textAlign: "right",
  },

  // Bottom button
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#eee",
  },
  bookButton: {
    backgroundColor: "#0ABAB5",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
  },
  bookButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});
