import { BookingProvider } from "@/context/bookingContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <BookingProvider>
      <Stack screenOptions={{ headerShown: false }}>
      </Stack>
    </BookingProvider>
  );
}
