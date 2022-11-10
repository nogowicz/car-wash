import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import {
    Ionicons,
} from '@expo/vector-icons';

import Container from "../components/Container";

function FAQScreen({ navigation }) {
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
                    <Text style={styles.screenTitleText}>FAQ</Text>

                    <View>
                        <View style={styles.questionContainer}>
                            <Text style={styles.questionText}>Is the car wash open on Sunday?</Text>
                            <Text style={styles.answerText}>Unfortunately, car washes are closed on Sunday.</Text>
                        </View>
                        <View style={styles.questionContainer}>
                            <Text style={styles.questionText}>Can I wash my car without a reservation?</Text>
                            <Text style={styles.answerText}>Yes, but there may be a queue.</Text>
                        </View>
                        <View style={styles.questionContainer}>
                            <Text style={styles.questionText}>Do regular customers get discounts?</Text>
                            <Text style={styles.answerText}>Yes, we also recommend our passes.</Text>
                        </View>
                        <View style={styles.questionContainer}>
                            <Text style={styles.questionText}>Can I pay in cash?</Text>
                            <Text style={styles.answerText}>Yes, you must choose the cash payment option.</Text>
                        </View>
                        <View style={styles.questionContainer}>
                            <Text style={styles.questionText}>Can you wash the car yourself ?</Text>
                            <Text style={styles.answerText}>Yes, we have special self-service stations.</Text>
                        </View>
                    </View>

                </View>


            </View>
        </Container >
    );
}

export default FAQScreen;

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
    questionContainer: {
        width: (windowWidth > 380 ? 340 : 320),
        height: (windowWidth > 380 ? 100 : 80),
        backgroundColor: '#D5EAF2',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginTop: 20,
    },
    questionText: {
        fontSize: 16,
    },
    answerText: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
});