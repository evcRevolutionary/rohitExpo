import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import QrCodeScanner from '../QrCodeScanner';
import * as Location from 'expo-location';
import MapInfo from '../MapInfo';
import { MapConatiner, MapConatinerInfo, MapMarkerView } from './style';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { MapData } from './data';

export default function Map() {
	const [modalVisible, setModalVisible] = useState(false);
	const [getResult, setResult] = useState({});
	const [scanned, setScanned] = useState(false);
	const [currentlocation, setLocation] = useState({});

	const getMapInfo = (info) => {
		const findData = MapData.find(
			(item) =>
				item.latitude === info.latitude && item.longitude === info.longitude
		);
		setResult(findData);
		setModalVisible(true);
	};

	useEffect(() => {
		const data = async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== 'granted') {
				Alert.alert(
					'Permission not granted',
					'Allow the app to use location service.',
					[{ text: 'OK' }],
					{ cancelable: false }
				);
			}
			let { coords } = await Location.getCurrentPositionAsync();
			coords && setLocation(coords);
			// if (coords) {
			// 	const { latitude, longitude } = coords;
			// 	let response = await Location.reverseGeocodeAsync({
			// 		latitude,
			// 		longitude,
			// 	});

			// 	for (let item of response) {
			// 		let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`;
			// 		console.warn('address', address);
			// 	}
			// }
		};
		data();
	}, []);

	return (
		<>
			<MapConatiner>
				<MapConatinerInfo>
					<MapInfo
						{...{
							getResult,
							modalVisible,
							setModalVisible,
							setScanned,
							scanned,
						}}
					/>
				</MapConatinerInfo>
				<MapMarkerView>
					<MapView
						provider={PROVIDER_GOOGLE}
						initialRegion={{
							latitude: 20.5937,
							longitude: 78.9629,
							latitudeDelta: 34.8172,
							longitudeDelta: 8.4448,
						}}
						showsUserLocation={true}
						showsMyLocationButton={true}
						onMarkerPress={(e) => getMapInfo(e.nativeEvent.coordinate)}
						style={{
							flex: 1,
							justifyContent: 'center',
							alignContent: 'center',
						}}
					>
						{!!Object.keys(currentlocation).length && (
							<Marker
								coordinate={{
									latitude: currentlocation.latitude,
									longitude: currentlocation.longitude,
									latitudeDelta: 0.5,
									longitudeDelta: 0.5,
								}}
							>
								<MaterialCommunityIcons
									name="walk"
									size={25}
									style={{ color: 'red' }}
								/>
							</Marker>
						)}
						{MapData.map((item) => (
							<Marker
								key={item.name}
								coordinate={{
									latitude: item.latitude,
									longitude: item.longitude,
									latitudeDelta: 0.05,
									longitudeDelta: 0.05,
								}}
								title={item.name}
								onCalloutPress={() => getMapInfo(item)}
							>
								<MaterialCommunityIcons
									name="gas-station"
									size={25}
									style={{ color: 'green' }}
								/>
							</Marker>
						))}
					</MapView>
				</MapMarkerView>
			</MapConatiner>
			{scanned && <QrCodeScanner scanned={scanned} setScanned={setScanned} />}
		</>
	);
}
