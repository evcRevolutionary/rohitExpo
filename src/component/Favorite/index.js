import React from 'react';
import { View, Button } from 'react-native';
import StripApp from '../../../server/src/StripApp';
import { StripeProvider } from '@stripe/stripe-react-native';

export default function GetLocation() {
    return (
        <View style={{flex: 1}}>
            <StripeProvider 
                publishableKey='pk_test_51LQVRqSDAYIIWmAgGmBNI2ba3ZkjkmsXyIeOsaoPgcek9iRcJ3hQCJzuZytMFIjNozrkOUKEEZnoJvy7EqLggaYm00pQ9wEjV0'
                merchantIdentifier='merchant.indentifier'
            >
                <StripApp/>
            </StripeProvider>
            
            <Button title='test'onPress={()=>{
                // console.log('click');
                // const data = async () => {
                //     const responce = await fetch('http://localhost:3000/api');
                //     const da  = await responce; 
                //     // console.log('==', da);
                // };  

                // data();
            }}/> 
        </View> 
    );
}