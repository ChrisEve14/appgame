import { StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";

const {height, width} = Dimensions.get('window');

export const styles =  StyleSheet.create({
    container: {
        backgroundColor: colors.backgroundColor,
        height: height * 0.16,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 60,
    },
    title: {
        fontSize: 30,
        color: colors.text,
        fontFamily: 'Satisfy',
    }
})