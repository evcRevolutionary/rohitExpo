import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import { AccountContainer, AccountIconContainer, Lable } from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { action } from '../../centralStore/action'

export default function AccountItemList({ title, icon, navigation }) {
	const dispatch = useDispatch();
	return (
		<AccountContainer>
			<AccountIconContainer>
				<MaterialCommunityIcons
					name={icon}
					size={20}
					style={{ color: 'black' }}
				/>
				<Lable>{title}</Lable>
			</AccountIconContainer>
			<MaterialCommunityIcons
				name="chevron-right-circle"
				size={20}
				style={{ color: 'gray' }}
				onPress={async() => {
					if (title === 'logout') {
						AsyncStorage.removeItem('login');
						const result = await AsyncStorage.getItem('login');
						if(result=== null){
							dispatch(action(result))
							setTimeout(()=>{
								navigation.navigate('Login')
							}, 1000)
						}
					} else {
						navigation.navigate('Profile', {
							screen: 'Profile',
							params: { state: title },
						});
					}
				}}
			/>
		</AccountContainer>
	);
}

AccountItemList.propTypes = {
	title: PropTypes.string,
	icon: PropTypes.string,
	navigation: PropTypes.any,
};
