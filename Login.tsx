import { TextInput, View } from "react-native";
import React from "react";

export const Login = () => {
  return (
    <View>
      <TextInput style={{ height: 60 }} placeholder="Username" />
      <TextInput
        style={{ height: 60 }}
        placeholder="Password"
        secureTextEntry
      />
    </View>
  );
};
