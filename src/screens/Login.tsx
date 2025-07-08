import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import FormInputController from "../components/form-components/FormInputController";
import { MailIcon, Lock } from "lucide-react-native";
import AuthButton from "../components/auth-components/AuthButton";
import AuthFooter from "../components/auth-components/AuthFooter";
import { useForm } from "react-hook-form";
import { Button } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schemas/authSchemas";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver:yupResolver(loginSchema)
  });
  const navigation = useNavigation<any>();
  const onSubmit = (data:any) => {
    //alert(data);
    console.log("data", data);
    Alert.alert(JSON.stringify(data));
    console.log(errors)
    navigation.navigate('Home')
  };
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1">
        <View className="items-center">
          <Text className="text-4xl text-primary font-semibold">
            Welcome to Nayapay
          </Text>
        </View>
        <View className="flex-1 justify-center px-6">
          <Text className="mb-2 font-semibold text-2xl text-primary">
            Login
          </Text>
          <View className="space-y-10 flex-col">
            <FormInputController
              placeholder="Email"
              Icon={MailIcon}
              name="email"
              control={control}
              errors={errors}
            />
            <FormInputController
              placeholder="Password"
              Icon={Lock}
              name="password"
              control={control}
              secureTextEntry={true}
              errors={errors}
            />
          </View>
          <AuthButton
            buttonName="Login"
            handleSubmit={handleSubmit(onSubmit)}
          ></AuthButton>
          {/* <Button title="submit" onPress={handleSubmit(onSubmit)}></Button> */}
        </View>
        <AuthFooter
          linkTo="SignUp"
          prompText="Dont have any account ? "
          linkText="SignUp"
        ></AuthFooter>
      </View>
    </SafeAreaView>
  );
};

export default Login;
