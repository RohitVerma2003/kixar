import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, ReactNode, useContext, useState } from "react";

type Period = "morning" | "noon" | "evening" | "night" | null;

type BookingData = {
  name: string;
  date: string | null;
  period: Period;
  slot: number | null;
  court: string | null;
  players: number;
  cost: number;
};

type BookingContextType = {
  booking: BookingData;
  setDate: (date: string) => void;
  setPeriod: (period: Period) => void;
  setSlot: (slot: number) => void;
  setCourt: (court: string) => void;
  setPlayers: (count: number) => void;
  book: () => Promise<{ success: boolean; message: string }>;
  resetBooking: () => void;
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [booking, setBooking] = useState<BookingData>({
    name: "Xciteplay Club",
    date: new Date().toISOString().split("T")[0],
    period: null,
    slot: null,
    court: null,
    players: 1,
    cost: 240,
  });

  const setDate = (date: string) => setBooking((prev) => ({ ...prev, date }));

  const setPeriod = (period: Period) =>
    setBooking((prev) => ({ ...prev, period, slot: null }));

  const setSlot = (slot: number | null) =>
    setBooking((prev) => ({ ...prev, slot }));

  const setCourt = (court: string) =>
    setBooking((prev) => ({ ...prev, court }));

  const setPlayers = (players: number) =>
    setBooking((prev) => ({ ...prev, players, cost: players * 240 }));

  const book = async () => {
    if (!booking.date)
      return { success: false, message: "Please select a date." };

    if (!booking.period)
      return { success: false, message: "Please select a period." };

    if (booking.slot === null)
      return { success: false, message: "Please select a time slot." };

    if (!booking.court)
      return { success: false, message: "Please select a court/venue." };

    if (!booking.players || booking.players < 1)
      return { success: false, message: "Select at least 1 player." };

    try {
      await AsyncStorage.setItem(
        "latestBooking",
        JSON.stringify({
          ...booking,
          createdAt: new Date().toISOString(),
        })
      );

      return { success: true, message: "Booking successful!" };
    } catch (error) {
      return { success: false, message: "Failed to save booking." };
    }
  };

  const resetBooking = () =>
    setBooking({
      name: "Xciteplay Club",
      date: null,
      period: null,
      slot: null,
      court: null,
      players: 1,
      cost: 240,
    });

  return (
    <BookingContext.Provider
      value={{
        booking,
        setDate,
        setPeriod,
        setSlot,
        setCourt,
        setPlayers,
        book,
        resetBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = (): BookingContextType => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
};
