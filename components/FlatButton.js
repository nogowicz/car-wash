import {
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';

function FlatButton({ onPress, text }) {
    return (
        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={onPress}>
            <Text style={styles.signUpText}>{text}</Text>
        </TouchableOpacity>
    );
}

export default FlatButton;

const styles = StyleSheet.create({
    signUpText: {
        fontSize: 15,
        fontWeight: 'bold',
    },
});