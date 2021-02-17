import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BuyDetails = ({children, name, price, qtd, add, sub, fixed = false}) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        {children}
        <View>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.price}>R${(qtd * price).toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={sub}>
          <MaterialCommunityIcons
            name="minus-circle-outline"
            size={20}
            color="#b7b7b7"
          />
        </TouchableOpacity>
        <Text style={styles.qtd}>{fixed ? qtd.toFixed(1) : qtd}</Text>
        <TouchableOpacity onPress={add}>
          <MaterialCommunityIcons
            name="plus-circle-outline"
            size={20}
            color="#6be965"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '5%',
    borderBottomWidth: 0.5,
    borderBottomColor: '#b7b7b7',
  },
  info: {
    width: '65%',
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
  },
  qtd: {
    fontSize: 30,
    textDecorationLine: 'underline',
  },
  price: {
    color: '#b7b7b7',
  },
  buttonContainer: {
    width: '35%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default BuyDetails;
