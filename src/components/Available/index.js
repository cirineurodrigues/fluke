import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Available = ({children, name, total, service}) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        {children}
        <Text style={styles.text}>{name}</Text>
      </View>
      <View>
        <Text style={styles.total}>
          {total} <Text style={styles.text}>{service}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '5%',
    marginBottom: 20,
  },
  info: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
  },
  total: {
    fontSize: 30,
  },
});

export default Available;
