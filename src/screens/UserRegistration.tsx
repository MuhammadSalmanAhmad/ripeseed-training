
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthFooter from "../components/auth-components/AuthFooter";
import SignUpForm from "../components/auth-components/SignUpForm";

const SignUp = () => {
    return (
        <SafeAreaView className="flex-1">
            <View className="flex-1 px-6 justify-between">
                <Text className="text-2xl font-semibold text-primary">
                    Welcome, Please enter your details
                </Text>
                <SignUpForm></SignUpForm>
                <AuthFooter
                    linkTo="Login"
                    linkText="Login"
                    prompText="Already have an account ?"
                ></AuthFooter>
            </View>
        </SafeAreaView>
    );
};

export default SignUp;
