import styled from 'styled-components/native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { View, StyleSheet } from 'react-native';

export const QrCodeScannerContainer =  styled(View)({
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 30,
    padding: 30,
});

export const QrCodeScannerView = styled(BarCodeScanner)(()=> StyleSheet.absoluteFillObject);

export const QrCodeCloseIcon = styled(View)({
    position: 'absolute', 
    right: -25, 
    top: -25,
});