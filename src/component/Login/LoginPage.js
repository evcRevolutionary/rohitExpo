import React, {useState} from 'react';
import {
    Button,
    Animated,
    Text,
    ToastAndroid
} from 'react-native';
import PropTypes from 'prop-types';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { 
    Lable, 
    MobileInput, 
    ButtonContainer, 
    BigLabel, 
    GoogleText,
    DontHaveAccountLable,
    ClickLable,
} from './style';
import {schedulePushNotification } from '../Notification';
export default function LoginPage({fadeAnim, navigation}){
    const [email, onChangeEmail] = useState('');
    const [pass, setPassword] = useState(null);
    const [showBorderEmail, setBorderValidationEmail] = useState('#A9A9A9');
    const [showBorderPass, setBorderValidationPass] = useState('#A9A9A9');

    const onPressLearnMore = async () => {
        ToastAndroid.show('Loign Succesfully', ToastAndroid.SHORT);
        // await schedulePushNotification();
        navigation.navigate('Menu');
    };

    const validateEmail = (text) => {
        const reg = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w\w+)+$/;
        onChangeEmail(text);
        if(reg.test(text)) setBorderValidationEmail('#006400');
        if(!reg.test(text)) setBorderValidationEmail('red');
    };

    const validatePass = (text) => {
        setPassword(text);
        if(text.length === 6) setBorderValidationPass('#006400');
        if(text.length !== 6) setBorderValidationPass('red');
    };

    return (
        <Animated.View style={{
            opacity: fadeAnim,
        }}>
            <Text style={{
                fontSize: 40,
                textAlign: 'center',
                fontWeight: '700',
            }}>Login</Text>
            <Lable>Email</Lable>
            <MobileInput
                showborder={showBorderEmail}
                onChangeText={validateEmail}
                value={email}
                placeholder="Email.."
                keyboardType= "email-address"
                onPressIn={()=> {
                    // console.log('===', showBorderEmail);
                    if(showBorderEmail === 'red' || showBorderEmail === '#A9A9A9') setBorderValidationEmail('red');
                    if(showBorderEmail === '#006400') setBorderValidationEmail('#006400');
                }}
            />
            <Lable>Password</Lable>
            <MobileInput
                showborder={showBorderPass}
                onChangeText={validatePass}
                value={pass}
                placeholder="password..."
                keyboardType= "numeric"
                maxLength={6}
                secureTextEntry={true}
                onPressIn={()=> {
                    if(showBorderPass === 'red' || showBorderPass === '#A9A9A9') setBorderValidationPass('red');
                    if(showBorderPass === '#006400') setBorderValidationPass('#006400');
                }}
            />
            <BigLabel> 
                <ClickLable onPress={() => navigation.navigate('ForgotPassword')}>forgot pasword</ClickLable>
            </BigLabel>
            <ButtonContainer>
                <Button disabled={(showBorderPass !== '#006400') || (showBorderEmail !== '#006400')} onPress={onPressLearnMore} title="Login" color="#00755E" />
            </ButtonContainer>
            <DontHaveAccountLable>don&apos;t have account?</DontHaveAccountLable>
            <BigLabel isCenter={true}> 
                <ClickLable onPress={() => navigation.navigate('Resgister')}>SignUp</ClickLable>
            </BigLabel>
            <ButtonContainer isIcon={true}>
                <MaterialCommunityIcons
                    name="google"
                    size={25}
                    style={{ color: 'white', zIndex: 1 }}
                />
                <GoogleText>Login with Google</GoogleText>
            </ButtonContainer>
        </Animated.View>
    );
}

LoginPage.propTypes = {
    fadeAnim: PropTypes.any,
    navigation: PropTypes.any,
};