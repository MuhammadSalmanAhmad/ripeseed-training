import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import BallanceCard from "../components/wallet-components/BallanceCard";
import TransactionHistory from "../components/wallet-components/TransactionHistory";
import RBSheet from "react-native-raw-bottom-sheet";
import WalletBottomSheet from "../components/wallet-components/WalletBottomSheet";

const WalletScreen = () => {
  const refRBSheet = useRef<any>(null);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient colors={["#E7F1FF", "#FFFFFF"]} style={{ flex: 1 }}>
        <View className="flex-1 items-center p-10">
          <Text className="text-2xl text-primary font-bold">
            Nayapay Wallet
          </Text>
          <Text className="text-secondary text-center text-base">
            Manage and transfer funds anywhere, any time.
          </Text>
          <BallanceCard bottomref={refRBSheet}></BallanceCard>
          <TransactionHistory></TransactionHistory>
          <WalletBottomSheet refRBSheet={refRBSheet}></WalletBottomSheet>
          
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default WalletScreen;
