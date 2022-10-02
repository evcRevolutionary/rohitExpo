import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, FlatList } from 'react-native';
import { AccounntItemData } from './data';
import AccountItemList from './accountItmeList';

export default function AccountList({ navigation }) {
	const renderItem = ({ item }) => (
		<AccountItemList {...{ ...item, navigation }} />
	);

	return (
		<SafeAreaView>
			<FlatList
				data={AccounntItemData}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
			/>
		</SafeAreaView>
	);
}

AccountList.propTypes = {
	navigation: PropTypes.any,
};
