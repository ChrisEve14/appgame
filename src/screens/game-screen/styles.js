import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        marginVertical: 50,
    },
    cardContent:{
        width: '70%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    title:{
        fontSize: 20,
        fontFamily: 'Indie',
        color: colors.black,
    },
    containerButton:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});