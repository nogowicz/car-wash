import { StyleSheet, View, Text, Dimensions, TextInput } from "react-native";

function Input({
    label,
    keyboardType,
    secure,
    onUpdateValue,
    value,
    isInvalid
}) {
    return (
        <View style={styles.inputContainer}>
            <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
                {label}
            </Text>
            <TextInput
                style={[styles.input, isInvalid && styles.inputInvalid]}
                autoCapitalize={false}
                keyboardType={keyboardType}
                secureTextEntry={secure}
                onChangeText={onUpdateValue}
                value={value}
            />
        </View>
    );
}

export default Input;

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 4,
    },
    label: {
        color: 'black',
        marginBottom: 4,
    },
    input: {
        backgroundColor: '#fff',
        padding: 10,
        width: windowWidth - 100,
        height: 40,
        borderRadius: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
    },
    inputInvalid: {
        backgroundColor: 'red',
    },
    labelInvalid: {
        color: 'red',
    },
});