import {
    StyleSheet,
    View,
    Dimensions,
    TouchableOpacity,
    Text
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

import Container from "../components/Container";
import Input from '../components/auth/Input';
import Button from '../components/Button';

function ChangeCredentialsScreen({ navigation }) {

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
                <View style={styles.screenTitle}>
                    <Text style={styles.screenTitleText}>Change Credentials</Text>
                </View>
                <View style={styles.authContent}>
                    <View style={styles.form}>
                        <View>
                            <Input
                                label="Old Email"
                                keyboardType="email-address"

                            />
                            <Input
                                label="New Email"
                                keyboardType="email-address"
                            />
                            <Input
                                label="Old Password"
                                secure
                            />
                            <Input
                                label="New Password"
                                secure
                            />
                        </View>
                        <Button text={"Save"} />
                    </View>

                </View>
            </View>
        </Container>
    );
}

export default ChangeCredentialsScreen;

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    upperButtonsText: {
        fontSize: 13,
        fontWeight: 'bold',
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
    form: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    authContent: {
        marginTop: 20,
        marginHorizontal: 32,
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#D5EAF2',
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.35,
        shadowRadius: 4,
    },
    button: {
        width: 320,
        height: 70,
        backgroundColor: '#032CA6',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    dropdown: {
        backgroundColor: '#032CA6',
        borderRadius: 30,
    },

    buttonContainer: {
        marginTop: 10,
        alignItems: 'center'
    },

});