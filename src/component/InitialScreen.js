import React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

export default function InitialScreen({navigation}){
    return (
        <View style={styles.container}>
            <Text style={styles.appName}>Steedx</Text>
            <View style={{ display: 'flex', alignItems: 'center', marginBottom: 80}}>
                <Image 
                    style={styles.appLogo}
                    source={require('../assets/logo.webp')}
                />
            </View>
            <Button
                style={styles.button}
                title='sign up'
                color="black"
                onPress={()=> navigation.navigate('Resgister')}
            />
            <Text style={styles.account} onPress={()=>navigation.navigate('Login')}>Aleready have an account?</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        textAlign: 'center',
        marginHorizontal: 20,
    },
    appLogo: {
        width: 150,
        height: 150,
    },
    appName: {
        fontSize: 50,
        fontWeight: '500',
        marginBottom: 50,
        alignContent: 'center',
        textAlign: 'center',
    },
    account: {
        fontSize: 20,
        textTransform: 'uppercase',
        color: '#87ceeb',
        textAlign: 'center',
        marginTop: 20,
    }
  });