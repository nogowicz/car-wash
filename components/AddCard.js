import { StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { AntDesign } from '@expo/vector-icons';

function AddCard({ onAddCardPress }) {
    return (
        <TouchableOpacity onPress={onAddCardPress} style={styles.addCard}>
            <AntDesign name="plus" size={24} color="black" />
        </TouchableOpacity>
    );
}

export default AddCard;

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    addCard: {
        height: (windowWidth > 380 ? 169 : 133),
        width: (windowWidth > 380 ? 63 : 50),
        backgroundColor: '#fff',
        marginHorizontal: 10,
        borderRadius: 10,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },

});