import React, {useCallback, useEffect} from "react";
import {View, Text, FlatList} from "react-native";
import styled from "styled-components/native";
import {Ionicons} from "@expo/vector-icons";
import {connectToDatabase, createTables} from "../../database/db";
import {SQLiteDatabase} from "react-native-sqlite-storage";
import {Symptom} from "../components/symptom-item";
import {getSymptoms} from "../../database/symptoms";
import {SafeAreaView} from "react-native-safe-area-context";
import {SymptomModal} from "../components/symptom-modal";

const S = {
    Header: styled(View)`
    display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        padding: 16px;
    `,
    LeftIcon: styled(Ionicons)`
        
    `,
    RightIcon: styled(Ionicons)``,
    HeaderText: styled(Text)`
        font-size: 20px;
    `,
    SymptomList: styled(FlatList<string>)`
        display: flex;
        flex: 1 1 auto;
        overflow: hidden;
        min-height: 0;
        `
}

export const CreateSymptoms = () => {
    const [list, setList] = React.useState<string[]>([]);

    const getData  = useCallback(async() =>  {
        try {
            const db = await connectToDatabase();
            const symp = await getSymptoms(db);
            console.log(symp);
            if (symp.length) {
                setList(symp);
            }
        } catch (error) {
            console.error(error)
        }
    },[])

    console.log("Symptoms", list);

    useEffect(() => {
        getData();
    }, [getData]);
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <SafeAreaView>
            <S.Header>
                <S.LeftIcon name={"arrow-back"} size={24} />
                <S.HeaderText>Symptoms List</S.HeaderText>
                <S.RightIcon name={"add"} size={24} onPress={() => setIsOpen(true)}/>
            </S.Header>
            <S.SymptomList data={list} renderItem={({item}) => {return (<Text>{item}</Text>)}}/>
            <SymptomModal isOpen={isOpen} prompt={"Add a symptom"} onConfirm={() => {}} confirmText={"Save"} cancelText={"Cancel"} onCancel={() => setIsOpen(false)} />
        </SafeAreaView>
    )
}