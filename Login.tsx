import {
  TextInput,
  View,
  Text,
  ActivityIndicator,
  Button,
  KeyboardAvoidingView,
  ImageBackground,
  Image
} from "react-native";
import React, { useState } from "react";
import { FIREBASE_AUTH } from "./firebase.config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

const S = {
  TextInput: styled(TextInput)`
    height: 40px;
    margin: 8px;
    padding-left: 8px;
    background-color: white;
    border: grey solid 1px;
  `
}

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{display: "flex", flex: 1, backgroundColor: "white", paddingTop: 24}} >
      <KeyboardAvoidingView style={{marginTop: "auto", marginBottom: "auto"}}>
        <S.TextInput
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <S.TextInput
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
        {loading ? (
          <ActivityIndicator size={"large"} />
        ) : (
          <View style={{ padding: 8, gap: 8 }}>
            <Button title="Sign In" onPress={signIn} color={"blue"} />
            <Button title="Sign Up" onPress={signUp} color={"blue"} />
          </View>
        )}
      
      </KeyboardAvoidingView>
    </SafeAreaView>
    
  );
};
