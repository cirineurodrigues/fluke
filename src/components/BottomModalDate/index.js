import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Modalize} from 'react-native-modalize';
import DatePicker from 'react-native-date-picker';

const BottomModalDate = ({modalizeRef, title, date, setDate}) => {
  const closeModal = () => {
    !modalizeRef.current?.close();
  };

  return (
    <Modalize
      ref={modalizeRef}
      modalHeight={350}
      handleStyle={styles.handleStyle}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <DatePicker
          date={date}
          mode={'date'}
          minimumDate={new Date('2020-02-29')}
          maximumDate={new Date('2020-08-22')}
          onDateChange={setDate}
        />
        <TouchableOpacity style={styles.button} onPress={closeModal}>
          <Text style={styles.buttonText}>ok</Text>
        </TouchableOpacity>
      </View>
    </Modalize>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 350,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  title: {
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1,
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
  handleStyle: {
    top: 30,
    backgroundColor: '#b7b7b7',
  },
});

export default BottomModalDate;
