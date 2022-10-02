/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { StatusBar, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import NewLogin from '../Login';
import BottomMenu from '../BottomMenu';
import TabMenu from '../TabMenu';
import SignUp from '../SignUp';
import ForgotPassword from '../ForgotPassword';
import { SignUpLable, TabConatiner, TabHeader, TabLabel } from './style';
import { useSelector } from 'react-redux';
import ProfileCom from '../ProfileCom';

const Maine = createNativeStackNavigator();

export default function Routing() {
	const [state, setState] = useState(false);
	const result = useSelector((state) => state);
	useEffect(() => {
		console.log('result==', result)
		if(result && result.data) {
			setState(true)
		} 
		else {
			setState(false)
		}
	}, [result]);

	return (
		<NavigationContainer>
			<Maine.Navigator screenOptions={{ headerShown: false }}>
				{state ? (
					<>
						<Maine.Screen name="Menu">
							{(props) => {
								return (
									<>
										<ProfileCom navigation={props.navigation} />
										<BottomMenu navigation={props.navigation} />
									</>
								);
							}}
						</Maine.Screen>
						<Maine.Screen name="Profile">
							{(props) => (
								<TabConatiner>
									<TabHeader>
										<MaterialCommunityIcons
											name="arrow-left-thick"
											size={30}
											style={{ color: 'black' }}
											onPress={() => props.navigation.goBack()}
										/>
										<TabLabel>{props.route.params.params.state}</TabLabel>
									</TabHeader>
									<TabMenu navigation={props.navigation} />
								</TabConatiner>
							)}
						</Maine.Screen>
					</>
				) : (
					<>
						<Maine.Screen name="Login">
							{(props) => <NewLogin navigation={props.navigation} />}
						</Maine.Screen>
						<Maine.Screen name="ForgotPassword">
							{(props) => <ForgotPassword navigation={props.navigation} />}
						</Maine.Screen>
						<Maine.Screen name="Resgister">
							{(props) => (
								<>
									<StatusBar style={{ background: 'black' }} />
									<SignUpLable>Sign Up</SignUpLable>
									<SignUp navigation={props.navigation} />
								</>
							)}
						</Maine.Screen>
						<Maine.Screen name="TermAndCondition">
							{() => (
								<>
									<Text>Term And Condition</Text>
								</>
							)}
						</Maine.Screen>
					</>
				)}
			</Maine.Navigator>
		</NavigationContainer>
	);
}
