import {View, Text, Button} from "react-native";
import React, {useCallback, useState} from "react";
import {FIREBASE_AUTH} from "../../firebase.config";
import {Calendar, ExpandableCalendar, CalendarProvider, DateData} from 'react-native-calendars';
import {SafeAreaView} from "react-native-safe-area-context";
import {NavigationFooter} from "../components/navigation-footer";
import {Symptom} from "../components/symptom-item";
import {SymptomList} from "./symptom-list";
import styled from "styled-components/native";
import {connectToDatabase, createTables, insertStartData} from "../../database/db";

const S = {
    Container: styled(View)`
        display: flex;
        flex: 1 1 auto;
        min-height: 0;
        padding: 8px 16px;
    `
}

export const HomeScreen = () => {
    const today = new Date();

    const dummySymptoms: Symptom[] = [{name: "Fatigue", severity: 5, category: {
            name: "Medical",
            color: "#a5dfa5"
        }}, {
        name: "Frustration",
        severity: 2,
        category: {
            name: "Emotion",
            color: "#dfa5df"
        }
    },{
        name: "Frustration",
        severity: 2,
        category: {
            name: "Emotion",
            color: "#dfa5df"
        }
    },{
        name: "Frustration",
        severity: 2,
        category: {
            name: "Emotion",
            color: "#dfa5df"
        }
    },{
        name: "Frustration",
        severity: 2,
        category: {
            name: "Emotion",
            color: "#dfa5df"
        }
    },{
        name: "Frustration",
        severity: 2,
        category: {
            name: "Emotion",
            color: "#dfa5df"
        }
    },{
        name: "Frustration",
        severity: 2,
        category: {
            name: "Emotion",
            color: "#dfa5df"
        }
    },{
        name: "Frustration",
        severity: 2,
        category: {
            name: "Emotion",
            color: "#dfa5df"
        }
    },{
        name: "Frustration",
        severity: 2,
        category: {
            name: "Emotion",
            color: "#dfa5df"
        }
    },{
        name: "Frustration",
        severity: 2,
        category: {
            name: "Emotion",
            color: "#dfa5df"
        }
    },{
        name: "Frustration",
        severity: 2,
        category: {
            name: "Emotion",
            color: "#dfa5df"
        }
    },{
        name: "Frustration",
        severity: 2,
        category: {
            name: "Emotion",
            color: "#dfa5df"
        }
    }];

    return (<CalendarProvider date={today.toDateString()}><SafeAreaView
        style={{display: "flex", height: `${100}%`, flexDirection: "column"}}>
        <ExpandableCalendar></ExpandableCalendar>
        <S.Container><SymptomList symptoms={dummySymptoms} /></S.Container>
        <NavigationFooter/>
    </SafeAreaView></CalendarProvider>)
};