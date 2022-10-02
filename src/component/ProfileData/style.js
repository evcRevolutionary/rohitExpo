import styled from 'styled-components/native';
import { Text, View } from 'react-native';

export const ProfileContainer = styled(View)({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-evenly',
	alignItems: 'center',
	backgroundColor: '#028A0f',
	height: 120,
	borderBottomLeftRadius: 30,
	borderBottomRightRadius: 30,
});

export const ProfileLabel = styled(Text)({
	color: 'white',
	fontSize: 30,
});

export const ComView = styled(View)({});
