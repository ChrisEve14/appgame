import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginVertical: 15,
    },
    title:{
        fontSize: 22,
        color: colors.text,
        textAlign: "center",
        paddingVertical: 50,
        fontFamily: 'Indie',
    },
    inputContainer:{
        width: '70%',
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 20,
        paddingVertical: 20,
    },
    label:{
        fontSize: 20,
        color: colors.black,
        paddingVertical: 5,
        textAlign: "center",
        fontFamily: 'Indie',

    },
    input:{
        minWidth: 70,
        fontSize: 22,
        paddingVertical: 10,
        textAlign: "center",
        fontFamily: 'Indie',
    },
    buttonContainer:{
        flexDirection: "row",
        width: '70%',
        justifyContent: 'space-around',
        marginTop: 30,
    },
    confirmedContainer:{
        width: '70%',
        height: 180,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 30,
    },
    confirmedTitle:{
        fontSize: 20,
        fontFamily: 'Indie',
        color: colors.black,

    },
});
