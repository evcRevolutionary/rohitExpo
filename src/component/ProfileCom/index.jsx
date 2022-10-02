import React, { useState } from 'react';
import { Alert, View, Modal, TouchableOpacity, Text } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import ProfileData from '../ProfileData';
import PropTypes from 'prop-types';

export default function ProfileCom({ navigation }) {
	const [modalVisible1, setModalVisible1] = useState(false);
	return (
		<View
			style={{
				backgroundColor: 'red',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				padding: 8,
			}}
		>
			<View>
				<Text>Hello, Rohit</Text>
			</View>
			<View>
				<TouchableOpacity
					hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
				>
					<MaterialCommunityIcons
						name="face-man-profile"
						size={30}
						// style={{ color: 'black', padding: 5, backgroundColor: 'gray', }}
						onPress={() => setModalVisible1(!modalVisible1)}
					/>
				</TouchableOpacity>
			</View>
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible1}
				onRequestClose={() => {
					Alert.alert('Modal has been closed.');
					setModalVisible1(!modalVisible1);
				}}
			>
				<TouchableOpacity
					style={{
						height: '100%',
						width: '100%',
						position: 'absolute',
						right: 0,
						backgroundColor: 'transparent',
					}}
					onPress={() => {
						setModalVisible1(false);
					}}
				/>
				<View
					style={{ backgroundColor: 'white', width: '86%', height: '100%' }}
				>
					<ProfileData navigation={navigation} />
				</View>
			</Modal>
		</View>
	);
}

ProfileCom.propTypes = {
	navigation: PropTypes.any,
};
