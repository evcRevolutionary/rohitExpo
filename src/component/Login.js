import react, { useState } from 'react';
import { SafeAreaView, StyleSheet, Button, TextInput, View, ToastAndroid, Text  } from "react-native";

export default function Login({navigation}){
    const [email, onChangeEmail] = useState("");
    const [PassWord, onChangePassword] = useState("");

    const onPressLearnMore = () => {
        ToastAndroid.show("Loign Succesfully", ToastAndroid.SHORT);
        navigation.navigate('Menu');
    }
    return (
        <SafeAreaView style={{margin: 12}}>
        <Text style={styles.label}>Email</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Enter email..."
            keyboardType="email-address"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={PassWord}
            placeholder="Enter password..."
            secureTextEntry={true}
        />
        <View style={styles.button}>
            <Button
                onPress={onPressLearnMore}
                title="Login"
                color="black" 
                />
        </View>
        <Text style={styles.signupLabel}>forgot password</Text>
        <Text style={styles.signupLabel} onPress={()=> navigation.navigate('Resgister')}>sign up</Text>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    input: {
      height: 40,
      marginBottom: 20,
      borderWidth: 1,
      padding: 10,
      backgroundColor: 'white',
      borderColor: '#A9A9A9',
      borderRadius: 4,
    },
    button: {
        marginTop: 30,    
    },
    label: {
        marginBottom: 10,
        color: '#A9A9A9',
    },
    signupLabel:{
        fontSize: 20,
        textAlign: 'center',
        color: '#A9A9A9',
        marginTop: 20,
        textTransform: 'uppercase',
        fontWeight: '700',
    },
  });