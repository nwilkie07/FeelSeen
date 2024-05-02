import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {StyleSheet, Text, View} from "react-native";
import {Login} from "./app/screens/login";
import {HomeScreen} from "./app/screens/home";
import React, {useCallback, useEffect, useState} from "react";
import {User, onAuthStateChanged} from "firebase/auth";
import {FIREBASE_AUTH} from "./firebase.config";
import {connectToDatabase, createTables, getTableNames, insertStartData} from "./database/db";
import {CreateSymptoms} from "./app/screens/create-symptoms";

const Stack = createNativeStackNavigator();

export default function App() {
    const [user, setUser] = useState<User | null>(null);

    const loadData = useCallback(async () => {
        try {
            const db = await connectToDatabase();
            await createTables(db)
            await insertStartData(db)
        } catch (error) {
            console.error(error)
        }
    }, [])

    const checkData = useCallback(async () => {
        try {
            const db = await connectToDatabase();
            const n = await getTableNames(db);
            console.log("Table names", n);
            return n;
        } catch (error) {
            console.error(error)
        }
    }, [])

    checkData().then(r => console.log(r));

    useEffect(() => {
        onAuthStateChanged(FIREBASE_AUTH, (user) => {
            setUser(user);
        })
        loadData().then();
    }, [loadData]);

    return (
        <View style={{display: "flex", height: `${100}%`}}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    {user === null ? <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{headerShown: false}}
                    /> : <>
                        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
                        <Stack.Screen name="Create" component={CreateSymptoms} options={{headerShown: false}}/>
                    </>}
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}
