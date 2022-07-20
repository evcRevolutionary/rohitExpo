import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Maine = createNativeStackNavigator();

const DATA = [
  {
    id: '0',
    title: 'My Charge',
    icon: 'car-turbocharger',
  },
  {
    id: '1',
    title: 'Subscription',
    icon: 'youtube-subscription',
  },
  {
    id: '2',
    title: 'Booking',
    icon: 'book-account',
  },
  {
    id: '3',
    title: 'Payment',
    icon: 'account-cash',
  },
  {
    id: '4',
    title: 'wallet',
    icon: 'wallet',
  },
  {
    id: '5',
    title: 'Buy Charger',
    icon: 'cart',
  },
  {
    id: '6',
    title: 'contact',
    icon: 'face-agent',
  },
  {
    id: '7',
    title: 'logout',
    icon: 'logout',
  }
];

// const openNewScreen=()=>{
//   return (
//     <NavigationContainer>
//     <Maine.Navigator>
//     <Maine.Screen name="new" >
//           {() => <View><Text>Rohit</Text></View>}
//       </Maine.Screen>
//   </Maine.Navigator>
//   </NavigationContainer>
//   )
// }

const Item = ({ title, icon, navigation }) => (
  <View style={styles.item}>
    <View style={styles.itemContainer}>
        <MaterialCommunityIcons
            name={icon}
            size={20}
            style={{color: 'black'}}
        />
      <Text style={{marginLeft: 8}}>{title}</Text>
    </View>
    <MaterialCommunityIcons
            name="chevron-right-circle"
            size={20}
            style={{color: 'gray'}}
            onPress={()=> {
              if(title === 'logout') {
                navigation.navigate('Login', { screen: 'Login', params:{}});
              }
              else {
                navigation.navigate('Profile', { screen: 'Menu', params:{state: title}});
              }
              
            }}
        />
  </View>
);

const AccountList = ({navigation}) => {
  const renderItem = ({ item }) => (
    <Item {...{...item, navigation}} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingBottom: 200,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 15,
    marginHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  itemContainer:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
  },
});

export default AccountList;