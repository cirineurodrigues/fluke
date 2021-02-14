import React from 'react';
import {StyleSheet} from 'react-native';
import {ProgressCircle} from 'react-native-svg-charts';

const Progress = ({used, total}) => {
  return (
    <ProgressCircle
      style={styles.circle}
      progress={used / total}
      progressColor={'#fff'}
      backgroundColor={'#5CC956'}
    />
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 220,
    height: 220,
  },
});

export default Progress;
