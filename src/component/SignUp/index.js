import React, { useState } from 'react';
import { Button, ToastAndroid, Text, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { ButtonContainer, SignUpInput } from './style';
import Checkbox from 'expo-checkbox';
// import { Picker } from '@react-native-picker/picker';
import Notification from '../Notification';
import { signUp } from '../../api/apiCall';
export default function SignUp({ navigation }) {
	const [email, onChangeEmail] = useState('');
	const [name, setName] = useState('');
	const [showBorderEmail, setBorderValidationEmail] = useState('#A9A9A9');
	const [showBorderName, setBorderValidationName] = useState('#A9A9A9');
	const [showBorderMobileNo, setBorderValidationMobileNo] = useState('#A9A9A9');
	const [mobileNo, setMobileNO] = useState(null);
	const [showborderPinCode, setBorderValidationPinCode] = useState('#A9A9A9');
	const [pinCode, setPinCode] = useState(null);
	const [showBorderNewPass, setBorderValidationNewPass] = useState('#A9A9A9');
	const [newPass, setNewPass] = useState(null);
	const [showBorderConfirmPass, setBorderValidationConfirmPass] =
		useState('#A9A9A9');
	const [confirmPass, setConfirmPass] = useState(null);
	const [isSelected, setSelection] = useState(false);

	const validateName = (text) => {
		setName(text);
		if (text !== '') setBorderValidationName('#006400');
		if (text === '') setBorderValidationName('red');
	};

	const validateEmail = (text) => {
		const reg = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w\w+)+$/;
		onChangeEmail(text);
		if (reg.test(text)) setBorderValidationEmail('#006400');
		if (!reg.test(text)) setBorderValidationEmail('red');
	};

	const validateMobileNo = (text) => {
		setMobileNO(text);
		if (text.length === 10) setBorderValidationMobileNo('#006400');
		if (text.length !== 10) setBorderValidationMobileNo('red');
	};

	const validatePinCode = (text) => {
		setPinCode(text);
		if (text.length === 6) setBorderValidationPinCode('#006400');
		if (text.length !== 6) setBorderValidationPinCode('red');
	};

	const validateNewPass = (text) => {
		setNewPass(text);
		const reg = /^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$/;

		if (reg.test(text)) setBorderValidationNewPass('#006400');
		if (!reg.test(text)) setBorderValidationNewPass('red');
	};

	const validateConfirmPass = (text) => {
		setConfirmPass(text);
		if (newPass === text) setBorderValidationConfirmPass('#006400');
		if (newPass !== text) setBorderValidationConfirmPass('red');
	};

	const SignUpDisable =
		showBorderName === '#006400' &&
		showBorderMobileNo === '#006400' &&
		showborderPinCode === '#006400' &&
		showBorderNewPass === '#006400' &&
		showBorderConfirmPass === '#006400' &&
		isSelected;
	const onPressSignUp = async () => {
		signUp({
			name: name,
			email: email,
			imageUrl: '',
			password: confirmPass,
			mobile: mobileNo,
			pincode: pinCode,
		}).then((res)=>{
			if(res.statusCode === '200') {
				navigation.navigate('Login');
				ToastAndroid.show(res.statusMsg, ToastAndroid.SHORT);
			}
			else {
				ToastAndroid.show('Check input again!', ToastAndroid.SHORT);
			}
		})
	};

	return (
		<ScrollView style={{ margin: 12 }}>
			<Text
				style={{
					textAlign: 'center',
					color: '#9c9c9c',
					fontSize: 18,
					marginBottom: 10,
				}}
			>
				Enter Your Email ID
			</Text>
			{/* <SignUpInput
                showborder={showBorderEmail}
                onChangeText={validateEmail}
                value={email}
                placeholder="Email.."
                keyboardType= "email-address"
                onPressIn={()=> {
                    // console.log('===', showBorderEmail);
                    if(showBorderEmail === 'red' || showBorderEmail === '#A9A9A9') setBorderValidationEmail('red');
                    if(showBorderEmail === '#006400') setBorderValidationEmail('#006400');
                }}
            />
            <SignUpInput
                showborder={showBorderPass}
                onChangeText={validatePass}
                value={pass}
                placeholder="password..."
                keyboardType= "numeric"
                maxLength={6}
                secureTextEntry={true}
                onPressIn={()=> {
                    if(showBorderPass === 'red' || showBorderPass === '#A9A9A9') setBorderValidationPass('red');
                    if(showBorderPass === '#006400') setBorderValidationPass('#006400');
                }}
            />
            <ButtonContainer >
                <Button 
                    disabled={(showBorderPass !== '#006400') || (showBorderEmail !== '#006400')} 
                    onPress={onPressVerifyEmail} 
                    title="verify" 
                    color="#006400" 
                />
            </ButtonContainer> */}
			{/* <View style={{ 
                borderWidth: 1, 
                borderStyle: 'solid', 
                borderColor: '#A9A9A9', 
                height: 40, 
                display: 'flex',
                justifyContent: 'center', 
                alignContent: 'center',
                marginBottom: 20,
                borderRadius: 4,
                backgroundColor: 'white',
            }}
            >
                <Picker
                    selectedValue={selectedLanguage}
                    onValueChange={itemValue => setSelectedLanguage(itemValue)}
                    style={{ paddingVertical: 0, margin: 0, color: '#A9A9A9' }}
                    
                >
                    <Picker.Item label="Client" value="Client" />
                    <Picker.Item label="Vendor" value="Vendor" />            
                </Picker>
            </View> */}
			<SignUpInput
				showborder={showBorderName}
				onChangeText={validateName}
				value={name}
				placeholder="Name.."
				keyboardType="default"
				onPressIn={() => {
					// console.log('===', showBorderEmail);
					if (showBorderName === 'red' || showBorderName === '#A9A9A9')
						setBorderValidationName('red');
					if (showBorderName === '#006400') setBorderValidationName('#006400');
				}}
			/>
			<SignUpInput
				showborder={showBorderEmail}
				onChangeText={validateEmail}
				value={email}
				placeholder="Email.."
				keyboardType="email-address"
				onPressIn={() => {
					// console.log('===', showBorderEmail);
					if (showBorderEmail === 'red' || showBorderEmail === '#A9A9A9')
						setBorderValidationEmail('red');
					if (showBorderEmail === '#006400')
						setBorderValidationEmail('#006400');
				}}
			/>
			<SignUpInput
				showborder={showBorderMobileNo}
				onChangeText={validateMobileNo}
				value={mobileNo}
				maxLength={10}
				placeholder="Mobile No..."
				keyboardType="numeric"
				onPressIn={() => {
					if (showBorderMobileNo === 'red' || showBorderMobileNo === '#A9A9A9')
						setBorderValidationMobileNo('red');
					if (showBorderMobileNo === '#006400')
						setBorderValidationMobileNo('#006400');
				}}
			/>
			<SignUpInput
				showborder={showborderPinCode}
				onChangeText={validatePinCode}
				value={pinCode}
				maxLength={6}
				placeholder="pin code..."
				keyboardType="numeric"
				onPressIn={() => {
					if (showborderPinCode === 'red' || showborderPinCode === '#A9A9A9')
						setBorderValidationPinCode('red');
					if (showborderPinCode === '#006400')
						setBorderValidationPinCode('#006400');
				}}
			/>
			<SignUpInput
				showborder={showBorderNewPass}
				onChangeText={validateNewPass}
				value={newPass}
				minLength={6}
				secureTextEntry={true}
				placeholder="new Password.."
				keyboardType="default"
				onPressIn={() => {
					if (showBorderNewPass === 'red' || showBorderNewPass === '#A9A9A9')
						setBorderValidationNewPass('red');
					if (showBorderNewPass === '#006400')
						setBorderValidationNewPass('#006400');
				}}
			/>
			<SignUpInput
				showborder={showBorderConfirmPass}
				onChangeText={validateConfirmPass}
				value={confirmPass}
				minLength={6}
				secureTextEntry={true}
				placeholder="confirm Password.."
				keyboardType="default"
				onPressIn={() => {
					if (newPass !== confirmPass) setBorderValidationConfirmPass('red');
					if (newPass === confirmPass)
						setBorderValidationConfirmPass('#006400');
				}}
			/>
			<View style={{ flexDirection: 'row', marginBottom: 20 }}>
				<Checkbox
					value={isSelected}
					onValueChange={setSelection}
					style={{ margin: 8 }}
				/>
				<Text style={{ margin: 8 }}>
					I agree to{' '}
					<Text onPress={()=> navigation.navigate('TermAndCondition') } style={{ color: '#0c55c3' }}>Term and Conditions</Text>
				</Text>
			</View>
			<ButtonContainer>
				<Button
					onPress={onPressSignUp}
					title="sing up"
					color="#006400"
					disabled={!SignUpDisable}
				/>
			</ButtonContainer>
			<Notification />
		</ScrollView>
	);
}

SignUp.propTypes = {
	navigation: PropTypes.any,
};
