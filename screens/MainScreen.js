import { Dimensions, StyleSheet, View, Text } from "react-native";
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

function MainScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.theme}>
                <View style={[styles.ellipse]} />
                <View style={[styles.ellipse, { top: -100, left: -100 }]} />
            </View>
            <View style={styles.upperButtons}>
                <View style={{ justifyContent: 'center' }}>
                    <Ionicons name="log-in-outline" size={32} color="black" />
                    <Text style={[styles.upperButtonsText]}>Log out</Text>
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <MaterialCommunityIcons name="account-settings" size={32} color="black" style={{ marginHorizontal: 8 }} />
                    <Text style={[styles.upperButtonsText]}>Settings</Text>
                </View>

            </View>
            <View style={styles.logo}>
                <FontAwesome5 name="car-alt" size={80} color="#4563BF" />
                <Text style={[styles.title]}>Car Wash</Text>
            </View>

            <View style={styles.buttonContainer}>
                <View style={styles.buttonRow}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Book the date</Text>
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Buy a pass</Text>
                    </View>
                </View>
                <View style={styles.buttonRow}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Use the voucher</Text>
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Contact us</Text>
                    </View>
                </View>
            </View>

        </View>
    );
}

export default MainScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
    },
    ellipse: {
        width: 200,
        height: 200,
        backgroundColor: '#6ab9d9',
        borderRadius: 120,
        opacity: 0.46,
    },
    upperButtonsText: {
        fontSize: 13,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#4563BF',
    },
    upperButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: windowWidth - 10,
        marginHorizontal: 15,
        top: '-70%',
        paddingHorizontal: 10,
    },
    theme: {
        top: '1%',
    },
    logo: {
        alignItems: 'center',
        top: '-25%',
    },
    button: {
        width: 146,
        height: 146,
        backgroundColor: '#032CA6',
        borderRadius: 30,
        margin: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonRow: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonContainer: {
        top: '-25%',
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#FFFFFF',
        fontSize: 17
    }
});