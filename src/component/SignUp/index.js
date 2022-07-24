import React, { useState } from 'react';
import {
    SafeAreaView,
    Button,
    ToastAndroid,
} from 'react-native';
import PropTypes from 'prop-types';
import { Lable, ButtonContainer, SignupLabel, SignUpInput } from './style';

export default function SignUp({ navigation }) {
    const [email, onChangeEmail] = useState('');
    const [PassWord, onChangePassword] = useState('');

    const onPressLearnMore = () => {
        ToastAndroid.show('Register Succesfully', ToastAndroid.SHORT);
        navigation.navigate('Login');
    };
    return (
        <SafeAreaView style={{ margin: 12 }}>
            <Lable>First Name</Lable>
            <SignUpInput
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Enter Full Name..."
            />
            <Lable>Email</Lable>
            <SignUpInput
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Enter email..."
            />
            <Lable>Password</Lable>
            <SignUpInput
                onChangeText={onChangePassword}
                value={PassWord}
                placeholder="Enter password..."
                secureTextEntry={true}
            />
            <ButtonContainer>
                <Button onPress={onPressLearnMore} title="sing up" color="black" />
            </ButtonContainer>
            <SignupLabel onPress={() => navigation.navigate('Login')}>
                alerady hav an account ?
            </SignupLabel>
        </SafeAreaView>
    );
}

SignUp.propTypes = {
    navigation: PropTypes.any,
};