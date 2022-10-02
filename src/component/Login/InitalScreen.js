/* eslint-disable no-undef */
import React from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';
import { AppName, AppImage } from './style';

export default function InitalScreen({ fadeAnim }) {
	return (
		<Animated.View
			style={{
				opacity: fadeAnim,
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<AppImage source={require('../../assets/logo.webp')} />
			<AppName>Loading...</AppName>
		</Animated.View>
	);
}

InitalScreen.propTypes = {
	fadeAnim: PropTypes.any,
};
