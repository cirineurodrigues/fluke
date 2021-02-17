import React from 'react';
import {View} from 'react-native';

import Header from '../../components/Header';
import DataInfo from '../../components/DataInfo';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Header />
      <DataInfo navigation={navigation} />
    </View>
  );
};

export default HomeScreen;
