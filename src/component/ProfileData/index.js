import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AccountItems from '../AccountItems';
import {ProfileContainer, ProfileLabel, ComView} from './style';
import PropTypes from 'prop-types';
// import { Text, View } from 'react-native';

export default function ProfileData({navigation}) {
    return (
        <ComView>
            {/* <Text>Rohit</Text> */}
            <ProfileContainer>
                <MaterialCommunityIcons
                    name="face-recognition"
                    size={30}
                    style={{ color: 'white' }}
                />
                <ProfileLabel>Rohit Kamble</ProfileLabel>
            </ProfileContainer>
            <AccountItems navigation={navigation} />
        </ComView>
    );
}

ProfileData.propTypes = {
    navigation: PropTypes.any,
};