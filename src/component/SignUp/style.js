import styled from 'styled-components/native';
import {Text, View, TextInput} from 'react-native';

export const Lable = styled(Text)({
    marginBottom: 10,
    color: '#A9A9A9',
});

export const ButtonContainer = styled(View)({
    marginTop: 30,
});

export const SignupLabel = styled(Text)({
    fontSize: 20,
    textAlign: 'center',
    color: '#A9A9A9',
    marginTop: 20,
    textTransform: 'uppercase',
    fontWeight: '700',
});

export const SignUpInput =  styled(TextInput)({
    height: 40,
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderColor: '#A9A9A9',
    borderRadius: 4,
});