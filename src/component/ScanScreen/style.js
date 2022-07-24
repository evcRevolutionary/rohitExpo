import styled from 'styled-components/native';
import {View, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';


export const QrCodeScannerView = styled(BarCodeScanner)(()=>StyleSheet.absoluteFillObject);

export const ScanContainer = styled(View)({
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
});