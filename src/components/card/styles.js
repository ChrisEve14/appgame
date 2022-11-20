import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
        borderRadius: 5,
    },
});