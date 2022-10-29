import { StyleSheet, View, Text, Pressable } from "react-native";

function TimeSelect({ hour }) {
    return (
        <View style={styles.container}>
            <Pressable style={styles.rectangle}>
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
        backgroundColor: '#032CA6',
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
});