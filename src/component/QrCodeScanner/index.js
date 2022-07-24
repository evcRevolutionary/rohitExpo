import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { QrCodeScannerContainer, QrCodeCloseIcon, QrCodeScannerView } from './style';

export default function QrCodeScanner({ scanned, setScanned }) {
    const [hasPermission, setHasPermission] = useState(null);
    useEffect(() => {
        (async () => {
            const { status } = await QrCodeScannerView.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();

        return ()=> setScanned(!scanned);
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(!scanned);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <QrCodeScannerContainer>
            <QrCodeScannerView onBarCodeScanned={scanned ? handleBarCodeScanned : undefined}/>
            {scanned && (
                <QrCodeCloseIcon>
                    <MaterialCommunityIcons
                        name="close-outline"
                        size={30}
                        style={{ color: 'black' }}
                        onPress={() => setScanned(false)}
                    />
                </QrCodeCloseIcon>
            )}
        </QrCodeScannerContainer>
    );
}

QrCodeScanner.propTypes = {
    navigation: PropTypes.any,
    scanned: PropTypes.bool, 
    setScanned: PropTypes.func,
};