import { StyleSheet, Text, View, Dimensions, TextInput } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

function FormCard({ value }) {

    return (
        <View style={styles.card}>
            <View style={styles.upperContainer}>
                <TextInput
                    style={styles.numberInput}
                    value={value}
                    keyboardType="numeric"
                    maxLength={16}
                    placeholder="Card Number"
                />
            </View>
            <View style={styles.middleContainer}>
                <TextInput
                    style={styles.nameInput}
                    value={value}
                    placeholder="Name"
                />

            </View>
            <View style={styles.lowerContainer}>
                <View>
                    <TextInput
                        style={styles.dateInput}
                        value={value}
                        maxLength={5}
                        placeholder="Exp Date"
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.cvvInput}
                        value={value}
                        keyboardType="numeric"
                        maxLength={3}
                        placeholder="CVV"
                    />
                </View>
                <View>
                    <FontAwesome5 name="cc-mastercard" size={24} color="black" />
                </View>
            </View>

        </View>
    );
}

export default FormCard;

const windowWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
    card: {
        height: (windowWidth > 380 ? 169 : 133),
        width: (windowWidth > 380 ? 280 : 220),
        backgroundColor: '#6AB9D9',
        borderRadius: 10,
        flexDirection: 'column'
    },
    upperContainer: {
        paddingTop: 20,
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    middleContainer: {
        flex: 1,
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    lowerContainer: {
        flex: 2,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    numberInput: {
        backgroundColor: '#fff',
        height: (windowWidth > 380 ? 25 : 20),
        width: (windowWidth > 380 ? 250 : 190),
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 4,
        letterSpacing: 2,
        borderRadius: 10,
        fontSize: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    nameInput: {
        backgroundColor: '#fff',
        height: (windowWidth > 380 ? 25 : 20),
        width: (windowWidth > 380 ? 200 : 140),
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 4,
        letterSpacing: 2,
        borderRadius: 10,
        fontSize: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dateInput: {
        backgroundColor: '#fff',
        height: (windowWidth > 380 ? 25 : 20),
        width: (windowWidth > 380 ? 100 : 70),
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 4,
        letterSpacing: 2,
        borderRadius: 10,
        fontSize: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cvvInput: {
        backgroundColor: '#fff',
        height: (windowWidth > 380 ? 25 : 20),
        width: (windowWidth > 380 ? 80 : 50),
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 4,
        letterSpacing: 2,
        borderRadius: 10,
        fontSize: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },

});