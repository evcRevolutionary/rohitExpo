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
        borderWidth: 2,
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
export const BigLabel = styled(Text)({
    fontSize: 20,
    textAlign: 'center',
    color: '#A9A9A9',
    marginTop: 20,
    textTransform: 'uppercase',
    fontWeight: '700',
});

export const GoogleText = styled(Text)({
    color: 'white',
    marginLeft: 10,
});

export const AppName =  styled(Text)({
    fontSize: 50,
    fontWeight: '500',
    marginBottom: 50,
    alignContent: 'center',
    textAlign: 'center',
});

export const ImageContainer =  styled(View)({
    display: 'flex', 
    alignItems: 'center', 
    marginBottom: 80,
});

export const AppImage =  styled(Image)({
    width: 150,
    height: 150,
});