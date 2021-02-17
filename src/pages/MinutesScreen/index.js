import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import DatePicker from 'react-native-datepicker';

import Chart from '../../components/Chart';

const DataScreen = () => {
  const [startDate, setStartDate] = useState('2020-08-14');
  const [endDate, setEndDate] = useState('2020-08-21');
  const dates = useSelector((state) => state.user.usage);

  const records = dates.map((cur) => cur.voice);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>consumo de minutos</Text>
        <Text style={styles.subtitle}>(minutos)</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.dateContainer}>
          <DatePicker
            style={styles.datePicker}
            date={startDate}
            mode="date"
            placeholder="data inicial"
            format="YYYY-MM-DD"
            minDate="2020-02-28"
            maxDate="2020-08-21"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={false}
            onDateChange={(date) => {
              () => setStartDate(date);
            }}
          />
          <DatePicker
            style={styles.datePicker}
            date={endDate}
            mode="date"
            placeholder="data final"
            format="YYYY-MM-DD"
            minDate="2020-02-28"
            maxDate="2020-08-21"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={false}
            onDateChange={(date) => {
              () => setEndDate(date);
            }}
          />
        </View>
        <Chart records={records} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>visualizar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  titleContainer: {
    width: '90%',
    height: '10%',
    justifyContent: 'space-around',
    marginLeft: '5%',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 20,
  },
  content: {
    width: '90%',
    height: '90%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginLeft: '5%',
  },
  dateContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  datePicker: {
    width: '49%',
  },
  button: {
    width: '60%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#6be965',
  },
  buttonText: {
    fontSize: 20,
  },
});

export default DataScreen;
