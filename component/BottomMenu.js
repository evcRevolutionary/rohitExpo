import * as React from 'react';
import { Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MapIntegration from './MapIntegration';

function Feed() {
  return (
    <View style={{ flex: 1 }}>
      <MapIntegration/>
    </View>
  );
}

function Notifications() {
  return (
    <View>
      <View style={{backgroundColor: '#F0FDF0', minHeight: 60, marginVertical: 8, marginHorizontal: 10, alignItems: 'center'}}>
        <Text style={{fontSize: 18, paddingVertical: 5}}>Header</Text>
        <View style={{borderTopColor: 'gray', borderTopWidth: 1, paddingHorizontal: 10, paddingVertical: 5, alignItems: 'center' }}>
          <Text style={{fontSize: 18}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Text>
        </View>
      </View>
      <View style={{backgroundColor: '#F0FDF0', minHeight: 60, marginVertical: 8, marginHorizontal: 10, alignItems: 'center'}}>
        <Text style={{fontSize: 18, paddingVertical: 5}}>Header</Text>
        <View style={{borderTopColor: 'gray', borderTopWidth: 1, paddingHorizontal: 10, paddingVertical: 5, alignItems: 'center' }}>
          <Text style={{fontSize: 18}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Text>
        </View>
      </View>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function BottomMenu() {
  return (
    <Tab.Navigator
      initialRouteName="Charge"
      activeColor="#3cb371"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Charge"
        component={Feed}
        options={{
          tabBarLabel: 'Charge',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
                    name='gas-station'
                    size={30}
                    style={{color: color}}
                />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
                    name='gas-station'
                    size={30}
                    style={{color: color}}
                />
          ),
        }}
      />
    </Tab.Navigator>
  );
}