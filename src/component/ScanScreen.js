import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert  } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function ScanScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = (props) => {
    setScanned(true);
    Alert.alert(
      "Bar code Info",
      `Bar code with type ${props.type} and data ${props.data} has been scanned!`,
      [
        {
          text: "Cancel",
          onPress: () => setScanned(false),
          style: "cancel"
        },
        { text: "OK",  onPress: () => setScanned(false) }
      ]
    );
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {!scanned && <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});