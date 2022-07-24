import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import {AccountContainer, AccountIconContainer, Lable} from './style';

export default function AccountItemList ({ title, icon, navigation }){ 
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
                onPress={() => {
                    if (title === 'logout') {
                        navigation.navigate('Login', { screen: 'Login', params: {} });
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