import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function BarCodeScannerModule({scanned, setScanned}) {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
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
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? handleBarCodeScanned : undefined }
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && 
        <View style={{position: 'absolute', right: -25, top: -25}}>< MaterialCommunityIcons
          name='close-outline'
          size={30}
          style={{color: 'gray'}}
          onPress={() => setScanned(false)} />
        </View>
      }
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 30,
    padding: 30,
  },
});
