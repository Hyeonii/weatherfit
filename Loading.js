import React from "react";
import { StyleSheet, Text, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Loading() {
  return (
    <LinearGradient
      colors={["#FEAC5E", "#C779D0", "#4BC0C8"]}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <MaterialCommunityIcons
        style={styles.icon}
        size={96}
        name={"weather-sunset"}
        color="white"
      />
      <Text style={styles.text}>Colorful weathers</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 200,
    backgroundColor: "#D7EFE6",
  },
  icon: {
    marginBottom: 20,
  },
  text: {
    color: "white",
    fontSize: 30,
  },
});
