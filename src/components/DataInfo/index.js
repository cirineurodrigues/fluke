import React from 'react';
import {Text, StyleSheet} from 'react-native';

import {Container, Content} from './styles';

const DataInfo = () => {
  return (
    <Container>
      <Text style={styles.text}>meus dados</Text>
      <Content></Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default DataInfo;
