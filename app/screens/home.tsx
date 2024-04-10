import {View, Text, Button} from "react-native";
import React, {useState} from "react";
import {FIREBASE_AUTH} from "../../firebase.config";
import {Calendar, ExpandableCalendar, CalendarProvider, DateData} from 'react-native-calendars';
import {SafeAreaView} from "react-native-safe-area-context";
import {NavigationFooter} from "../components/navigation-footer";

export const HomeScreen = () => {
    const today = new Date();

    return (<CalendarProvider date={today.toDateString()}><SafeAreaView
        style={{display: "flex", height: `${100}%`, flexDirection: "column"}}>
        <ExpandableCalendar></ExpandableCalendar>
        <View style={{display: "flex", flexGrow: 1}}><Text>test</Text></View>
        <NavigationFooter/>
    </SafeAreaView></CalendarProvider>)
};