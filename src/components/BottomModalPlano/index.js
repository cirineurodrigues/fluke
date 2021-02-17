import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Modalize} from 'react-native-modalize';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useSelector} from 'react-redux';

import Available from '../Available';

const BottomModalPlano = ({navigation}) => {
  const invoice = useSelector((state) => state.user.invoice);

  let data = invoice.reduce((acc, cur) => acc + cur.data, 0);
  let minutes = invoice.reduce((acc, cur) => acc + cur.minutes, 0);
  let sms = invoice.reduce((acc, cur) => acc + cur.sms, 0);
  let total = (data * 9.98 + minutes * 0.1 + sms * 0.1 + 2).toFixed(2);

  return (
    <Modalize alwaysOpen={70} handleStyle={styles.handleStyle}>
      <View style={styles.container}>
        <Text style={styles.title}>meu pacote</Text>
        <View style={styles.infoContainer}>
          <Available name="dados móveis" total={data} service="gb">
            <MaterialCommunityIcons
              name="swap-vertical"
              size={26}
              color="#b7b7b7"
              style={{marginRight: 5}}
            />
          </Available>
          <Available name="minutos" total={minutes} service="min">
            <MaterialCommunityIcons
              name="phone"
              size={26}
              color="#b7b7b7"
              style={{marginRight: 5}}
            />
          </Available>
          <Available name="sms" total={sms} service="sms">
            <MaterialCommunityIcons
              name="message-bulleted"
              size={26}
              color="#b7b7b7"
              style={{marginRight: 5}}
            />
          </Available>
          <View style={styles.totalPriceContainer}>
            <Text style={styles.subscription}>+ assinatura R$2.00</Text>
            <View style={styles.totalPrice}>
              <View style={styles.info}>
                <MaterialIcons name="attach-money" size={26} color="#b7b7b7" />
                <Text style={styles.text}>preço total</Text>
              </View>
              <View>
                <Text style={styles.text}>
                  R$<Text style={styles.total}>{total}</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Buy');
          }}>
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
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor: '#FAF8FA',
    width: '90%',
    marginLeft: '5%',
    marginBottom: 20,
  },
  totalPriceContainer: {
    borderTopWidth: 0.5,
    borderTopColor: '#b7b7b7',
  },
  subscription: {
    fontSize: 15,
    textAlign: 'right',
    marginRight: '5%',
    marginTop: 10,
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
    fontSize: 30,
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
