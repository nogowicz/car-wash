import {
    View,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Text,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import SelectList from 'react-native-dropdown-select-list';
import { useDispatch, useSelector } from 'react-redux';
import { setFavCarWash } from '../store/redux/favCarWash';
import AsyncStorage from "@react-native-async-storage/async-storage";

import Container from "../components/Container";
import Button from '../components/Button';

function ProfileScreen({ navigation }) {
    const favCarWash = useSelector((state) => state.favCarWash.favCarWash);
    const [selected, setSelected] = useState(favCarWash);
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchFavCarWash() {
            const storedCarWash = await AsyncStorage.getItem('favCarWash');

            if (storedCarWash) {
                dispatch(setFavCarWash({ favCarWash: storedCarWash }))
                setSelected(storedCarWash)
            }
        }
        fetchFavCarWash();
    }, []);
    const options = [
        { key: '0', value: '68 Franklin Dr. Brooklyn, NY 11209' },
        { key: '1', value: '8789 Sierra St. Astoria, NY 11106' },
        { key: '2', value: '6 Third Lane Brooklyn, NY 11221' },
        { key: '3', value: '37 Ohio Street Jamaica, NY 11435' },
        { key: '4', value: '8 Poor House Ave. Woodside, NY 11377' },
    ];
    return (
        <Container>
            <View>
                <View style={styles.upperButtons}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                            style={[{ width: 45, height: 45, borderRadius: 60 }]}
                            onPress={() => {
                                navigation.goBack()
                            }}
                        >
                            <Ionicons name="arrow-back" size={32} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.screenTitle}>
                    <Text style={styles.screenTitleText}>Profile Settings</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={styles.label}>Select your favorite car wash</Text>
                    <SelectList
                        setSelected={setSelected}
                        data={options}
                        search={false}
                        boxStyles={styles.button}
                        dropdownStyles={styles.dropdown}
                        dropdownTextStyles={{
                            color: '#FFF',
                            fontWeight: 'bold',
                            fontSize: 13
                        }}
                        inputStyles={{
                            fontSize: 13,
                            fontWeight: 'bold',
                            color: '#ffffff',
                        }}
                        placeholder={options[selected].value}
                        arrowicon={<Ionicons name="md-arrow-down-sharp" size={22} color="#fff" />}

                    />
                    <Button
                        text='Change your credentials'
                        onPress={() => {
                            navigation.navigate('ChangeCredentialsScreen')
                        }}
                    />

                    <Button
                        text='Save'
                        onPress={() => {
                            dispatch(setFavCarWash({ favCarWash: options[selected].key }))
                            navigation.goBack();
                        }}
                    />
                </View>
            </View>
        </Container>
    );
}

export default ProfileScreen;

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
    buttonContainer: {
        alignItems: 'center',
        marginTop: 50,
    },

    button: {
        width: windowWidth - 100,
        height: 50,
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
    label: {
        fontWeight: 'bold',
        fontSize: 15,
    },

});
