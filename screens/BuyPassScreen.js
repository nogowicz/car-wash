import { StyleSheet, View, Text, TouchableOpacity, FlatList, Dimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import SelectList from 'react-native-dropdown-select-list';
import DateSelect from "../components/DateSelect";
import { useEffect, useState } from "react";

import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import SummaryPassBox from "../components/SummaryPassBox";
import { setPrice } from "../store/redux/price";

function BuyPassScreen({ navigation }) {
    const [selected, setSelected] = useState(0);
    const [calendarStartData, setCalendarStartData] = useState();

    const [selectedDateStartId, setSelectedDateStartId] = useState(5);
    const price = useSelector((state) => state.price.price);
    const dispatch = useDispatch();



    const options = [
        { key: '0', value: 'Standard Package', price: 10 },
        { key: '1', value: 'Silver Package', price: 15 },
        { key: '2', value: 'Gold Package', price: 20 },
        { key: '3', value: 'Diamond Package', price: 25 },
        { key: '4', value: 'Platinum Package', price: 30 },
    ];

    const calendarStart = [
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




    useEffect(() => {
        calendarStart[5 - 1].selected = true;
    }, []);

    useEffect(() => {
        setCalendarStartData(calendarStart)
    }, [setCalendarStartData])



    function onDatePress(day, booked, selected) {
        if (!selected) {
            if (!booked) {
                calendarStart[day - 1].selected = true;
                setCalendarStartData(calendarStart);
                setSelectedDateStartId(day);
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
                    <Text style={styles.screenTitleText}>Pass Details</Text>
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
                    <Text style={styles.sectionTitle}>Start</Text>
                </View>

                <View style={styles.dateSelection}>
                    <Text style={styles.monthText}>May 2022</Text>
                    <FlatList
                        data={calendarStartData}
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



                <View style={styles.summaryContainer}>
                    <SummaryPassBox
                        selected={options[selected].value}
                        price={options[selected].price}
                        selectedDateId={selectedDateStartId}
                        paymentPress={() => {
                            dispatch(setPrice({ price: options[selected].price }))
                            navigation.navigate('PaymentScreen')
                        }}
                    />
                </View>

            </View>
        </Container>

    );
}

export default BuyPassScreen;

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
        marginTop: 50,
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
        marginTop: 50,
    },


});