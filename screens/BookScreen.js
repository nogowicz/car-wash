import { StyleSheet, View, Text, TouchableOpacity, FlatList } from "react-native";
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import SelectList from 'react-native-dropdown-select-list';
import DateSelect from "../components/DateSelect";
import { useState } from "react";
import TimeSelect from "../components/TimeSelect";

function BookScreen({ navigation }) {
    const [selected, setSelected] = useState('Standard Cleaning');

    const options = [
        { key: '0', value: 'Standard Washing' },
        { key: '1', value: 'Washing and vacuuming' },
        { key: '2', value: 'Vacuuming' },
        { key: '3', value: 'Comprehensive washing' },
        { key: '4', value: 'Washing the seats' },
    ];

    const calendar = [
        { key: '1', value: 'Sunday' },
        { key: '2', value: 'Monday' },
        { key: '3', value: 'Tuesday' },
        { key: '4', value: 'Wednesday' },
        { key: '5', value: 'Thursday' },
        { key: '6', value: 'Friday' },
        { key: '7', value: 'Saturday' },
        { key: '8', value: 'Sunday' },
        { key: '9', value: 'Monday' },
        { key: '10', value: 'Tuesday' },
        { key: '11', value: 'Wednesday' },
        { key: '12', value: 'Thursday' },
        { key: '13', value: 'Friday' },
        { key: '14', value: 'Saturday' },
        { key: '15', value: 'Sunday' },
        { key: '16', value: 'Monday' },
        { key: '17', value: 'Tuesday' },
        { key: '18', value: 'Wednesday' },
        { key: '19', value: 'Thursday' },
        { key: '20', value: 'Friday' },
        { key: '21', value: 'Saturday' },
        { key: '22', value: 'Sunday' },
        { key: '23', value: 'Monday' },
        { key: '24', value: 'Tuesday' },
        { key: '25', value: 'Wednesday' },
        { key: '26', value: 'Thursday' },
        { key: '27', value: 'Friday' },
        { key: '28', value: 'Saturday' },
        { key: '29', value: 'Sunday' },
        { key: '30', value: 'Monday' },
        { key: '31', value: 'Tuesday' },
    ];

    const time = [
        { key: '1', value: '8:00' },
        { key: '2', value: '8:15' },
        { key: '3', value: '8:30' },
        { key: '4', value: '8:45' },
        { key: '5', value: '9:00' },
        { key: '', value: '9:15' },
        { key: '7', value: '9:30' },
        { key: '8', value: '9:45' },
        { key: '9', value: '10:00' },
        { key: '10', value: '10:15' },
        { key: '11', value: '10:30' },
        { key: '12', value: '10:45' },
        { key: '13', value: '11:00' },
        { key: '14', value: '11:15' },
        { key: '15', value: '11:30' },
        { key: '16', value: '11:45' },
        { key: '17', value: '12:00' },
        { key: '18', value: '12:15' },
        { key: '19', value: '12:30' },
        { key: '20', value: '12:45' },
        { key: '21', value: '13:00' },
        { key: '22', value: '13:15' },
        { key: '23', value: '13:30' },
        { key: '24', value: '13:45' },
        { key: '25', value: '14:00' },
        { key: '26', value: '14:15' },
        { key: '27', value: '14:30' },
        { key: '28', value: '14:45' },
        { key: '29', value: '15:00' },
        { key: '30', value: '15:15' },
        { key: '31', value: '15:30' },
        { key: '32', value: '15:45' },
    ];


    return (
        <View style={styles.container}>
            <View style={styles.theme}>
                <View style={[styles.ellipse]} />
                <View style={[styles.ellipse, { top: -100, left: -100 }]} />
            </View>
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
            <View style={styles.logo}>
                <FontAwesome5 name="car-alt" size={50} color="#4563BF" />
                <Text style={[styles.title]}>Car Wash</Text>
            </View>
            <View style={styles.screenTitle}>
                <Text style={styles.screenTitleText}>Book Details</Text>
            </View>


            <View style={styles.buttonContainer}>
                <SelectList
                    setSelected={setSelected}
                    data={options}
                    search={false}
                    boxStyles={styles.button}
                    dropdownStyles={styles.dropdown}
                    dropdownTextStyles={{ color: '#FFF', fontWeight: 'bold', fontSize: 13 }}
                    inputStyles={{ color: '#FFF', fontWeight: 'bold', fontSize: 20 }}
                    placeholder={selected}
                    arrowicon={<Ionicons name="md-arrow-down-sharp" size={22} color="#fff" />}

                />
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Date of the visit</Text>
            </View>

            <View style={styles.dateSelection}>
                <Text style={styles.monthText}>May 2022</Text>
                <FlatList
                    data={calendar}
                    renderItem={(itemData) => <DateSelect day={itemData.item.key} dayName={itemData.item.value} />}
                    keyExtractor={(item, index) => {
                        return item.key;
                    }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Time of the visit</Text>
            </View>

            <View style={styles.dateSelection}>
                <FlatList
                    data={time}
                    renderItem={(itemData) => <TimeSelect hour={itemData.item.value} />}
                    keyExtractor={(item, index) => {
                        return item.key;
                    }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>


        </View>
    );
}

export default BookScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1
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
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4563BF',
    },
    screenTitle: {
        marginTop: 20,
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
        marginTop: 50
    },
    theme: {
        top: '-5%',
        right: '60%',
        position: 'absolute'
    },
    logo: {
        alignItems: 'center',
        marginTop: 10
    },
    button: {
        width: 320,
        height: 100,
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
    section: {
        marginTop: 20,
        backgroundColor: '#D5EAF2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sectionTitle: {
        fontWeight: '800',
        fontSize: 14
    },
    dateSelection: {
        marginTop: 10,
        alignItems: 'center'
    },
    monthText: {
        fontWeight: '800',
        fontSize: 14,
        marginBottom: 10,
    },



});