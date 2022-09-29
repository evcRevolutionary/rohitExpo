/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Text, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {QrCodeScannerView, ScanContainer} from './style';

export default function ScanScreen() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    function HandleBarCodeScanned(props) {
        // console.log('props===', props);
        setScanned(true);
        Alert.alert(
            'Bar code Info',
            `Bar code with type ${props.type} and data ${props.data} has been scanned!`,
            [
                {
                    text: 'Cancel',
                    onPress: () => setScanned(false),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => setScanned(false) },
            ]
        );
    }

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <ScanContainer>
            {!scanned && ( 
                <QrCodeScannerView 
                    onBarCodeScanned={scanned ? undefined : HandleBarCodeScanned}
                />
            )
            }
        </ScanContainer>
    );
}