import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

    YCenter: {
        justifyContent: 'center'
    },

    XCenter: {
        alignItems: 'center'
    },

    FlexOne: {
        flex: 1
    },

    ScreenWidthHeight: {
        height: height,
        width: width,
    },

    WhiteBg: {
        backgroundColor: '#fff'
    },

    BlackBg: {
        backgroundColor: '#343434'
    },

    AppPaddingLeft: {
        paddingLeft: 20
    },

    AppPaddingRight: {
        paddingRight: 20
    },

    AppPaddingX: {
        paddingHorizontal: 20,
    },

    AppPaddingTop: {
        paddingTop: 20
    },
    BoxUnderline: {
        borderColor: '#000',
        borderWidth: 2,
        padding: 10,
    },

    h3: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fff',
    },

    ActivityIndicator: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    Text12BoldBlack : {
        fontSize:12,
        fontWeight:'600',
        color:'#000',
        fontFamily:'roboto'
    },

    Text12BoldWhite : {
        fontSize:12,
        fontWeight:'600',
        color:'#fff',
        fontFamily:'roboto'
    },

    searchInstrumentRow : {
        borderWidth:.5,
        borderColor:'#000',
        backgroundColor:'#444',
        paddingHorizontal:20,
        paddingVertical: 8
    },

    searchInstrumentRowMinorText: {
        color:'#AAA',
        fontSize:11,
        fontWeight:'500',
        fontFamily:'roboto',
    },
    
    tradeInstrumentRow: {
        height:40,
        padding:0,
        paddingHorizontal:20,
        flexDirection: 'row',
        marginBottom: 5,
    },

    error: {
        color:'red',
        fontSize:16,
        marginBottom:5,
    }

})

export default styles; 