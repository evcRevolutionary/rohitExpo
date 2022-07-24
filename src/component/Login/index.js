import React, { useRef, useState, useEffect } from 'react';
import { Animated,
    StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';
import { Container } from './style';
import InitalScreen from './InitalScreen';
import LoginPage from './LoginPage';

export default function Login({ navigation }) {
    const [ HideInitalScreen, setHideInitialScreen] = useState(false);
    const fadeAnim = useRef(new Animated.Value(HideInitalScreen ? 0 : 1)).current ;

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: HideInitalScreen ? 1 : 0,
                duration: 2000,
                useNativeDriver: true,
            }
        ).start();

        setTimeout(()=>{
            setHideInitialScreen(true);
        }, 2100); 
        
    }, [fadeAnim, HideInitalScreen, navigation]);

    return (
        <Container>
            <StatusBar style={{ background: 'black' }} />
            {!HideInitalScreen ?
                <InitalScreen fadeAnim={fadeAnim} />: 
                <LoginPage {...{fadeAnim, navigation}}/>
            }
        </Container>
    );
}

Login.propTypes = {
    navigation: PropTypes.any,
};