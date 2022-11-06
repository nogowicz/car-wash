import { StyleSheet, Text, View, Dimensions } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

function Card() {
    return (
        <View style={styles.card}>
            <View style={styles.upperContainer}>
                <Text style={{ fontWeight: 'bold' }}>1 2 3 4 5 6 7 8 9 1 1 1 2 1 3 1</Text>
            </View>
            <View style={styles.middleContainer}>
                <Text style={{ fontWeight: 'bold' }}>John Smith</Text>
            </View>
            <View style={styles.lowerContainer}>
                <View>
                    <Text style={{ fontWeight: 'bold' }}>12/26</Text>
                </View>
                <View>
                    <Text style={{ fontWeight: 'bold' }}>CVV ***</Text>
                </View>
                <View>
                    <FontAwesome5 name="cc-mastercard" size={24} color="black" />
                </View>
            </View>

        </View>
    );
}

export default Card;


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
    },
    lowerContainer: {
        flex: 2,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

});