import React from 'react';
import {StyleSheet} from 'react-native';
import {ProgressCircle} from 'react-native-svg-charts';

const Progress = ({used, total}) => {
  return (
    <ProgressCircle
      style={styles.circle}
      progress={used / total}
      progressColor={'#fff'}
      backgroundColor={'#4fe045'}
    />
  );
};

const styles = StyleSheet.create({
  circle: {
    width: '80%',
    height: '80%',
  },
});

export default Progress;
