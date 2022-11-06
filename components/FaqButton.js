import { StyleSheet, View, Text, Dimensions } from "react-native";
import SvgComponent from "./SvgComponent";

function FaqButton() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>FAQ</Text>
            <SvgComponent style={{ width: 10, height: 5 }} />
        </View>
    );
}

export default FaqButton;

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D5EAF2',
        width: (windowWidth > 380 ? 340 : 300),
        height: (windowWidth > 380 ? 190 : 150),
        borderRadius: 30,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 40,
        marginBottom: 50
    }
});