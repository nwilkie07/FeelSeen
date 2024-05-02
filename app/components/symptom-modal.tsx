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
        width: 100%;
        height: 44px;
        border: black solid 1px;
        border-radius: 16px;
    `,
    ButtonText: styled(Text)`
        font-size: 16px;
        align-self: center;
    `,
    ButtonView: styled(View)`
        width: 100%;
        padding: 0 8px;
        gap: 8px;
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
        padding: 8px;
    `,
    TextInput: styled(TextInput)`
        display: flex;
        width: 50%;
        border: black solid 1px;
        padding: 4px;
    `,
    ModalHeader: styled(Text)`
        display: flex;
        align-self: center;
        padding: 16px;
        font-weight: bold;
    `,
    InputContainer: styled(View)`
        padding-bottom: 16px;
    `
}

export const SymptomModal = (props: ModalProps) => {
    const {isOpen, onConfirm, onCancel, confirmText, cancelText, prompt} = props;

    const [name, setName] = React.useState("");
    const [category, setCategory] = React.useState('');
    const [color, setColor] = React.useState('');

    const saveSymptom = () => {
        console.log("%s, %s, %s", name, category, color);
    }

    return <Modal visible={isOpen} onDismiss={onCancel} transparent animationType={"slide"}>
        <S.Content>
            <S.ModalHeader>Add A Symptom</S.ModalHeader>
            <S.InputContainer>
                <S.InputWrapper>
                    <Text>Name</Text>
                    <S.TextInput onChangeText={setName} value={name} />
                </S.InputWrapper>
                <S.InputWrapper>
                    <Text>Category</Text>
                    <S.TextInput onChangeText={setCategory} value={category} />
                </S.InputWrapper>
                <S.InputWrapper>
                    <Text>Color</Text>
                    <S.TextInput onChangeText={setColor} value={color} />
                </S.InputWrapper>
            </S.InputContainer>
            <S.ButtonView>
                <S.Button onPress={saveSymptom} style={{backgroundColor: "whitesmoke"}}>
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