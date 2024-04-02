import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import { FIREBASE_AUTH  } from "../../firebase.config";

export const HomeScreen = () => {

 return (<View>
    <Text>Hello</Text>
    <Button title="Sign Out" onPress={() => FIREBASE_AUTH.signOut()}/>
 </View>)
};