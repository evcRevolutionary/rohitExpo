import React from 'react';
import { Text, View, Button  } from "react-native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const TabNav = createMaterialBottomTabNavigator();

export default function TabMenu({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignContent:'center'}}>
        <TabNav.Navigator
        initialRouteName="Tab 1"
        activeColor="#3cb371"
        labelStyle={{ fontSize: 10 }}
        style={{ backgroundColor: 'tomato', display: 'flex', flexDirection: 'column-reverse' }}
      >
        <TabNav.Screen
          name="Tab 1"
          options={{
            tabBarLabel: 'Tab 1',
          }}
        >
          {()=>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Tab 1</Text>
                <Button title="Back" onPress={()=> navigation.goBack()}/>
            </View>
        }
        </TabNav.Screen>
        <TabNav.Screen
          name="Tab 2"
          options={{
            tabBarLabel: 'Tab 2',
          }}
        >
          {()=>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Tab 2</Text>
                <Button title="Back" onPress={()=> navigation.goBack()}/>
            </View>
        }
        </TabNav.Screen>
      </TabNav.Navigator>
      </View>    
    )
  }
  