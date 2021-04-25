import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Haze: {
    iconName: "weather-fog",
    gradient: ["#E8CBC0", "#636FA4"],
    title: "Haze",
    subtitle: "thought I was eating hot ramen with glasses on",
  },
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#3C3B3F", "#605C3C"],
    title: "Thunderstrom",
    subtitle: "Let's hug the cat and stay home",
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#108dc7", "#ef8e38"],
    title: "Drizzle",
    subtitle: "With a cup of coffee, my heart is filled with emotion",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#E8CBC0", "#636FA4"],
    title: "Rain",
    subtitle: "Don't disturb me. I'm traveling to dreamland now",
  },
  Snow: {
    iconName: "weather-snowy-heavy",
    gradient: ["#1c92d2", "#f2fcfe"],
    title: "Snow",
    subtitle: "Snow always falls silently and silently",
  },
  Atmosphere: {
    iconName: "weather-partly-cloudy",
    gradient: ["#FC5C7D", "#6A82FB"],
    title: "Atmosphere",
    subtitle: "What kind of weather is this?",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "Clear",
    subtitle: "Isn't this the weather you want to escape from somewhere?",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D66D75", "#E29587"],
    title: "Clouds",
    subtitle: "This is not Google Cloud",
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#DAD299", "#B0DAB9"],
    title: "Mist",
    subtitle:
      "It's the same condition as my room after vacation with the humidifier on",
  },
  Dust: {
    iconName: "weather-cloudy-alert",
    gradient: ["#FFA17F", "#00223E"],
    title: "Dust",
    subtitle: "Covid 19 gave me a gift of dust free. Thank you!",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}°C</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 26,
  },
  textContainer: {
    paddingHorizontal: 30,
    alignItems: "flex-start",
  },
});
