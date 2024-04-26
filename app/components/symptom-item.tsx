import {View, Text} from "react-native";
import React from "react";
import styled from "styled-components/native";

export type SymptomCategory = {
    name: string;
    color: string;
}
export type Symptom = {
    name: string;
    severity: number;
    category: SymptomCategory;
}

interface Props {
    name: string;
    color: string;
    severity: number;
}

const S = {
    ItemContainer: styled(View)<{ $color: string }>`
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        ${({$color}) => `background-color: ${$color};`}
        border-radius: 32px;
        padding: 10px;
        margin-top: 8px;
    `,
    SymptomText: styled(Text)`
        align-self: center;
        opacity: 1;
        padding-left: 8px;
    `,
    Severity: styled(Text)`
        background-color: white;
        padding: 4px 8px;
        border: white solid 1px;
        border-radius: 20px;
        opacity: 1;
    `,

}

export const SymptomItem = (props: Props) => {
    const {name, color, severity} = props;

    return <S.ItemContainer $color={color}>
        <S.SymptomText>
            {name}
        </S.SymptomText>
        <S.Severity>
            {severity}
        </S.Severity>
    </S.ItemContainer>
}