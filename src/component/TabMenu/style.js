import styled from 'styled-components/native';
import {Text, View } from 'react-native';

export const TabConatiner = styled(View)(
    ({noMargin})=>({
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        marginHorizontal: noMargin ? 0 : 20,
    }),
);

export const Label = styled(Text)({
    textAlign: 'center',
});