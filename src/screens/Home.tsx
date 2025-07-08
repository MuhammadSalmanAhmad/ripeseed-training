import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import HomeCard from "../components/home-components/Card";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient colors={["#E7F1FF", "#FFFFFF"]} style={{ flex: 1 }}>
        <View className="flex-1 items-center p-10">
          <Text className="text-2xl text-primary font-bold">
            Currency Converter
          </Text>
          <Text className="text-secondary text-center text-base">
            Check live rates, set rate alerts, receive notifications and more.
          </Text>
          <HomeCard></HomeCard>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Home;
