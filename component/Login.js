import react, { useState } from 'react';
import { SafeAreaView, StyleSheet, Button, TextInput, View, ToastAndroid, Text  } from "react-native";

export default function Login({navigation}){
    const [email, onChangeEmail] = useState("");
    const [PassWord, onChangePassword] = useState("");

    const onPressLearnMore = () => {
        ToastAndroid.show("Loign Succesfull", ToastAndroid.SHORT);
        navigation.navigate('Menu');
    }
    return (
        <SafeAreaView >
        <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="email"
            keyboardType="email-address"
        />
        <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={PassWord}
            placeholder="password"
            secureTextEntry={true}
        />
        <Text style={{ textAlign: 'center', color: 'white'}}>
                By conntinuing, you agree to our 
                <Text style={{ color: '#028A0f' }}> Term of Services </Text>
                and <Text style={{ color: '#028A0f' }}> Privacy Policy </Text>
                </Text>
        <View style={styles.button}>
            <Button
                onPress={onPressLearnMore}
                title="Learn More"
                color="#841584"
                />
        </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor: 'white',
      borderRadius: 50,
    },
    button: {
        marginTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
    },
  });