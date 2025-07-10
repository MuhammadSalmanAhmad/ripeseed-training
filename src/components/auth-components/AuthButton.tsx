import { TouchableOpacity, Text } from "react-native";

import React from "react";

interface AuthButtonProps {
  buttonName: string;
  handleSubmit: any;
}

const AuthButton = ({ buttonName, handleSubmit }: AuthButtonProps) => {
  return (
    <TouchableOpacity
      className="bg-primary w-full py-4 rounded-lg items-center"
      onPress={handleSubmit}
    >
      <Text className=" text-white font-bold text-xl">{buttonName}</Text>
    </TouchableOpacity>
  );
};

export default AuthButton;
