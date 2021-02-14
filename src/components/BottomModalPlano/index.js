import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Modalize} from 'react-native-modalize';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import Available from '../Available';

const BottomModalPlano = () => {
  return (
    <Modalize alwaysOpen={70} handleStyle={styles.handleStyle}>
      <View style={styles.container}>
        <Text style={styles.title}>meu pacote</Text>
        <Available name="dados móveis" total={0} service="gb">
          <MaterialCommunityIcons
            name="swap-vertical"
            size={26}
            color="#b7b7b7"
            style={{marginRight: 5}}
          />
        </Available>
        <Available name="minutos" total={0} service="min">
          <MaterialCommunityIcons
            name="phone"
            size={26}
            color="#b7b7b7"
            style={{marginRight: 5}}
          />
        </Available>
        <Available name="sms" total={10} service="sms">
          <MaterialCommunityIcons
            name="message-bulleted"
            size={26}
            color="#b7b7b7"
            style={{marginRight: 5}}
          />
        </Available>
        <Text style={styles.subscription}>+ assinatura R$2.00</Text>
        <View style={styles.totalPrice}>
          <View style={styles.info}>
            <MaterialIcons name="attach-money" size={26} color="#b7b7b7" />
            <Text style={styles.text}>preço total</Text>
          </View>
          <View>
            <Text style={styles.text}>
              R$<Text style={styles.total}>9.00</Text>
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>+ comprar mais</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.adjustButton}>
          <EvilIcons name="gear" size={26} color="#fff" />
          <Text style={styles.adjustText}>ajustar pacote</Text>
        </TouchableOpacity>
      </View>
    </Modalize>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1,
  },
  subscription: {
    fontSize: 15,
    textAlign: 'right',
    marginRight: '5%',
    marginBottom: 10,
  },
  totalPrice: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '5%',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
  },
  total: {
    fontSize: 40,
  },
  info: {
    flexDirection: 'row',
  },
  button: {
    width: '90%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '5%',
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#b7b7b7',
    borderRadius: 50,
  },
  adjustButton: {
    width: '90%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '5%',
    borderRadius: 50,
    backgroundColor: '#38C4E6',
  },
  adjustText: {
    fontSize: 20,
    color: '#fff',
  },
  handleStyle: {
    top: 30,
    backgroundColor: '#b7b7b7',
  },
});

export default BottomModalPlano;
