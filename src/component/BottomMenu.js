import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MapIntegration from './MapIntegration';
import AccountList from './AccountList';
import Order from './Order';
import ScanScreen from './ScanScreen';

function Feed() {
  return (
    <View style={{ flex: 1 }}>
      <MapIntegration/>
    </View>
  );
}

function Profile({navigation}) {
  return (
    <View >
      <View style={{ display: 'flex', flexDirection:'row', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#028A0f', height: 120, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
        <MaterialCommunityIcons
            name="face-recognition"
            size={30}
            style={{color: 'white'}}
        />
        <Text style={{color: 'white',  fontSize: 30}}>Rohit Kamble</Text>
        
      </View>
      <AccountList navigation={navigation}/>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function BottomMenu({navigation}) {
  // const [scan, setScan]= useState(false)

  // useEffect(()=>{
  //   setScan(!scan);
  // }, [navigation])

  // console.log("scan===", scan);
  return (
    <Tab.Navigator
      initialRouteName="Charge"
      activeColor="black"
      inactiveColor='#A9A9A9'
      labelStyle={{ fontSize: 14}}
      barStyle={{backgroundColor: 'white' }}
      backBehavior='history'
    >
      <Tab.Screen
        name="Home"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
                    name='home'
                    size={25}
                    style={{color: color}}
                />
          ),
        }}
      />
      <Tab.Screen
        name="order"
        component={Order}
        options={{
          tabBarLabel: 'order',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
                    name='account-multiple'
                    size={25}
                    style={{color: color}}
                />
          ),
        }}
      />
      
      <Tab.Screen
        name="scan"
        component={ScanScreen}
        options={{
          tabBarLabel: 'scan',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
                    name='qrcode-scan'
                    size={25}
                    style={{color: color}}
                />
          ),
        }}
      />
      <Tab.Screen
        name="favorite"
        options={{
          tabBarLabel: 'favorite',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
                    name='heart'
                    size={25}
                    style={{color: color}}
                />
          ),
        }}
      >
        {()=><Text>favorite</Text>}
      </Tab.Screen>
      <Tab.Screen
        name="profile"
        options={{
          tabBarLabel: 'profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
                    name='account'
                    size={25}
                    style={{color: color}}
                />
          ),
        }}
      >
        {()=><Profile navigation={navigation}/>}
      </Tab.Screen>
    </Tab.Navigator>
  );
}