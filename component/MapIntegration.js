import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import * as Linking from 'expo-linking';
import MapView, { Marker, Callout, PROVIDER_GOOGLE  } from 'react-native-maps';
import BarCodeScannerModule from './BarCodeScannerModule';

const mapData = [
    {
        latitude: 19.189009076881323,
        longitude: 73.19137843187663,
        name: 'shope 1',
        address: 'krishna Palces hotel'
    },
    {
        latitude: 19.19646660143117,
        longitude: 73.21150572651823,
        name: 'shop 2',
        address: 'ABC Apartment'
    },
    {
        latitude: 19.198574101474744,
        longitude: 73.19421084434218,
        name: 'shop 3',
        name: 'XYZ business park'
    },
];

const MapIntegration = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [getResult, setResult] = useState({});
  const [scanned, setScanned] = useState(false);

  const getMapInfo = (info) => {
    const findData = mapData.find((item)=> (item.latitude === info.latitude) && (item.longitude === info.longitude));
    setResult(findData);
    setModalVisible(true)
  }

  return (
    <>
    <View style={{flex: 1}}>
    <View style={styles.centeredView}>
      {!!getResult && modalVisible && 
         <Modal
         animationType="slide"
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
          <View style={styles.modalView}>
            <View style={{width: 25, height: 25, position: 'absolute', right: 5, top: 10}}>
              <MaterialCommunityIcons
                  name='close'
                  size={20}
                  style={{color: 'red', borderWidth: 2, borderColor: 'red', borderStyle: 'solid', borderRadius: 50, padding:2}}
                  onPress={()=>setModalVisible(false)}
              />
            </View>
            <View style={{display:'flex', flexDirection: 'row', justifyContent:  'space-between'}}>
              <View style={{display:'flex', flexDirection: 'row', justifyContent:  'space-between'}}>
                <Text style={{marginRight: 10}}>{getResult.name}</Text>
                  <MaterialCommunityIcons
                    name='google-maps'
                    size={20}
                    style={{color: 'gray'}}
                />
                <Text onPress={()=> console.log("hiiii")}>address</Text>
              </View>
               
                <View style={{display: 'flex', flexDirection : 'row', marginRight: 20, alignContent: 'center', justifyContent: 'center', backgroundColor: 'green', borderRadius: 50, paddingHorizontal: 10}}>
                
                    <Text style={{color: 'white'}}>Avilable</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', position: 'absolute', top: -40, right: 20}} >
                  <MaterialCommunityIcons
                      name='phone'
                      size={35}
                      style={{color: 'blue'}}
                      onPress={()=>Linking.openURL('tel:8983868905')}
                  />
                    <MaterialCommunityIcons
                    name='directions'
                    size={35}
                    style={{color: 'gray'}}
                    onPress={()=>Linking.openURL(`https://www.google.com/maps/dir/?api=1&origin=19.198574101474744,73.19421084434218&destination=${getResult.latitude},${getResult.longitude}&travelmode=driving`)}
                />
                </View>
            </View>
            <View style={{display:'flex', flexDirection: 'row', justifyContent:  'space-between',  marginTop: 10, backgroundColor: '#DBE2E9', paddingHorizontal: 20}}>
                <View>
                    <Text>Dist</Text>
                    <Text>4km</Text>
                </View>
                <View>
                    <Text>cost</Text>
                    <Text>free</Text>
                </View>
                <View>
                    <Text>Charge ID</Text>
                    <Text>BOlT_0005</Text>
                </View>
            </View>
            <View style={{paddingHorizontal: 10 , display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}>
              <View>
                <Text>support</Text>
                < MaterialCommunityIcons
                  name='motorbike'
                  size={30}
                  style={{color: 'gray'}}
                />
              </View>
              <MaterialCommunityIcons
                    name='bluetooth'
                    size={30}
                    style={{color: 'blue'}}
                />
            </View>
            <View style={{display :'flex',flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button 
              title="pay" 
              />
              <View style={{minWidth: '60%'}}>
              <Button 
                title="Scan" 
                onPress={() => {setScanned(!scanned); 
                setModalVisible(false)}} 
                />
              </View>
              
            </View>           
           
          </View>
          
        </Modal>
    }
    </View>
    <View style={{height: '100%'}}>
    <MapView
        provider={PROVIDER_GOOGLE}
        region={{
            latitude: 19.198574101474744,
            longitude: 73.19421084434218,
            latitudeDelta: 0.5,
            longitudeDelta: 0.5,
        }}
        initialRegion={{
            latitude: 19.198574101474744,
            longitude: 73.19421084434218,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
        }}
        showsUserLocation={true}
        moveOnMarkerPress={false}
        onMarkerPress={(e)=>getMapInfo(e.nativeEvent.coordinate)}
        style={{flex: 1}}
      >
        {mapData.map((item)=> (
            <Marker 
            key={item.name}
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}
            title={item.name}
            onCalloutPress={()=>getMapInfo(item)}
          >
            <MaterialCommunityIcons
                    name='gas-station'
                    size={30}
                    style={{color: 'green'}}
                />
            </Marker>
        ))}
    </MapView>
    </View>
  </View>
  {scanned && <BarCodeScannerModule scanned={scanned} setScanned={setScanned}/>}
   </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    // backgroundColor: 'transparent',
    flex: 1,
    // justifyContent: 'center',
    width: 100,
    height: '100%',
   
  },
  modalView: {
    // margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    paddingTop: 25,
    // alignItems: "center",
    // height: 50,

    width: '100%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: '100%',
  },
  button: {
    borderRadius: 20,
    elevation: 0
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    position: 'relative',
    right: 0,
    elevation: 2,
    zIndex: 1,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default MapIntegration;