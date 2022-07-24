/* eslint-disable react/prop-types */
import React from 'react';
import { StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import NewLogin from '../Login';
import BottomMenu from '../BottomMenu';
import TabMenu from '../TabMenu';
import SignUp from '../SignUp';
import { 
    RegisterContainer, 
    Label, 
    TabConatiner, 
    TabHeader, 
    TabLabel, 
} from './style';

const Maine = createNativeStackNavigator();

export default function Routing() {
    return (
        <NavigationContainer>
            <Maine.Navigator screenOptions={{ headerShown: false }}>
                <Maine.Screen name="Login">
                    {(props) => <NewLogin navigation={props.navigation} />}
                </Maine.Screen>
                <Maine.Screen name="Resgister">
                    {(props) => (
                        <RegisterContainer>
                            <StatusBar style={{ background: 'black' }} />
                            <Label>Sign Up</Label>
                            <SignUp navigation={props.navigation} />
                        </RegisterContainer>
                    )}
                </Maine.Screen>
                <Maine.Screen name="Profile">
                    {(props) => (
                        <TabConatiner>
                            <TabHeader>
                                <MaterialCommunityIcons
                                    name="arrow-left-thick"
                                    size={30}
                                    style={{ color: 'black' }}
                                    onPress={() => props.navigation.goBack()}
                                />
                                <TabLabel>
                                    {props.route.params.params.state}
                                </TabLabel>
                            </TabHeader>
                            <TabMenu navigation={props.navigation} />
                        </TabConatiner>
                    )}
                </Maine.Screen>
                <Maine.Screen name="Menu">
                    {(props) => <BottomMenu navigation={props.navigation} />}
                </Maine.Screen>
            </Maine.Navigator>
        </NavigationContainer>
    );
}
