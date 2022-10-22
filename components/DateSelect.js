import { StyleSheet, View, Text, Pressable } from "react-native";

function DateSelect({ day, dayName }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{dayName.substring(0, 3)}</Text>
            <Pressable style={styles.rectangle}>
                <Text style={styles.number}>{day}</Text>
            </Pressable>
        </View>
    );
}

export default DateSelect;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 7,
    },
    rectangle: {
        backgroundColor: '#032CA6',
        width: 45,
        height: 56,
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#000',
        fontSize: 15,
    },
    number: {
        fontWeight: 'bold',
        color: '#ffffff',
        fontSize: 20,
    },
});