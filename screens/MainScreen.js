import {
    Dimensions,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from "react-native";
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useDispatch } from "react-redux";
import { logout } from "../store/redux/auth";

import FaqButton from "../components/FaqButton";
import Container from "../components/Container"

function MainScreen({ navigation }) {
    const dispatch = useDispatch();
    return (
        <Container>
            <View>
                <View style={styles.upperButtons}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => {
                                dispatch(logout());
                            }}
                            style={[{ width: 65, height: 65, borderRadius: 60 }]}>
                            <Ionicons name="log-in-outline" size={32} color="black" />
                            <Text style={[styles.upperButtonsText]}>Log out</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={[{ width: 65, height: 65, borderRadius: 60 }]}
                        onPress={() => {
                            navigation.navigate("ProfileScreen")
                        }}
                    >
                        <View style={{ justifyContent: 'center' }}>
                            <View style={styles.profileLogo}>
                                <Image style={{ width: 30, height: 30, borderRadius: 16 }} source={require('../assets/portrait.jpg')} />
                            </View>
                        </View>
                    </TouchableOpacity>

                </View>

                <View style={styles.logo}>
                    <FontAwesome5 name="car-alt" size={60} color="#4563BF" />
                    <Text style={[styles.title]}>Car Wash</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.button}
                            onPress={() => {
                                navigation.navigate('BookScreen')
                            }}>
                            <Text style={styles.buttonText}>Book the date</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.button}
                            onPress={() => {
                                navigation.navigate('BuyPassScreen')
                            }}
                        >
                            <Text style={styles.buttonText}>Buy a pass</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.button}
                            onPress={() => {
                                navigation.navigate('VoucherScreen')
                            }}
                        >
                            <Text style={styles.buttonText}>Use the voucher</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.button}
                            onPress={() => {
                                navigation.navigate('ContactUsScreen')
                            }}
                        >
                            <Text style={styles.buttonText}>Contact us</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity
                    style={{ alignItems: 'center' }}
                    activeOpacity={0.5}
                    onPress={() => {
                        navigation.navigate('FAQScreen')
                    }}
                >
                    <FaqButton />
                </TouchableOpacity>

            </View>
        </Container>
    );

}

export default MainScreen;

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    upperButtonsText: {
        fontSize: 13,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#4563BF',
    },
    upperButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginTop: 40
    },
    logo: {
        alignItems: 'center',
        marginTop: 10
    },
    button: {
        width: (windowWidth > 380 ? 150 : 130),
        height: (windowWidth > 380 ? 150 : 130),
        backgroundColor: '#032CA6',
        borderRadius: 30,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    buttonRow: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonContainer: {
        marginTop: 10,
        paddingHorizontal: 30,
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#FFFFFF',
        fontSize: 17
    },
    profileLogo: {
        width: 32,
        height: 32,
        borderRadius: 20,
        borderWidth: 17,
        borderColor: '#032CA6',
        alignItems: 'center',
        justifyContent: 'center'
    },

});