import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getUsageThunk} from '../../store/modules/user/thunk';
import moment from 'moment';

import Chart from '../../components/Chart';
import BottomModalDate from '../../components/BottomModalDate';

const MinutesScreen = () => {
  const modalizeRefStart = useRef(null);
  const modalizeRefEnd = useRef(null);

  const [startDate, setStartDate] = useState(new Date('2020-02-28'));
  const [endDate, setEndDate] = useState(new Date('2020-08-21'));
  const dates = useSelector((state) => state.user.usage);
  const email = useSelector((state) => state.user.email);

  const dispatch = useDispatch();

  const records = dates.map((cur) => cur.voice, 0);

  const openModalStart = () => {
    modalizeRefStart.current?.open();
  };

  const openModalEnd = () => {
    modalizeRefEnd.current?.open();
  };

  let formatedStartDate = moment(startDate).format('YYYY-MM-DD');
  let formatedEndDate = moment(endDate).format('YYYY-MM-DD');

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>consumo de minutos</Text>
        <Text style={styles.subtitle}>(min)</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.dateContainer}>
          <TouchableOpacity style={styles.dateButton} onPress={openModalStart}>
            <Text style={styles.dateButtonText}>Start Date</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dateButton} onPress={openModalEnd}>
            <Text style={styles.dateButtonText}>End Date</Text>
          </TouchableOpacity>
        </View>
        <Chart records={records} />
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() =>
              dispatch(getUsageThunk(email, formatedStartDate, formatedEndDate))
            }>
            visualizar
          </Text>
        </TouchableOpacity>
      </View>
      <BottomModalDate
        modalizeRef={modalizeRefStart}
        title="Selecione a data inicial"
        date={startDate}
        setDate={setStartDate}
      />
      <BottomModalDate
        modalizeRef={modalizeRefEnd}
        title="Selecione a data final"
        date={endDate}
        setDate={setEndDate}
      />
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
  dateButton: {
    width: '45%',
    height: 50,
    borderColor: '#6be965',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateButtonText: {
    fontSize: 20,
    color: '#6be965',
  },
  buttonText: {
    fontSize: 20,
  },
});

export default MinutesScreen;
