import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import { Lable, MobileInput } from '../Login/style';

export default function ForgotPassword({ navigation }) {
    const [email, onChangeEmail] = useState('');
    // console.log('props==', navigation);
    return (
        <View style={{flex: 1, justifyContent: 'center', marginHorizontal: 20}}>
            <Text style={{ textAlign: 'center', fontSize: 20}}>Forgot Password</Text>
            <Lable>Email</Lable>
            <MobileInput
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Emial..."
                keyboardType= "email-address"
                // onChange={({ nativeEvent: { text} })=> {setInputLenght(text.length);
                //     inputLength === 9 ? setBorderValidation('green') : initialInputTouch && setBorderValidation('red') ;
                // }}
                // onPressIn={()=> {inputLength !== 9 && setInitialInputtouch(true); setBorderValidation('red'); }}
            />
            <Button onPress={() =>  navigation.navigate('Login')} title="send otp" color="#006400" />
        </View>
    );
}

ForgotPassword.propTypes = {
    navigation: PropTypes.any,
};