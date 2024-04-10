import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {StyleSheet, Text, View} from "react-native";
import {Login} from "./Login";
import {HomeScreen} from "./app/screens/home";
import React, {useEffect, useState} from "react";
import {User, onAuthStateChanged} from "firebase/auth";
import {FIREBASE_AUTH} from "./firebase.config";
import {NavigationFooter} from "./app/components/navigation-footer";

const Stack = createNativeStackNavigator();

export default function App() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        onAuthStateChanged(FIREBASE_AUTH, (user) => {
            setUser(user);
        })
    }, []);

    return (
        <View style={{display: "flex", height: `${100}%`}}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    {user === null ? <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{headerShown: false}}
                    /> : <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>}
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
