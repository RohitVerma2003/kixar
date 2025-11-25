import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

type dropdown = {
  label: string;
  value: string;
};

const data: dropdown[] = [
  { label: "6:00 PM - 7:00 PM", value: "6-7" },
  { label: "7:00 PM - 8:00 PM", value: "7-8" },
  { label: "8:00 PM - 9:00 PM", value: "8-9" },
];

const Timings = () => {
  const [value, setValue] = useState("6-7");
  return (
    <View>
      <Text style={styles.heading}>Timings Information</Text>

      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
          borderColor: "#ccc",
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 3,
          width: "100%",
        }}
      >
        <Text
          style={{
            height: 50,
            textAlignVertical: "center",
            fontWeight: "500",
          }}
        >
          Monday
        </Text>
        <Dropdown
          style={{
            height: 50,
            width: "60%",
            borderLeftWidth: 1,
            paddingHorizontal: 10,
            borderColor: "#777C6D"            
          }}
          placeholderStyle={{ color: "#888" }}
          selectedTextStyle={{ color: "#000" }}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          value={value}
          onChange={(item) => setValue(item.value)}
        />
      </View>
    </View>
  );
};

export default Timings;

const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 20,
  },
});
