import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Progress from '../Progress';
import BottomModalPlano from '../BottomModalPlano';

import {Container, Content} from './styles';

const DataInfo = ({navigation}) => {
  const [isData, setIsData] = useState(true);
  const info = useSelector((state) => state.user.packageInformation);
  const dataTotal = info.data.subscription + info.data.topup;
  const dataUsed =
    info.data.subscription + info.data.topup - info.data.available;
  const minutesTotal = info.minutes.subscription + info.minutes.available;
  const minutesUsed =
    info.minutes.subscription + info.minutes.topup - info.minutes.available;

  return (
    <Container>
      <Text style={styles.title}>meus {isData ? 'dados' : 'minutos'}</Text>
      <Content>
        <View style={styles.chart}>
          <Progress
            used={isData ? dataUsed : minutesUsed}
            total={isData ? dataTotal : minutesTotal}
          />
          <View style={styles.data}>
            <Text style={styles.usage}>
              {isData
                ? (info.data.available / 1000).toFixed(2)
                : info.minutes.available}
              <Text style={styles.text}>{isData ? 'gb' : 'min'}</Text>
            </Text>
            <Text style={styles.text}>disponíveis</Text>
          </View>
        </View>
        <Text style={styles.text}>
          de {isData ? (dataTotal / 1000).toFixed(2) : minutesTotal}{' '}
          {isData ? 'gb' : 'min'}
        </Text>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => setIsData(!isData)}>
          {isData ? (
            <MaterialCommunityIcons
              name="swap-vertical"
              size={40}
              color="#fff"
            />
          ) : (
            <MaterialCommunityIcons name="phone" size={40} color="#fff" />
          )}
        </TouchableOpacity>
      </Content>
      <BottomModalPlano navigation={navigation} />
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  chart: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  data: {
    position: 'absolute',
  },
  usage: {
    fontSize: 60,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
  icon: {
    bottom: 25,
    right: 25,
    position: 'absolute',
  },
});

export default DataInfo;
