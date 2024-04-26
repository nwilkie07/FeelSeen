import {Symptom, SymptomItem} from "../components/symptom-item";
import styled from "styled-components/native";
import React from "react";
import {FlatList} from "react-native";

interface Props {
    symptoms: Symptom[];
}

const S = {
    SymptomList: styled(FlatList<Symptom>)`
        display: flex;
        flex: 1 1 auto;
        overflow: hidden;
        min-height: 0;
        
    `
}

export const SymptomList = (props: Props) => {
    const {symptoms} = props;

    return <S.SymptomList
        data={symptoms}
        renderItem={({item}) => <SymptomItem name={item.name}
                                             color={item.category.color}
                                             severity={item.severity}/>}
    />
}