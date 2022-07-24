import styled from 'styled-components/native';
import { Text, View} from 'react-native'; 

export const RegisterContainer = styled(View)({
    flex: 1,
    justifyContent: 'center',
});

export const Label = styled(Text)({
    fontSize: 40,
    textAlign: 'center',
    fontWeight: '700',
});

export const TabConatiner = styled(View)({
    flex: 1, 
    justifyContent: 'center',
});

export const TabHeader = styled(View)({
    display: 'flex', 
    flexDirection: 'row',
    marginVertical: 10,
});

export const TabLabel = styled(Text)({
    fontSize: 20, 
    color: 'black', 
});