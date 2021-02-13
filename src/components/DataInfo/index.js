import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Progress from '../Progress';
import BottomModalPlano from '../BottomModalPlano';

import {Container, Content} from './styles';

const DataInfo = () => {
  return (
    <Container>
      <Text style={styles.title}>meus dados</Text>
      <Content>
        <View style={styles.chart}>
          <Progress used={18.3} total={20} />
          <View style={styles.data}>
            <Text style={styles.usage}>
              18.3<Text style={styles.text}>gb</Text>
            </Text>
            <Text style={styles.text}>disponíveis</Text>
          </View>
        </View>
        <Text style={styles.text}>de 20 gb</Text>
      </Content>
      <BottomModalPlano />
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
