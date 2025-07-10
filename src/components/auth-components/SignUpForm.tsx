import {
  Calendar,
  Lock,
  MailIcon,
  PersonStandingIcon,
  Wallet,
} from "lucide-react-native";
import { View, Text, Alert } from "react-native";
import React from "react";
import FormInputController from "../form-components/FormInputController";
import { useForm } from "react-hook-form";
import AuthButton from "./AuthButton";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "../../schemas/authSchemas";
import { createUser } from "../../services/firebaseAuth";
import { useNavigation } from "@react-navigation/native";

const SignUpForm = () => {
  const navigation = useNavigation<any>();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registrationSchema) });

  const onSubmit = (data: any) => {
    console.log("data", data);
    Alert.alert(JSON.stringify(data));
    createUser(data["email"], data["password"]);
    navigation.navigate("Login");
  };
  console.log(errors);

  return (
    <View className="items-center gap-4 mt-10">
      <FormInputController
        placeholder="User Name"
        Icon={PersonStandingIcon}
        name="username"
        control={control}
        errors={errors}
      ></FormInputController>

      <FormInputController
        placeholder="Email"
        Icon={MailIcon}
        name="email"
        control={control}
        errors={errors}
      ></FormInputController>

      <FormInputController
        placeholder="Password"
        Icon={Lock}
        name="password"
        control={control}
        errors={errors}
        secureTextEntry={true}
      ></FormInputController>

      <FormInputController
        placeholder="Confirm Password"
        Icon={Lock}
        name="confirmpassword"
        control={control}
        errors={errors}
        secureTextEntry={true}
      ></FormInputController>

      <FormInputController
        placeholder="DOB"
        Icon={Calendar}
        name="dob"
        control={control}
        errors={errors}
      ></FormInputController>

      <FormInputController
        placeholder="Wallet Balance"
        Icon={Wallet}
        name="balance"
        control={control}
        errors={errors}
      ></FormInputController>

      <AuthButton
        buttonName="Sign Up"
        handleSubmit={handleSubmit(onSubmit)}
      ></AuthButton>
    </View>
  );
};

export default SignUpForm;
