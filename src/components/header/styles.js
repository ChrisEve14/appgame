import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles =  StyleSheet.create({
    container: {
        backgroundColor: colors.backgroundColor,
        height: 100,
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