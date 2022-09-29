import styled from 'styled-components/native';
import { Text, View} from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export const MaterialIcon = styled(MaterialCommunityIcons)(
    ({closeButton, color})=>({
        color: color,
        borderWidth: closeButton ? 2: 0,
        borderColor: closeButton ? 'red': '',
        borderStyle: closeButton ? 'solid': '',
        borderRadius: closeButton ? 50 : 0,
        padding: closeButton ? 2: 0,
    }),
);

export const MapInfoContainer = styled(View)({
    flex: 1,
    width: 100,
    height: '100%',
});

export const ModalViewConatiner = styled(View)({
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    paddingTop: 25,
});

export const ModalViewCloseButton = styled(View)({
    width: 25,
    height: 25,
    position: 'absolute',
    right: 5,
    top: 10,
});

export const ModalViewAddress = styled(View)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
});

export const ModalViewAddressContainer = styled(View)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
});

export const ModalViewAvilableButton = styled(View)({
    display: 'flex',
    flexDirection: 'row',
    marginRight: 20,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    borderRadius: 50,
    paddingHorizontal: 10,
});

export const ModalViewDirection = styled(View)({
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    top: -40,
    right: 20,
});

export const ModalViewMoreInfo = styled(View)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    backgroundColor: '#DBE2E9',
    paddingHorizontal: 20,
});

export const ModalViewSupport = styled(View)({
    paddingHorizontal: 10,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
});

export const ModalViewScan = styled(View)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
});

export const Label = styled(Text)(
    ({marginRight, color})=>({
        marginRight: marginRight ? 10 : 0,
        color: color ? 'white' : '',
    }),
);

export const EmptyView = styled(View)(
    ({buttonWidth})=>({
        minWidth: buttonWidth ? '60%': '',
    }),
);