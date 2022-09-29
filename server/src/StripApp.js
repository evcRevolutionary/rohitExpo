/* eslint-disable no-constant-condition */
import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { CardField, useConfirmPayment } from '@stripe/stripe-react-native';

const API_URL = 'http://192.168.0.129:80';
// 127.0.0.1:5554:

export default function StripApp() {
    const [email, setEmail] = useState();
    const [cardDetails, setCardDetails] = useState();
    const { confirmPayment, loading } = useConfirmPayment();

    // useEffect(()=>{
    //     const data = async ()=> {
    //         const response = await fetch('https://dummyjson.com/products/1');
    //         console.log('response==', response);
    //     };
    //     data();
    // }, []);

    // const fetchPaymentIntentClientSecret = async () => {
    //     const response = await fetch('https://dummyjson.com/products/1');
    //     console.log('response==', response);
    //     const { clientSecret, error } = await response.json();
    //     return { clientSecret, error };
    // };http://localhost:3000/

    const fetchPaymentIntentClientSecret = async() => {
        try {
            let res = await fetch('http://localhost:3000/api');
            // res = await res.json();
            // console.log(res);
            // Alert.alert('onPress', res.json.str);
        } catch (e) {
            // console.error(e);
        }
    };
    
    // const handlePayPress = async () => {
    //     //1.Gather the customer's billing information (e.g., email)
    //     console.log('cardDetails==', cardDetails);
    //     console.log('email=', email);
    //     if (!cardDetails?.complete || !email) {
    //         Alert.alert('Please enter Complete card details and Email');
    //         return;
    //     }
    //     const billingDetails = {
    //         email: email,
    //     };

    //     console.log('billingDetails==', billingDetails);
    //     //2.Fetch the intent client secret from the backend
    // try {
    //     console.log('hii');
    //     const { clientSecret, error } = await fetchPaymentIntentClientSecret();
    //     console.log('clientSecret==', clientSecret);
    //     //2. confirm the payment
    //     if (error) {
    //         console.log('Unable to process payment');
    //     } else {
    //         const { paymentIntent, error } = await confirmPayment(clientSecret, {
    //             type: 'Card',
    //             billingDetails: billingDetails,
    //         });
    //         if (error) {
    //             alert(`Payment Confirmation Error ${error.message}`);
    //         } else if (paymentIntent) {
    //             alert('Payment Successful');
    //             console.log('Payment successful ', paymentIntent);
    //         }
    //     }
    // } catch (e) {
    //     console.log(e);
    // }
    //     //3.Confirm the payment with the card details
    // };
    // const { confirmPayment } = useStripe();
    const [key, setKay] = useState('');

    // useEffect(()=>{
    //     fetch('https://dummyjson.com/products/1')
    //         .then(res=> res)
    //         .then(res=> {
    //             const intent = res;
    //             console.log('intent==>', intent);
    //             setKay(intent.clientSecret);
    //         });
    // },[]);
    const handlePayPress = async () => {
        if (!cardDetails?.complete || !email) {
            Alert.alert('Please enter Complete card details and Email');
            return;
        }
        else {
            // const data =  await confirmPayment('sk_test_51LQVRqSDAYIIWmAguFVjngEx0jsys4MZ5HPzheaU8h4t1Y6oTIjxkv9aYPLrT4Riqtv63VmtBwoFmBscXmaIDxLQ00fTTBx0Sn',{
            //     type: 'Card',
            //     billingDetails: {
            //         email: email
            //     }
            // });
    
            try {
                // console.log('hii');
                // const clis = await fetchPaymentIntentClientSecret();
                // console.log('clientSecret==', clis);
                //2. confirm the payment
                
                const { paymentIntent, error } = await confirmPayment(key, {
                    type: 'Card',
                    billingDetails: {
                        email: email,
                    },
                });
                // console.log('paymentIntent==', paymentIntent);
                if (error) {
                    alert(`Payment Confirmation Error ${error.message}`);
                } else if (paymentIntent) {
                    alert('Payment Successful');
                    // console.log('Payment successful ', paymentIntent);
                }
                
            } catch (e) {
                // console.log(e);
            }
        }
        
    };
    return (
        <View style={styles.container}>
            <Text>Stripe</Text>
            <TextInput
                outoCapitalize='none'
                placeholder='E-mail'
                keyboardType='email-address'
                onChange={(value) => {setEmail(value.nativeEvent.text);}}

            />
            <CardField
                postalCodeEnabled={true}
                placeholder={{
                    number: '4242 4242 4242 4242'
                }}
                cardStyle={styles.card}
                style={styles.cardContainer}
                onCardChange={(cardDetails) => {setCardDetails(cardDetails);}}
            /> 
            <Button title='pay' onPress={fetchPaymentIntentClientSecret}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // margin: 20,
    },
    input: {
        backgroundColor: '#efefefef',
        borderRadius: 8,
        fontSize: 20,
        height: 50,
        padding: 10,
    },
    card: {
        backgroundColor: '#efefefef',
    },
    cardContainer: {
        height: 50,
        marginVertical: 10,
    },
});