import React from "react";
import { View, StyleSheet, Text } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Order(){
    return (
        <View style={styles.container}>
            <View style={styles.cardConatiner}>
                <MaterialCommunityIcons
                    name='circle'
                    size={60}
                    style={{color: '#A9A9A9'}}
                />
                <View >
                    <Text style={styles.label}>order/detail/name</Text>
                    <Text style={styles.label}>InProgree/Completed/Cancelled</Text>
                </View> 
                <Text style={[styles.label, {fontWeight: '900', color: 'black'} ]}>-20 INR</Text>
            </View>
            <View style={styles.cardConatiner}>
                <MaterialCommunityIcons
                    name='circle'
                    size={60}
                    style={{color: '#A9A9A9'}}
                />
                <View style={styles.label}>
                    <Text style={styles.label}>order/detail/name</Text>
                    <Text style={styles.label}>InProgree/Completed/Cancelled</Text>
                </View>
                <Text style={[styles.label, {fontWeight: '900', color: 'black'}]}>+20 INR</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        marginVertical: 20,
        textAlign: 'center',
       
    },
    cardConatiner: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingBottom: 30,
        paddingTop: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#A9A9A9',
        marginHorizontal: 20,
    },
    label: {
        fontSize: 14,
        color: '#A9A9A9',
        fontWeight: '600',
    }
  });