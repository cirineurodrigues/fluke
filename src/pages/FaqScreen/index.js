import React from 'react';
import {View, ScrollView, Text, StyleSheet, Dimensions} from 'react-native';

import AccordionFaq from '../../components/AccordionFaq';

const FaqScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.stipe} />
        <Text style={styles.headerText}>FAQ</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AccordionFaq />
      </ScrollView>
    </View>
  );
};

const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#6be965',
  },
  header: {
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  stipe: {
    width: 60,
    height: 10,
    backgroundColor: '#6be965',
    borderRadius: 50,
    position: 'absolute',
    top: 30,
    left: screenWidth / 2 - 19.5,
  },
});

export default FaqScreen;
