import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import Progress from '../Progress';
import BottomModalPlano from '../BottomModalPlano';

import {Container, Content} from './styles';

const DataInfo = ({navigation}) => {
  const info = useSelector((state) => state.user.packageInformation);
  const dataTotal = info.data.subscription + info.data.topup;
  const dataUsed =
    info.data.subscription + info.data.topup - info.data.available;
  const minutesTotal = info.minutes.subscription + info.minutes.available;
  const minutesUsed =
    info.minutes.subscription + info.minutes.topup - info.minutes.available;

  return (
    <Container>
      <Text style={styles.title}>meus dados</Text>
      <Content>
        <View style={styles.chart}>
          <Progress used={dataUsed} total={dataTotal} />
          <View style={styles.data}>
            <Text style={styles.usage}>
              {(info.data.available / 1000).toFixed(2)}
              <Text style={styles.text}>gb</Text>
            </Text>
            <Text style={styles.text}>disponíveis</Text>
          </View>
        </View>
        <Text style={styles.text}>de {(dataTotal / 1000).toFixed(2)}gb</Text>
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
});

export default DataInfo;
