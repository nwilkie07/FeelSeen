import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import { FIREBASE_AUTH  } from "../../firebase.config";
import {Calendar, ExpandableCalendar, CalendarProvider, DateData} from 'react-native-calendars';
import { SafeAreaView } from "react-native-safe-area-context";
import { dbConnection } from "../../database/dbconnection";

export const HomeScreen = () => {
   const today = new Date();
   dbConnection();

 return (<CalendarProvider date={today.toDateString()}><SafeAreaView style={{display: "flex", height: `${100}%` ,flexDirection: "column"}}>
   <ExpandableCalendar></ExpandableCalendar>
   <View style={{display: "flex", flexGrow: 1}}><Text>test</Text></View>
    <View style={{display: "flex"}}>
    <Button title="Sign Out" onPress={() => FIREBASE_AUTH.signOut()}/>
   </View>
 </SafeAreaView></CalendarProvider>)
};