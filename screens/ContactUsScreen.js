import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import {
    Ionicons,
    FontAwesome,
    MaterialCommunityIcons,
} from '@expo/vector-icons';

import Container from "../components/Container";
import FaqButton from "../components/FaqButton";

function ContactUsScreen({ navigation }) {
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
                    <Text style={styles.screenTitleText}>Contact us</Text>

                    <View style={styles.infoContainer}>
                        <View>
                            <View style={styles.contactDetails}>
                                <FontAwesome name="phone" size={24} color="black" />
                                <Text style={styles.contactDetailsText}>+48 789 456 123</Text>
                            </View>
                            <View style={styles.contactDetails}>
                                <MaterialCommunityIcons name="email" size={24} color="black" />
                                <Text style={styles.contactDetailsText}>abc@gmail.com</Text>
                            </View>
                            <View style={styles.contactDetails}>
                                <Ionicons name="ios-location-sharp" size={24} color="black" />
                                <Text style={styles.contactDetailsText}> 68 Franklin Dr. Brooklyn, NY 11209</Text>
                            </View>
                        </View>
                    </View>

                    <FaqButton />
                </View>


            </View>
        </Container >
    );
}

export default ContactUsScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    upperButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 40
    },
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
    infoContainer: {
        width: (windowWidth > 380 ? 340 : 300),
        height: (windowWidth > 380 ? 370 : 350),
        backgroundColor: '#D5EAF2',
        borderRadius: 30,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contactDetails: {
        flexDirection: 'row',
        paddingHorizontal: 40,
        paddingVertical: 20,
    },
    contactDetailsText: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 16,
        flexWrap: 'wrap',
    }
});