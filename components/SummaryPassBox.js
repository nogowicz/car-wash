import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from "react-native";

function SummaryPassBox({ selectedDateId, paymentPress, selected, price }) {


    return (
        <View style={styles.container}>
            <View style={styles.upperContainer}>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{selected}</Text>
                    <Text>{selectedDateId} May 2022 - {(selectedDateId != 31 ? selectedDateId : selectedDateId - 1)} June 2022</Text>
                </View>

                <View>
                    <Text style={{ fontWeight: '900', fontSize: 32, marginRight: 10 }}>$ {price}</Text>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity onPress={paymentPress} style={styles.paymentButton}>
                    <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 20 }}>Go to payment</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default SummaryPassBox;

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D5EAF2',
        width: (windowWidth > 380 ? 370 : 330),
        height: (windowWidth > 380 ? 220 : 170),
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