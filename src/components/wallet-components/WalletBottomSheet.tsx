import { View, Text, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import { LinearGradient } from "expo-linear-gradient";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const WalletBottomSheet = ({ refRBSheet }: any) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState("date");
  const [time, setTime] = useState("time");

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = async (pickedDate:Date) => {
    await setDate(pickedDate.toLocaleDateString());
    await setTime(pickedDate.toLocaleTimeString());

    hideDatePicker();
  };

  return (
    <View className="flex-1">
      <RBSheet
        ref={refRBSheet}
        useNativeDriver={false}
        customStyles={{
          container: {
            overflow: "hidden",
            height: 300,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 0,
          },
          wrapper: {
            backgroundColor: "",
          },
        }}
        customModalProps={{
          animationType: "slide",
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}
      >
        <LinearGradient
          colors={["#6894CD", "#DDF6F3", "#FFFFFF"]} // change these as needed
          style={{ flex: 1, padding: 16 }}
        >
          <View className="items-center flex-1 gap-2 w-full">
            <View className="gap-5 w-full items-center">
              <View className="flex-row w-full justify-between">
                <Text className="text-primary text-base">
                  Your selected date :
                </Text>
                <Text className="w-[100px] h-[35px] bg-white rounded-xl p-2 text-secondary text-center border-primary border-2">
                  {date}
                </Text>
              </View>
              <View className="flex-row w-full justify-between">
                <Text className="text-primary text-base ">
                  Your selected time :
                </Text>
                <Text className="w-[100px] h-[35px] bg-white rounded-xl p-2 text-secondary text-center border-primary border-2">
                  {time}
                </Text>
              </View>
            </View>
            <TouchableOpacity className="bg-primary p-4 rounded-lg items-center mr-10 ml-10 mt-8">
              <Text
                className="text-white font-bold text-lg"
                onPress={() => {
                  setDatePickerVisibility(true);
                }}
              >
                Select Date and Time
              </Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              date={new Date()}
              mode="datetime"
              onConfirm={handleConfirm}
              display="inline"
              onCancel={hideDatePicker}
            />
          </View>
        </LinearGradient>
      </RBSheet>
    </View>
  );
};

export default WalletBottomSheet;
