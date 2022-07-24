import styled from 'styled-components/native';
import { Text, View } from 'react-native';

export const OrderContainer = styled(View)({
    flex: 1,
    marginVertical: 20,
    textAlign: 'center',
});

export const OrderCardContainer = styled(View)({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 30,
    paddingTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#A9A9A9',
    marginHorizontal: 20,
});

export const OrderCardTextContainer = styled(View)({});

export const Label = styled(Text)({
    fontSize: 14,
    color: '#A9A9A9',
    fontWeight: '600',
});