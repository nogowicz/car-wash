import { StyleSheet, View, Text, Image } from "react-native";

function SummaryBox() {
    return (
        <View style={styles.container}>
            <View style={styles.upperContainer}>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Standardowe mycie</Text>
                    <Text>21 Maja 2022 14:30 - 14:45</Text>
                    <Text style={{ fontWeight: '500' }}>Stanowsiko 3</Text>
                </View>

                <View>
                    <Text style={{ fontWeight: '900', fontSize: 32, marginRight: 10 }}>8 zł</Text>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.paymentButton}>
                    <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 20 }}>Go to payment</Text>
                </View>
            </View>
        </View>
    );
}

export default SummaryBox;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D5EAF2',
        width: 330,
        height: 170,
        borderRadius: 30,
        marginTop: 20,
        padding: 20,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 40,
        marginBottom: 50
    },
    upperContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    paymentButton: {
        width: 280,
        height: 50,
        backgroundColor: '#032CA6',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },

});