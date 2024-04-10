import React from "react";
import {View, Modal, Button, Text, TouchableOpacity} from "react-native";
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
        height: 60px;
        border: black solid 1px;
        border-radius: 16px;
    `,
    ButtonText: styled(Text)`
        font-size: 16px;
        align-self: center;
    `,
    ButtonView: styled(View)`
        gap: 16px;
    `,
    Prompt: styled(Text)`
        display: flex;
        flex-direction: row;
        align-self: center;
        padding: 24px;
        font-size: 16px;
        font-weight: bold;
        
    `
}

export const ConfirmationModal = (props: ModalProps) => {
    const {isOpen, onConfirm, onCancel, confirmText, cancelText, prompt} = props;

    return <Modal visible={isOpen} onDismiss={onCancel} transparent animationType={"slide"}>
        <S.Content>
        <S.Prompt>
            {prompt}
        </S.Prompt>
        <S.ButtonView>
            <S.Button onPress={onConfirm} style={{backgroundColor: "whitesmoke"}}>
                <S.ButtonText>{confirmText}</S.ButtonText>
            </S.Button>
            {cancelText && onCancel && <S.Button onPress={onCancel} >
            <S.ButtonText>
                {cancelText}
            </S.ButtonText>
            </S.Button>}
        </S.ButtonView>
        </S.Content>
    </Modal>
}