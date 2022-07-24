/* eslint-disable no-undef */
import React from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';
import { AppName, ImageContainer, AppImage } from './style';

export default function InitalScreen ({ fadeAnim }) {
    return (
        <Animated.View
            style={{
                opacity: fadeAnim, 
            }}
        >
            <AppName>Steedx</AppName>
            <ImageContainer>
                <AppImage source={require('../../assets/logo.webp')}/>
            </ImageContainer>
        </Animated.View>
    );
}

InitalScreen.propTypes = {
    fadeAnim: PropTypes.any,
};