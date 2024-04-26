import React from "react";
import {View, Modal, Button, Text, TouchableOpacity, TextInput} from "react-native";
import styled from "styled-components/native";

interface ModalProps {
    isOpen: boolean;
    prompt: string;
    onConfirm: () => void;
    confirmText: string;
    onCancel?: () => void;
    cancelText?: string;
}

const S = {
    Content: styled(View)`
        display: flex;
        position: absolute;
        bottom: 0;
        height: fit-content;
        width: 100%;
        padding: 0 16px 16px 16px;
        background: white;
    `,
    Button: styled(TouchableOpacity)`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 40%;
        height: 60px;
        border: black solid 1px;
        border-radius: 16px;
    `,
    ButtonText: styled(Text)`
        font-size: 16px;
        align-self: center;
    `,
    ButtonView: styled(View)`
        display: flex;
        flex-direction: row;
        padding: 0 8px;
        justify-content: space-between;
    `,
    Prompt: styled(Text)`
        display: flex;
        flex-direction: row;
        align-self: center;
        padding: 24px;
        font-size: 16px;
        font-weight: bold;

    `,
    InputWrapper: styled(View)`
    display: flex;
flex-direction: row;
        justify-content: space-between;
        width: 100%;
        padding: 8px
    `,
    TextInput: styled(TextInput)`
        display: flex;
        width: 50%;
    border: black solid 1px;
    `
}

export const SymptomModal = (props: ModalProps) => {
    const {isOpen, onConfirm, onCancel, confirmText, cancelText, prompt} = props;

    return <Modal visible={isOpen} onDismiss={onCancel} transparent animationType={"slide"}>
        <S.Content>
            <S.InputWrapper>
                <Text>Name</Text>
                <S.TextInput/>
            </S.InputWrapper>
            <S.InputWrapper>
                <Text>Category</Text>
                <S.TextInput/>
            </S.InputWrapper>
                <S.InputWrapper>
                    <Text>Color</Text>
                    <S.TextInput/>
                </S.InputWrapper>
            <S.ButtonView>
                <S.Button onPress={onConfirm} style={{backgroundColor: "whitesmoke"}}>
                    <S.ButtonText>{confirmText}</S.ButtonText>
                </S.Button>
                {cancelText && onCancel && <S.Button onPress={onCancel}>
                    <S.ButtonText>
                        {cancelText}
                    </S.ButtonText>
                </S.Button>}
            </S.ButtonView>
        </S.Content>
    </Modal>
}