import { StyleSheet, View, TouchableOpacity, Text, Dimensions, TouchableHighlight, Alert } from "react-native";
import { Ionicons, EvilIcons, FontAwesome5, Fontisto, FontAwesome } from '@expo/vector-icons';
import Container from "../components/Container";
import Card from "../components/Card";
import AddCard from "../components/AddCard";
import { useState } from "react";

function PaymentScreen({ navigation }) {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [paymentMethod, setPaymentMethod] = useState('Credit card');


    return (
        <Container>
            <View>
                <View style={styles.upperButtons}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                            style={[{ width: 45, height: 45, borderRadius: 60 }]}
                            onPress={() => {
                                navigation.navigate('BookScreen')
                            }}
                        >
                            <Ionicons name="arrow-back" size={32} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <AddCard />
                    <Card />
                </View>
                <View style={styles.otherPaymentsMethodContainer}>
                    <View>
                        <Text style={{ fontWeight: 'bold', marginBottom: 20, }}>Other payment methods</Text>
                        <TouchableOpacity style={styles.payment} onPress={() => setPaymentMethod("Credit card")}>
                            <EvilIcons name="credit-card" size={32} color="black" />
                            <Text style={{ fontWeight: 'bold' }}>Credit card</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.payment} onPress={() => setPaymentMethod("Apple Pay")}>
                            <Fontisto name="apple-pay" size={24} color="black" />
                            <Text style={{ fontWeight: 'bold', marginLeft: 5, }}>Apple Pay</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.payment} onPress={() => setPaymentMethod("Pay Pal")}>
                            <Fontisto name="paypal-p" size={24} color="black" />
                            <Text style={{ fontWeight: 'bold', marginLeft: 5, }}>Pay Pal</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.payment} onPress={() => setPaymentMethod("Amazon Pay")}>
                            <FontAwesome5 name="amazon-pay" size={24} color="black" />
                            <Text style={{ fontWeight: 'bold', marginLeft: 5, }}>Amazon Pay</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.payment} onPress={() => setPaymentMethod("Ali Pay")}>
                            <FontAwesome5 name="alipay" size={24} color="black" />
                            <Text style={{ fontWeight: 'bold', marginLeft: 5, }}>Ali Pay</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.payment} onPress={() => setPaymentMethod("Cash")}>
                            <FontAwesome name="dollar" size={24} color="black" />
                            <Text style={{ fontWeight: 'bold', marginLeft: 5, }}>Cash</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.paymentButton}>
                        <View style={styles.leftSide}>
                            <TouchableOpacity
                                style={styles.payButton}
                                onPress={() => Alert.alert("Redirecting", "Redirecting to payment site...")}
                            >
                                <Text style={{
                                    color: "#032CA6",
                                    fontWeight: 'bold',
                                    fontSize: 20,
                                    marginRight: 10,
                                }}>Pay</Text>
                                <FontAwesome name="arrow-right" size={20} color="#032CA6" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.rightSide}>
                            <Text style={{ color: '#fff', fontWeight: '900', fontSize: 36 }}>$ 8</Text>
                            <Text style={{ color: '#fff', fontWeight: '700', fontSize: 16 }}>{paymentMethod}</Text>
                        </View>
                    </View>
                </View>


            </View>
        </Container >
    );
}

export default PaymentScreen;

const styles = StyleSheet.create({
    upperButtonsText: {
        fontSize: 13,
        fontWeight: 'bold',
    },

    upperButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 40
    },

    cardContainer: {
        marginTop: 20,
        flexDirection: 'row',
    },
    otherPaymentsMethodContainer: {
        marginTop: 20,
        marginHorizontal: 20,
        height: '85%',
        backgroundColor: '#D5EAF2',
        borderRadius: 10,
        alignItems: 'center',
        padding: 20,
    },
    payment: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    paymentButton: {
        marginVertical: 20,
        width: '100%',
        height: '30%',
        backgroundColor: '#032CA6',
        borderRadius: 12,
        flexDirection: 'row',
    },
    payButton: {
        width: 107,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',

    },
    leftSide: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    rightSide: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
});