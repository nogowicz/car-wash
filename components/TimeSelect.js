import { StyleSheet, View, Text, Pressable } from "react-native";

function TimeSelect({ hour, booked, selected, onTimePress }) {
    return (
        <View style={styles.container}>
            <Pressable onPress={onTimePress} style={[styles.rectangle, (selected) && styles.pressed, (booked) && styles.booked]}>
                <Text style={styles.hour}>{hour}</Text>
            </Pressable>
        </View>
    );
}

export default TimeSelect;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 7,
    },
    rectangle: {
        backgroundColor: '#5670BF',
        width: 79,
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    hour: {
        fontWeight: 'bold',
        color: '#ffffff',
        fontSize: 20,
    },
    pressed: {
        backgroundColor: '#032CA6'
    },
    booked: {
        backgroundColor: '#999999',
    },
});