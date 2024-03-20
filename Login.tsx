import {
  TextInput,
  View,
  Text,
  ActivityIndicator,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { FIREBASE_AUTH } from "./firebase.config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

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
      alert("Sign in failed" + error.message);
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
    <View>
      <KeyboardAvoidingView>
        <Text>Login</Text>
        <TextInput
          style={{ height: 60, paddingBottom: 16 }}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={{ height: 60 }}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
        {loading ? (
          <ActivityIndicator size={"large"} />
        ) : (
          <>
            <Button title="Sign In" onPress={signIn} />
            <Button title="Sign Up" onPress={signUp} />
          </>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};
