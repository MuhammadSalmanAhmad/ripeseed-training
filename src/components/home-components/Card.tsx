import { View, Text, Button, TouchableOpacity, TextInput } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { convertRate } from "../../services/rateCoversion";
import { ArrowUpDown } from "lucide-react-native";
import CurrencyPicker from "./CurrencyPicker";

const HomeCard = () => {
  const [amount, setAmount] = useState("");
  const [sourceCurrency, setSource] = useState(Object);
  const [targetCurrency, setTarget] = useState(Object);
  const [result, setResult] = useState(undefined);

  return (
    <View className="h-[268] w-[320px] bg-white rounded-2xl mt-10  p-8 gap-4">
      <Text className="text-lg text-secondary">Amount</Text>
      <View className="flex-row items-center justify-between">
        <CurrencyPicker
          currency={sourceCurrency}
          onSelectCurrency={setSource}
        ></CurrencyPicker>
        <TextInput
          placeholder="Enter Amount"
          onChangeText={(value) => {
            setAmount(value);
          }}
        ></TextInput>
      </View>
      <View className="flex-row items-center justify-center">
        <TouchableOpacity
          onPress={async () => {
            let result = await convertRate(
              sourceCurrency.code,
              targetCurrency.code,
              amount
            );
            setResult(result);
          }}
        >
          <View className="h-[44px] w-[44px] bg-primary items-center justify-center rounded-3xl">
            <ArrowUpDown color={"white"} />
          </View>
        </TouchableOpacity>
      </View>
      <View className="flex-row items-center justify-between">
        <CurrencyPicker
          currency={targetCurrency}
          onSelectCurrency={setTarget}
        ></CurrencyPicker>
        <Text className="text-secondary">
          {result === undefined ? "converted amount " : result}
        </Text>
      </View>
    </View>
  );
};

export default HomeCard;
