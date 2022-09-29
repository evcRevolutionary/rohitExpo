import styled from 'styled-components/native';
import { Text, TextInput, View, SafeAreaView, Image } from 'react-native';

export const Container = styled(SafeAreaView)({
    margin: 20,
    flex: 1,
    justifyContent: 'center',
});

export const Lable = styled(Text)({
    fontSize: 14,
    marginBottom: 10,
    color: '#A9A9A9',
});

export const MobileInput = styled(TextInput)(
    ({showborder})=>({
        height: 40,
        marginBottom: 20,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
        borderColor: showborder,
        borderRadius: 4,
    }),
);

export const ButtonContainer = styled(View)(
    ({ isIcon} ) =>({
        marginTop: 30,
        padding: isIcon ? 8 : 0,
        backgroundColor: isIcon ? '#4285F4' : '',
        display: 'flex',
        flexDirection: isIcon ? 'row' : 'column',
        justifyContent: 'center',
        alignItems: isIcon ? 'center' : '',
    }),
);
export const BigLabel = styled(Text)(
    ({isCenter})=>({
        fontSize: 14,
        textAlign: isCenter ? 'center' : 'right',
        fontWeight: '700',
    }),
);

export const GoogleText = styled(Text)({
    color: 'white',
    marginLeft: 10,
});

export const AppName =  styled(Text)({
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 0,
    alignContent: 'center',
    textAlign: 'center',
});

export const ImageContainer =  styled(View)({
    alignItems: 'center', 
    justifyContent: 'center',
    flex: 1,
});

export const AppImage =  styled(Image)({
    width: '80%',
    height: '40%',
});

export const DontHaveAccountLable = styled(Text)({
    fontSize: 14,
    fontWeight: '500',
    marginTop: 10,
    marginBottom: 5,
    textTransform: 'uppercase',
    textAlign: 'center',
});

export const ClickLable = styled(Text)({
    color: '#0c55c3',
});