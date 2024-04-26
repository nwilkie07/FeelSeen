import React, {useState} from "react";
import {View} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import styled from 'styled-components/native';
import {FIREBASE_AUTH} from "../../firebase.config";
import {ConfirmationModal} from "./confirmation-modal";
import {useNavigation, NavigationProp} from "@react-navigation/native";

const S = {
    NavFooter: styled(View)`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 8px;
        background: white;
    `,
    IonIcon: styled(Ionicons)`
        display: flex;
        padding: 16px;
    `,
}

export const NavigationFooter = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const nav = useNavigation();
    return (
        <S.NavFooter>
            <S.IonIcon name="home" size={24} color="black"/>
            <S.IonIcon name="create" size={24} color="black" onPress={() => nav.navigate(`Create`)}/>
            <S.IonIcon name="exit" size={24} color="black" onPress={() => setModalOpen(true)}/>
            <ConfirmationModal
                isOpen={modalOpen}
                prompt={"Are you sure you want to logout?"}
                onConfirm={() => FIREBASE_AUTH.signOut()}
                confirmText={"Confirm"}
                cancelText={"Cancel"}
                onCancel={() => setModalOpen(false)}
            />
        </S.NavFooter>
    );
}