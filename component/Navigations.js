import {View, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login';
import BottomMenu from './BottomMenu';

const Maine = createNativeStackNavigator();

export default function Navigations() {
  return (
    <NavigationContainer>
    <Maine.Navigator>
        <Maine.Screen name="Login">
          {props => <View style={styles.container}><Login navigation={props.navigation} /></View>}
        </Maine.Screen>
        <Maine.Screen name="Menu">
          {() => <BottomMenu/>}
        </Maine.Screen>
    </Maine.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#a4c639',
  }
});