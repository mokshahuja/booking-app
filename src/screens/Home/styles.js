import {StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100vh',
        resizeMode: 'cover',
        // alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 100,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        marginLeft: 25,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',

    },
    searchText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    button: {
        marginTop: 25,
        backgroundColor: 'white',
        width: 200,
        borderRadius: 10,
        marginLeft: 25,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    search: {
        width: Dimensions.get('screen').width - 30,
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        borderRadius: 30,
        position: 'absolute',
        backgroundColor: 'white',
        zIndex: 100,
        flexDirection: 'row',    
        marginHorizontal: 15,
        top: 25
    },
    homeView: {
        fontFamily: 'Gill Sans Extrabold, sans-serif'
    }
}
);

export default styles;