import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import RBSheet from 'react-native-raw-bottom-sheet';

const BallanceCard = ({ bottomref }) => {

  return (
    <View className="h-[250px] w-[350px] bg-white rounded-2xl mt-10 p-8 justify-between">
      <Text className="font-bold text-secondary text-lg">
        Current Balance :
      </Text>
      <View className="w-full bg-[#EFEFEF] h-[45px]  justify-center items-center rounded-xl">
        <Text className="font-semibold text-center text-lg text-primary">
          $50000
        </Text>
      </View>
      <TouchableOpacity className="bg-primary w-full py-4 rounded-lg items-center" onPress={() => {
        bottomref.current?.open()
        console.log(bottomref.current)
      }
      }>
        <Text className="text-white font-bold text-xl">Transfer Money</Text>
      </TouchableOpacity>

    </View>
  );
};

export default BallanceCard;
