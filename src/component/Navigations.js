import {View, StyleSheet, Text, StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


import { NavigationContainer } from '@react-navigation/native';
import Login from './Login';
import BottomMenu from './BottomMenu';
import TabMenu from './TabMenu';
import InitialScreen from './InitialScreen';
import SignUp from './SignUp';

const Maine = createNativeStackNavigator();

function Notifications({header}) {
  return (
    <View>
      <View style={{backgroundColor: '#F0FDF0', minHeight: 60, marginVertical: 8, marginHorizontal: 10, alignItems: 'center'}}>
        <Text style={{fontSize: 18, paddingVertical: 5}}>{header}</Text>
        <View style={{borderTopColor: 'gray', borderTopWidth: 1, paddingHorizontal: 10, paddingVertical: 5, alignItems: 'center' }}>
          <Text style={{fontSize: 18}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Text>
        </View>
      </View>
      <View style={{backgroundColor: '#F0FDF0', minHeight: 60, marginVertical: 8, marginHorizontal: 10, alignItems: 'center'}}>
        <Text style={{fontSize: 18, paddingVertical: 5}}>{header}</Text>
        <View style={{borderTopColor: 'gray', borderTopWidth: 1, paddingHorizontal: 10, paddingVertical: 5, alignItems: 'center' }}>
          <Text style={{fontSize: 18}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Text>
        </View>
      </View>
    </View>
  );
}

export default function Navigations() {
  return (
    <NavigationContainer>
      <Maine.Navigator screenOptions={{headerShown: false}}>
          <Maine.Screen name="InitialScreen">
            {props => <InitialScreen navigation={props.navigation}/>}
          </Maine.Screen>
          <Maine.Screen name="Resgister">
            {props => <View style={styles.container}><StatusBar style={{background: 'black'}}/>
                    <Text style={styles.loginLable}>Sign Up</Text><SignUp navigation={props.navigation} /></View>
            }
          </Maine.Screen>
          <Maine.Screen name="Login">
            {props => <View style={styles.container}><StatusBar style={{background: 'black'}}/>
                    <Text style={styles.loginLable}>Login</Text><Login navigation={props.navigation} /></View>
            }
          </Maine.Screen>
          <Maine.Screen name="Profile" >
            {(props) => <View style={{flex: 1, justifyContent: 'center'}}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                 <MaterialCommunityIcons
                      name="arrow-left-thick"
                      size={30}
                      style={{color: 'black'}}
                      onPress={()=>props.navigation.goBack()}
                  />
                  <Text style={{fontSize: 20, color: 'black'}}>{props.route.params.params.state}</Text>
              </View>
                  
              <TabMenu navigation={props.navigation}/>
              </View>}
          </Maine.Screen>
          <Maine.Screen name="Menu">
            {(props) => <BottomMenu navigation={props.navigation}/>}
          </Maine.Screen>
      </Maine.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  loginLable: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: '700',
  }
});