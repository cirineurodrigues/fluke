import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {
  postPurchaseThunk,
  getPackageInfoThunk,
  getUsageThunk,
  getInvoiceThunk,
} from '../../store/modules/user/thunk';

import BuyDetails from '../../components/BuyDetails';

const BuyScreen = ({navigation}) => {
  const [data, setData] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [sms, setSms] = useState(0);

  const dispatch = useDispatch();

  const email = useSelector((state) => state.user.email);

  const dataPayload = {
    data,
    minutes,
  };

  const invoice = {
    data,
    minutes,
    sms,
  };

  const addData = () => {
    return setData(data + 0.5);
  };

  const subData = () => {
    if (data > 0) {
      return setData(data - 0.5);
    }
  };

  const addMinutes = () => {
    return setMinutes(minutes + 30);
  };

  const subMinutes = () => {
    if (minutes > 0) {
      return setMinutes(minutes - 30);
    }
  };

  const addSms = () => {
    return setSms(sms + 10);
  };

  const subSms = () => {
    if (sms > 0) {
      return setSms(sms - 10);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="chevron-left" size={45} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>comprar mais</Text>
      </View>
      <View style={styles.detailsContainer}>
        <BuyDetails
          name={'dados moveis(gb)'}
          price={9.98}
          qtd={data}
          add={addData}
          sub={subData}
          fixed>
          <MaterialCommunityIcons
            name="swap-vertical"
            size={26}
            color="#b7b7b7"
            style={{marginRight: 5}}
          />
        </BuyDetails>
        <BuyDetails
          name={'minutos'}
          price={0.1}
          qtd={minutes}
          add={addMinutes}
          sub={subMinutes}>
          <MaterialCommunityIcons
            name="phone"
            size={26}
            color="#b7b7b7"
            style={{marginRight: 5}}
          />
        </BuyDetails>
        <BuyDetails
          name={'sms'}
          price={0.1}
          qtd={sms}
          add={addSms}
          sub={subSms}>
          <MaterialCommunityIcons
            name="message-bulleted"
            size={26}
            color="#b7b7b7"
            style={{marginRight: 5}}
          />
        </BuyDetails>
        <View style={styles.totalPrice}>
          <View style={styles.info}>
            <MaterialIcons name="attach-money" size={26} color="#b7b7b7" />
            <Text style={styles.text}>preço total</Text>
          </View>
          <View>
            <Text style={styles.text}>
              R$
              <Text style={styles.total}>
                {(data * 9.98 + minutes * 0.1 + sms * 0.1).toFixed(2)}
              </Text>
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buyButton}
            onPress={() => {
              dispatch(postPurchaseThunk(email, JSON.stringify(dataPayload)));
              dispatch(getUsageThunk(email, '2020-08-14', '2020-08-21'));
              dispatch(getInvoiceThunk(invoice));
              dispatch(getPackageInfoThunk(email, navigation));
            }}>
            <Text style={styles.buttonText}>comprar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#b7b7b7',
  },
  header: {
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  button: {
    position: 'absolute',
    left: 10,
  },
  detailsContainer: {
    width: '90%',
    height: '90%',
    marginLeft: '5%',
  },
  totalPrice: {
    width: '80%',
    height: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '10%',
  },
  text: {
    fontSize: 20,
  },
  info: {
    flexDirection: 'row',
  },
  total: {
    fontSize: 30,
  },
  buttonContainer: {
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyButton: {
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

export default BuyScreen;
