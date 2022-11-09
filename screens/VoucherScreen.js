import {
    StyleSheet,
    View,
    TouchableOpacity,
    Dimensions,
    Text,
    TextInput,
    Alert
} from "react-native";
import { Ionicons, FontAwesome } from '@expo/vector-icons';

import Container from "../components/Container";
import { useState } from "react";

function VoucherScreen({ navigation }) {
    const [voucherText, setVoucherText] = useState('');
    return (
        <Container>
            <View>
                <View style={styles.upperButtons}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                            style={[{ width: 45, height: 45, borderRadius: 60 }]}
                            onPress={() => {
                                navigation.navigate('MainScreen')
                            }}
                        >
                            <Ionicons name="arrow-back" size={32} color="black" />
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.screenTitle}>
                    <Text style={styles.screenTitleText}>Your voucher</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            value={voucherText}
                            onChangeText={(text) => { setVoucherText(text) }}
                            style={styles.voucherInput}
                            keyboardType='numeric'
                            placeholder="Enter voucher"
                            autoFocus={true}
                            maxLength={9}
                        />
                        {voucherText ?
                            <TouchableOpacity
                                onPress={() => {
                                    setVoucherText('');
                                    Alert.alert("Voucher expired", "This voucher has expired");
                                }} style={styles.button}>
                                <FontAwesome name="send-o" size={18} color="white" />
                            </TouchableOpacity> :
                            <View
                                style={[styles.button, { opacity: 0.5 }]}>
                                <FontAwesome name="send-o" size={18} color="white" />
                            </View>}
                    </View>


                </View>
            </View>

        </Container>
    );
}

export default VoucherScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4563BF',
    },
    screenTitle: {
        marginTop: (windowWidth > 380 ? 120 : 80),
        alignItems: 'center',
        justifyContent: 'center'
    },
    screenTitleText: {
        fontWeight: '700',
        fontSize: 24
    },
    upperButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 40
    },
    voucherInput: {
        width: windowWidth - 100,
        height: 50,
        backgroundColor: '#D5EAF2',
        padding: 10,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'

    },
    button: {
        width: 40,
        height: 40,
        backgroundColor: '#032CA6',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D5EAF2',
        marginTop: 50,
        width: windowWidth - 50,
        height: 50,
        padding: 10,
        borderRadius: 10,

    },

});