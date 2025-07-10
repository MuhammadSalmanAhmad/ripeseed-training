import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { convertRate } from "../../services/rateCoversion";
import { ArrowDown, ArrowUpDown } from "lucide-react-native";
import CurrencyPicker from "./CurrencyPicker";
import Toast from "react-native-toast-message";

const HomeCard = () => {
  const [amount, setAmount] = useState("");
  const [sourceCurrency, setSource] = useState("USD");
  const [targetCurrency, setTarget] = useState("PKR");
  const [result, setResult] = useState(undefined);

  return (
    <View className="h-[300px] w-[350px] bg-white rounded-2xl mt-10 p-8 gap-3">
      <Text className="text-lg text-secondary">Amount</Text>
      <View className="flex-row items-center justify-between gap-4">
        <View className="flex-row items-center">
          <CurrencyPicker
            currency={sourceCurrency}
            onSelectCurrency={setSource}
          ></CurrencyPicker>
          <ArrowDown color="grey" size={18} strokeWidth={2} />
        </View>
        <TextInput
          className="w-[141px] h-[45px] bg-[#EFEFEF] rounded-lg p-2 text-secondary text-center"
          placeholder="Enter Amount"
          onChangeText={(value) => {
            setAmount(value);
          }}
        ></TextInput>
      </View>
      <View className="flex-row items-center justify-center">
        <TouchableOpacity
          onPress={async () => {
            if (amount === "") {
              Alert.alert("enter an amount");
            }

            let result = await convertRate(
              sourceCurrency,
              targetCurrency,
              amount
            );

            setResult(result);
          }}
        >
          <View className="h-[44px] w-[44px] bg-primary items-center justify-center rounded-3xl mt-4">
            <ArrowUpDown color={"white"} />
          </View>
        </TouchableOpacity>
      </View>
      <Text className="text-lg text-secondary">Covert Amount</Text>
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          <CurrencyPicker
            currency={targetCurrency}
            onSelectCurrency={setTarget}
          ></CurrencyPicker>
          <ArrowDown color="grey" size={18} strokeWidth={2} />
        </View>
        <Text className="w-[141px] h-[45px] bg-[#EFEFEF] rounded-lg p-2 text-secondary text-center">
          {result === undefined ? "amount ?" : result}
        </Text>
      </View>
    </View>
  );
};

export default HomeCard;
