import React, { useState } from 'react';
import { View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Map from '../Map';
import ScanScreen from '../ScanScreen';
import PropTypes from 'prop-types';
import ProfileData from '../ProfileData';
import OrderData from '../OrderData';
import Favorite from '../Favorite';
import { Button } from 'react-native-paper';

function Feed() {
    return (

        <View style={{ flex: 1 }}>
            {/* <MaterialCommunityIcons
                name="arrow-left-thick"
                size={30}
                style={{ color: 'black', position: 'relative' }}
                // onPress={() => props.navigation.goBack()}
            />    */}
            <Map />
        </View>
    );
}

const Tab = createMaterialBottomTabNavigator();
export default function BottomMenu({ navigation }) {
    const [state, setState] = useState(false);
    return (
        <Tab.Navigator
            initialRouteName="Charge"
            activeColor="black"
            inactiveColor="#A9A9A9"
            labelStyle={{ fontSize: 14 }}
            barStyle={{ backgroundColor: 'white' }}
            backBehavior="history"
            screenListeners={{
                tabPress: (event)=> {
                    console.log('event.target==', event.target);
                    if(event.target.includes('Profile')) {
                        console.log('hi');
                        setState(true);
                    }
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Feed}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="home"
                            size={25}
                            style={{ color: color }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="OrderData"
                component={OrderData}
                options={{
                    tabBarLabel: 'OrderData',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="account-multiple"
                            size={25}
                            style={{ color: color }}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Scan"
                component={ScanScreen}
                options={{
                    tabBarLabel: 'Scan',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="qrcode-scan"
                            size={25}
                            style={{ color: color }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Favorite"
                options={{
                    tabBarLabel: 'Favorite',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="heart"
                            size={25}
                            style={{ color: color }}
                        />
                    ),
                }}
            >
                {() => <Favorite/>}
            </Tab.Screen>
            {/* <Tab.Screen
                name="Profile"
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="account"
                            size={25}
                            style={{ color: color }}
                        />
                    ),
                }}
            >
                {() => <ProfileData navigation={navigation} state={state}/>}
            </Tab.Screen> */}
        </Tab.Navigator>
    );
}


BottomMenu.propTypes = {
    navigation: PropTypes.any,
};