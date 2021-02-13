import React from 'react';
import {View} from 'react-native';

import Formlogin from '../../components/FormLogin';

const LoginScreen = ({navigation}) => {
  return (
    <View>
      <Formlogin navigation={navigation} />
    </View>
  );
};

export default LoginScreen;
