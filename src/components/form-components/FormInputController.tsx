import { LucideIcon } from "lucide-react-native";
import React from "react";
import { TextInput, View, Text } from "react-native";
import { Control, Controller, FieldErrors, FieldValues } from "react-hook-form";

interface TextFieldProps {
  placeholder: string;
  Icon?: LucideIcon;
  name: string;
  control: Control<any>;
  errors?: FieldErrors;
  secureTextEntry?: boolean;
}

const FormInputController = ({
  placeholder,
  Icon,
  name,
  control,
  secureTextEntry,
  errors = {},
}: TextFieldProps) => {
  return (
    <View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          borderWidth: 2,
          borderRadius: 12,
          borderColor: "#4B5563",
          paddingHorizontal: 24,
          paddingVertical: 8,
          marginBottom: 20,
          alignItems: "center",
          padding: 30,
        }}
      >
        {Icon && <Icon size={20} color="#6B7280" style={{ marginRight: 8 }} />}
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={{ flex: 1, paddingHorizontal: 8 }}
              placeholder={placeholder}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={secureTextEntry}
            />
          )}
          rules={{ required: true }}
        ></Controller>
      </View>
      {errors[name] && (
        <Text className="text-red-500 text-center">
          {errors[name]?.message as string}
        </Text>
      )}
    </View>
  );
};

export default FormInputController;
