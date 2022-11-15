import { StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";

function Button({ onPress, text }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
}

export default Button;

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#032CA6',
        width: windowWidth - 100,
        height: 50,
        borderRadius: 30,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
    }
});