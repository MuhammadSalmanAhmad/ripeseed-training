import {
  useNavigation,
  createStaticNavigation,
} from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

// Remove the incorrect type alias; use useNavigation with proper typing if needed

interface FooterProps {
  prompText: string;
  linkText: string;
  linkTo: string;
}
const AuthFooter = ({ prompText, linkText, linkTo }: FooterProps) => {
  const navigation = useNavigation<any>();
  return (
    <View className="flex-row items-center  justify-center space-x-2 mt-20 pb-4">
      <Text>{prompText}</Text>
      <TouchableOpacity onPress={() => navigation.navigate(linkTo as string)}>
        <Text className="text-primary font-semibold">{linkText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthFooter;
