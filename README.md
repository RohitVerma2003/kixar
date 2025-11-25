# 🏏 Venue Booking App

A React Native mobile application built using Expo that allows users to book cricket courts by selecting a date, time slot, court, number of players, and calculates the total cost. The booking is saved in AsyncStorage, and the home screen shows the latest booking with a clean, modern UI.

## 🚀 Setup Instructions

1. Clone the repository

```bash
git clone https://github.com/RohitVerma2003/kixar
cd kixar
```

2. Install dependencies

```bash
npm install
```

3. Install required Expo dependencies
```bash
expo install react-native-vector-icons
expo install @react-native-async-storage/async-storage
expo install react-native-safe-area-context
```

4. Start the development server
```bash
npx expo start
```

---

## 🧠 Assumptions

- The following assumptions were made while building this project:
- Only one booking is stored at a time (latest booking overwrites the previous one).
- Users can only select future dates from today to month-end.
- Time slots are assumed to be 1-hour blocks based on the period (morning, noon, evening, night).
- Each player has a fixed cost of ₹240.
- There are only two courts available (Court A & Court B).
- The app does not use a backend yet — all data is stored locally using AsyncStorage.
- Expo Router is used for navigation.

## Image
<p align="center">
   <img src="https://github.com/user-attachments/assets/b04cb0f6-c7b6-4b96-afd3-27132917f886" width="32%"/>   
   <img src="https://github.com/user-attachments/assets/f3474d28-c626-468b-9841-8e0c2878971e" width="32%"/>   
   <img src="https://github.com/user-attachments/assets/9c97e1ba-dd4b-4279-a903-c3a86b34df28" width="32%"/>   
</p>
















