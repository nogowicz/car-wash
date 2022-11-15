import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    TextInput,
    KeyboardAvoidingView
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";

import Container from "../components/Container";
import Button from "../components/Button";
import FormCard from "../components/FormCard";

function AddCardScreen({ navigation }) {
    const [value, setValue] = useState();
    return (

        <Container>
            <View>
                <View style={styles.upperButtons}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                            style={[{ width: 45, height: 45, borderRadius: 60 }]}
                            onPress={() => {
                                navigation.navigate('PaymentScreen')
                            }}
                        >
                            <Ionicons name="arrow-back" size={32} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.screenTitle}>
                    <Text style={styles.screenTitleText}>Add Card</Text>
                </View>
                <View style={styles.form}>
                    <FormCard value={value} />
                    <Button
                        onPress={() => setValue('')}
                        text='Save'
                    />
                </View>
            </View>
        </Container>

    );
}

export default AddCardScreen;


const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    upperButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 40
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
    form: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        backgroundColor: '#D5EAF2',
        width: 317,
        height: 50,
        borderRadius: 30,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 20,
    },
});