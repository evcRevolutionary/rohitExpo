import styled from 'styled-components/native';
import { Text, View } from 'react-native';

export const AccountContainer = styled(View)({
    padding: 15,
    marginHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
});

export const AccountIconContainer = styled(View)({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
});

export const Lable = styled(Text)({
    marginLeft: 8,
});
