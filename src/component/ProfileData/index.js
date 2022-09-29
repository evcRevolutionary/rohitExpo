import React, { useEffect, useState } from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AccountItems from '../AccountItems';
import {ProfileContainer, ProfileLabel, ComView} from './style';
import PropTypes from 'prop-types';
import { Button, View, Modal, Text, TouchableOpacity } from 'react-native';

export default function ProfileData({navigation, state}) {
    const [modalVisible, setModalVisible] = useState(false);

    // const toggleModal = () => {
    //     setModalVisible(!modalVisible);
    // };

    useEffect(()=>{
        console.log('hii',state );
        setModalVisible(state);
    }, [state]);

    console.log('modalVisible==', modalVisible);
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
        >
            <TouchableOpacity
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    backgroundColor: 'transparent',
                }}
                onPress={() => {
                    navigation.navigate('Home', { screen: 'Home', params: {} });
                    setModalVisible(false);
                }}
            />
            <View style={{height: '93%', width:'80%', backgroundColor: 'white'}}>
                <ComView>
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
            </View>
        </Modal>
    );
}



ProfileData.propTypes = {
    navigation: PropTypes.any,
    state: PropTypes.boolean,
};