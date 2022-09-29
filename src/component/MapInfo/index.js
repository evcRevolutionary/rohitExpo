import React from 'react';

import {
    Modal,
    TouchableOpacity,
    Button,
} from 'react-native';
import * as Linking from 'expo-linking';
import PropTypes from 'prop-types';
import {
    MapInfoContainer, 
    ModalViewConatiner, 
    ModalViewCloseButton, 
    ModalViewAddress,
    ModalViewAddressContainer,
    ModalViewAvilableButton,
    ModalViewDirection,
    ModalViewMoreInfo,
    ModalViewSupport,
    ModalViewScan,
    EmptyView,
    Label,
    MaterialIcon,
} from './style';


export default function MapInfo({getResult, modalVisible, setModalVisible, setScanned, scanned }){
    return (
        <MapInfoContainer>
            {!!getResult && modalVisible && (
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                >
                    <TouchableOpacity
                        style={{
                            height: '75%',
                        }}
                        onPress={() => {
                            setModalVisible(false);
                        }}
                    />
                    <ModalViewConatiner>
                        <ModalViewCloseButton>
                            <MaterialIcon
                                name="close"
                                size={20}
                                closeButton={true}
                                color={'red'}
                                onPress={() => setModalVisible(false)}
                            />
                        </ModalViewCloseButton>
                        <ModalViewAddress>
                            <ModalViewAddressContainer>
                                <Label marginRight={true}>{getResult.name}</Label>
                                <MaterialIcon
                                    name="google-maps"
                                    size={20}
                                    color={'gray'}
                                />
                                <Label>address</Label>
                            </ModalViewAddressContainer>
                            <ModalViewAvilableButton>
                                <Label color={true}>Avilable</Label>
                            </ModalViewAvilableButton>
                            <ModalViewDirection>
                                <MaterialIcon
                                    name="phone"
                                    size={35}
                                    color={'blue'}
                                    onPress={() => Linking.openURL('tel:8983868905')}
                                />
                                <MaterialIcon
                                    name="directions"
                                    size={35}
                                    color={'gray'}
                                    onPress={() =>
                                        Linking.openURL(
                                            `https://www.google.com/maps/dir/?api=1&origin=19.198574101474744,73.19421084434218&destination=${getResult.latitude},${getResult.longitude}&travelmode=driving`,
                                        )
                                    }
                                />
                            </ModalViewDirection>
                        </ModalViewAddress>
                        <ModalViewMoreInfo>
                            <EmptyView>
                                <Label>Dist</Label>
                                <Label>4km</Label>
                            </EmptyView>
                            <EmptyView>
                                <Label>cost</Label>
                                <Label>free</Label>
                            </EmptyView>
                            <EmptyView>
                                <Label>Charge ID</Label>
                                <Label>BOlT_0005</Label>
                            </EmptyView>
                        </ModalViewMoreInfo>
                        <ModalViewSupport>
                            <EmptyView>
                                <Label>support</Label>
                                <MaterialIcon
                                    name="motorbike"
                                    size={30}
                                    color={'gray'}
                                />
                            </EmptyView>
                            <MaterialIcon
                                name="bluetooth"
                                size={30}
                                color={'blue'}
                            />
                        </ModalViewSupport>
                        <ModalViewScan>
                            <Button title="pay" />
                            <EmptyView buttonWidth={true}>
                                <Button
                                    title="Scan"
                                    onPress={() => {
                                        setScanned(!scanned);
                                        setModalVisible(false);
                                    }}
                                />
                            </EmptyView>
                        </ModalViewScan>
                    </ModalViewConatiner>
                </Modal>
            )}
        </MapInfoContainer>
    );
} 

MapInfo.propTypes = {
    getResult: PropTypes.shape({
        name: PropTypes.string,
        address: PropTypes.string,
        latitude: PropTypes.number,
        longitude: PropTypes.number,
    }),
    modalVisible: PropTypes.bool, 
    setModalVisible: PropTypes.func, 
    setScanned: PropTypes.func,
    scanned: PropTypes.bool,
};