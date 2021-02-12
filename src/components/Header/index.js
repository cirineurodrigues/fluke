import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Container} from './styles';

const Header = () => {
  return (
    <Container>
      <View style={styles.circle} />
      <Text style={styles.fluke}>fluke</Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 18,
    height: 18,
    marginRight: 5,
    borderRadius: 50,
    backgroundColor: '#6be965',
  },
  fluke: {
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default Header;
