import { StyleSheet, View, TouchableOpacity, Text, Dimensions, TouchableHighlight, Alert } from "react-native";
import { Ionicons, EvilIcons, FontAwesome5, Fontisto, FontAwesome } from '@expo/vector-icons';
import Container from "../components/Container";
import Card from "../components/Card";
import AddCard from "../components/AddCard";
import { useState } from "react";
import { useSelector } from "react-redux";

function PaymentScreen({ navigation }) {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [paymentMethod, setPaymentMethod] = useState('Credit card');
    const price = useSelector((state) => state.price.price);


    return (
        <Container>
            <View>
                <View style={styles.upperButtons}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                            style={[{ width: 45, height: 45, borderRadius: 60 }]}
                            onPress={() => {
                                navigation.goBack();
                            }}
                        >
                            <Ionicons name="arrow-back" size={32} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <AddCard onAddCardPress={() => navigation.navigate('AddCardScreen')} />
                    <Card />
                </View>
                <View style={styles.otherPaymentsMethodContainer}>
                    <View>
                        <Text style={{ fontWeight: 'bold', marginBottom: 20, }}>Other payment methods</Text>
                        <TouchableOpacity style={[styles.payment, (paymentMethod === 'Credit card') && { opacity: 0.5 }]} onPress={() => setPaymentMethod("Credit card")}>
                            <EvilIcons name="credit-card" size={32} color="black" />
                            <Text style={{ fontWeight: 'bold' }}>Credit card</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.payment, (paymentMethod === 'Apple Pay') && { opacity: 0.5 }]} onPress={() => setPaymentMethod("Apple Pay")}>
                            <Fontisto name="apple-pay" size={24} color="black" />
                            <Text style={{ fontWeight: 'bold', marginLeft: 5, }}>Apple Pay</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.payment, (paymentMethod === 'Pay Pal') && { opacity: 0.5 }]} onPress={() => setPaymentMethod("Pay Pal")}>
                            <Fontisto name="paypal-p" size={24} color="black" />
                            <Text style={{ fontWeight: 'bold', marginLeft: 5, }}>Pay Pal</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.payment, (paymentMethod === 'Amazon Pay') && { opacity: 0.5 }]} onPress={() => setPaymentMethod("Amazon Pay")}>
                            <FontAwesome5 name="amazon-pay" size={24} color="black" />
                            <Text style={{ fontWeight: 'bold', marginLeft: 5, }}>Amazon Pay</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.payment, (paymentMethod === 'Ali Pay') && { opacity: 0.5 }]} onPress={() => setPaymentMethod("Ali Pay")}>
                            <FontAwesome5 name="alipay" size={24} color="black" />
                            <Text style={{ fontWeight: 'bold', marginLeft: 5, }}>Ali Pay</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.payment, (paymentMethod === 'Cash') && { opacity: 0.5 }]} onPress={() => setPaymentMethod("Cash")}>
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
                            <Text style={{ color: '#fff', fontWeight: '900', fontSize: 36 }}>$ {price}</Text>
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
        marginTop: 20,
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