import { StyleSheet, View, Text, TouchableOpacity, FlatList, Dimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import SelectList from 'react-native-dropdown-select-list';
import DateSelect from "../components/DateSelect";
import { useEffect, useState } from "react";
import TimeSelect from "../components/TimeSelect";
import SummaryBox from "../components/SummaryBox";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { setPrice } from "../store/redux/price";

function BookScreen({ navigation }) {
    const [selected, setSelected] = useState(0);
    const [calendarData, setCalendarData] = useState();
    const [timeData, setTimeData] = useState();
    const [selectedDateId, setSelectedDateId] = useState(5);
    const [selectedTimeId, setSelectedTimeId] = useState(3);
    const dispatch = useDispatch();



    const options = [
        { key: '0', value: 'Standard Washing', price: 3 },
        { key: '1', value: 'Washing and vacuuming', price: 6 },
        { key: '2', value: 'Vacuuming', price: 2 },
        { key: '3', value: 'Comprehensive washing', price: 15 },
        { key: '4', value: 'Washing the seats', price: 12 },
    ];

    const calendar = [
        { key: '1', value: 'Sunday', booked: false, selected: false },
        { key: '2', value: 'Monday', booked: false, selected: false },
        { key: '3', value: 'Tuesday', booked: false, selected: false },
        { key: '4', value: 'Wednesday', booked: false, selected: false },
        { key: '5', value: 'Thursday', booked: false, selected: false },
        { key: '6', value: 'Friday', booked: false, selected: false },
        { key: '7', value: 'Saturday', booked: false, selected: false },
        { key: '8', value: 'Sunday', booked: false, selected: false },
        { key: '9', value: 'Monday', booked: false, selected: false },
        { key: '10', value: 'Tuesday', booked: false, selected: false },
        { key: '11', value: 'Wednesday', booked: false, selected: false },
        { key: '12', value: 'Thursday', booked: false, selected: false },
        { key: '13', value: 'Friday', booked: false, selected: false },
        { key: '14', value: 'Saturday', booked: false, selected: false },
        { key: '15', value: 'Sunday', booked: false, selected: false },
        { key: '16', value: 'Monday', booked: false, selected: false },
        { key: '17', value: 'Tuesday', booked: false, selected: false },
        { key: '18', value: 'Wednesday', booked: false, selected: false },
        { key: '19', value: 'Thursday', booked: false, selected: false },
        { key: '20', value: 'Friday', booked: false, selected: false },
        { key: '21', value: 'Saturday', booked: false, selected: false },
        { key: '22', value: 'Sunday', booked: false, selected: false },
        { key: '23', value: 'Monday', booked: false, selected: false },
        { key: '24', value: 'Tuesday', booked: false, selected: false },
        { key: '25', value: 'Wednesday', booked: false, selected: false },
        { key: '26', value: 'Thursday', booked: false, selected: false },
        { key: '27', value: 'Friday', booked: false, selected: false },
        { key: '28', value: 'Saturday', booked: false, selected: false },
        { key: '29', value: 'Sunday', booked: false, selected: false },
        { key: '30', value: 'Monday', booked: false, selected: false },
        { key: '31', value: 'Tuesday', booked: false, selected: false },
    ];

    const time = [
        { key: '1', value: '8:00', booked: false, selected: false },
        { key: '2', value: '8:15', booked: false, selected: false },
        { key: '3', value: '8:30', booked: false, selected: false },
        { key: '4', value: '8:45', booked: false, selected: false },
        { key: '5', value: '9:00', booked: false, selected: false },
        { key: '', value: '9:15', booked: false, selected: false },
        { key: '7', value: '9:30', booked: false, selected: false },
        { key: '8', value: '9:45', booked: false, selected: false },
        { key: '9', value: '10:00', booked: false, selected: false },
        { key: '10', value: '10:15', booked: false, selected: false },
        { key: '11', value: '10:30', booked: false, selected: false },
        { key: '12', value: '10:45', booked: false, selected: false },
        { key: '13', value: '11:00', booked: false, selected: false },
        { key: '14', value: '11:15', booked: false, selected: false },
        { key: '15', value: '11:30', booked: false, selected: false },
        { key: '16', value: '11:45', booked: false, selected: false },
        { key: '17', value: '12:00', booked: false, selected: false },
        { key: '18', value: '12:15', booked: false, selected: false },
        { key: '19', value: '12:30', booked: false, selected: false },
        { key: '20', value: '12:45', booked: false, selected: false },
        { key: '21', value: '13:00', booked: false, selected: false },
        { key: '22', value: '13:15', booked: false, selected: false },
        { key: '23', value: '13:30', booked: false, selected: false },
        { key: '24', value: '13:45', booked: false, selected: false },
        { key: '25', value: '14:00', booked: false, selected: false },
        { key: '26', value: '14:15', booked: false, selected: false },
        { key: '27', value: '14:30', booked: false, selected: false },
        { key: '28', value: '14:45', booked: false, selected: false },
        { key: '29', value: '15:00', booked: false, selected: false },
        { key: '30', value: '15:15', booked: false, selected: false },
        { key: '31', value: '15:30', booked: false, selected: false },
        { key: '32', value: '15:45', booked: false, selected: false },
    ];

    useEffect(() => {
        calendar[5 - 1].selected = true;
        time[3 - 1].selected = true;
    }, []);

    useEffect(() => {
        setCalendarData(calendar)
    }, [setCalendarData])

    useEffect(() => {
        setTimeData(time)
    }, [setTimeData])

    function onDatePress(day, booked, selected) {
        if (!selected) {
            if (!booked) {
                calendar[day - 1].selected = true;
                setCalendarData(calendar);
                setSelectedDateId(day);
            }
        }
    }

    function onTimePress(id, booked, selected) {
        if (!selected) {
            if (!booked) {
                time[id - 1].selected = true;
                setTimeData(time);
                setSelectedTimeId(id);
            }
        }
    }


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
                        placeholder={options[selected].value}
                        arrowicon={<Ionicons name="md-arrow-down-sharp" size={22} color="#fff" />}

                    />
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Date of the visit</Text>
                </View>

                <View style={styles.dateSelection}>
                    <Text style={styles.monthText}>May 2022</Text>
                    <FlatList
                        data={calendarData}
                        renderItem={(itemData) =>
                            <DateSelect
                                day={itemData.item.key}
                                dayName={itemData.item.value}
                                booked={itemData.item.booked}
                                selected={itemData.item.selected}
                                onDatePress={() => onDatePress(itemData.item.key, itemData.item.booked, itemData.item.selected)}
                            />}
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
                        data={timeData}
                        renderItem={(itemData) =>
                            <TimeSelect
                                hour={itemData.item.value}
                                booked={itemData.item.booked}
                                selected={itemData.item.selected}
                                onTimePress={() => onTimePress(itemData.item.key, itemData.item.booked, itemData.item.selected)}
                            />}
                        keyExtractor={(item, index) => {
                            return item.key;
                        }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

                <View style={styles.summaryContainer}>
                    <SummaryBox
                        selectedDateId={selectedDateId}
                        hour={time[selectedTimeId - 1].value}
                        hourAfter={time[selectedTimeId - 1].value != '15:45' ? time[selectedTimeId].value : '16:00'}
                        paymentPress={() => {
                            dispatch(setPrice({ price: options[selected].price }))
                            navigation.navigate('PaymentScreen')
                        }}
                        selected={options[selected].value}
                        price={options[selected].price}
                    />
                </View>

            </View>
        </Container>

    );
}

export default BookScreen;

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
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
        alignItems: 'center',

    },
    monthText: {
        fontWeight: '800',
        fontSize: 14,
        marginBottom: 10,
    },

    summaryContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },


});