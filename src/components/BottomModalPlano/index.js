import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Modalize} from 'react-native-modalize';

const BottomModalPlano = () => {
  return (
    <Modalize alwaysOpen={70} handleStyle={styles.handleStyle}>
      <View style={styles.container}>
        <Text style={styles.title}>meu pacote</Text>
      </View>
    </Modalize>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1,
  },
  handleStyle: {
    top: 30,
    backgroundColor: '#b7b7b7',
  },
});

export default BottomModalPlano;
