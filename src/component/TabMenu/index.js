import React from 'react';
import { Button } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import PropTypes from 'prop-types';
import {Label, TabConatiner } from './style';

const TabNav = createMaterialBottomTabNavigator();

export default function TabMenu({ navigation }) {
    return (
        <TabConatiner noMargin={true}>
            <TabNav.Navigator
                initialRouteName="Tab 1"
                activeColor="#3cb371"
                labelStyle={{ fontSize: 10 }}
                style={{
                    backgroundColor: 'tomato',
                    display: 'flex',
                    flexDirection: 'column-reverse',
                }}
            >
                <TabNav.Screen
                    name="Tab 1"
                    options={{
                        tabBarLabel: 'Tab 1',
                    }}
                >
                    {() => (
                        <TabConatiner>
                            <Label>Tab 1</Label>
                            <Button title="Back" onPress={() => navigation.goBack()} />
                        </TabConatiner>
                    )}
                </TabNav.Screen>
                <TabNav.Screen
                    name="Tab 2"
                    options={{
                        tabBarLabel: 'Tab 2',
                    }}
                >
                    {() => (
                        <TabConatiner>
                            <Label>Tab 2</Label>
                            <Button title="Back" onPress={() => navigation.goBack()} />
                        </TabConatiner>
                    )}
                </TabNav.Screen>
            </TabNav.Navigator>
        </TabConatiner>
    );
}

TabMenu.propTypes = {
    navigation: PropTypes.any,
};