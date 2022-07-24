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
} from './style';
export default function LoginPage({fadeAnim, navigation}){
    const [email, onChangeEmail] = useState('');
    const [inputLength, setInputLenght] = useState(0);
    const [showborder, setBorderValidation] = useState('#A9A9A9');
    const [initialInputTouch, setInitialInputtouch]= useState(false);

    const onPressLearnMore = () => {
        ToastAndroid.show('Loign Succesfully', ToastAndroid.SHORT);
        navigation.navigate('Menu');
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
            <Lable>Mobile No</Lable>
            <MobileInput
                showborder={showborder}
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Mobile No..."
                keyboardType= "numeric"
                maxLength={10}
                onChange={({ nativeEvent: { text} })=> {setInputLenght(text.length);
                    inputLength === 9 ? setBorderValidation('green') : initialInputTouch && setBorderValidation('red') ;
                }}
                onPressIn={()=> {inputLength !== 9 && setInitialInputtouch(true); setBorderValidation('red'); }}
            />
            <ButtonContainer>
                <Button onPress={onPressLearnMore} title="Login" color="black" />
            </ButtonContainer>
            <BigLabel>forgot password</BigLabel>
            <BigLabel onPress={() => navigation.navigate('Resgister')}> 
                 ---or---
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