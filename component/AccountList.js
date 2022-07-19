import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const DATA = [
  {
    id: '0',
    title: 'My Charge',
    Icon: 'gas-station',
  },
  {
    id: '1',
    title: 'Subscription',
    Icon: 'gas-station',
  },
  {
    id: '2',
    title: 'Booking',
    Icon: 'gas-station',
  },
  {
    id: '3',
    title: 'Payment',
    Icon: 'gas-station',
  },
  {
    id: '4',
    title: 'wallet',
    Icon: 'gas-station',
  },
  {
    id: '5',
    title: 'Support',
    Icon: 'gas-station',
  },
  {
    id: '6',
    title: 'Edit Profile',
    Icon: 'gas-station',
  },
  {
    id: '7',
    title: 'Logout',
    Icon: 'gas-station',
  }
];

const Item = ({ title, Icon }) => (
  <View style={styles.item}>
    <View style={styles.itemContainer}>
        <MaterialCommunityIcons
            name={Icon}
            size={30}
            style={{color: color}}
        />
      <Icon style={{color: '#028A0f'}}/>
      <Text style={{marginLeft: 8}}>{title}</Text>
    </View>
    <ChevronRightIcon/>
  </View>
);

const AccountList = () => {
  const renderItem = ({ item }) => (
    <Item {...item} />
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
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
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