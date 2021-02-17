import React from 'react';
import {StyleSheet} from 'react-native';
import {BarChart, Grid} from 'react-native-svg-charts';

const fill = '#6be965';

const Chart = ({records}) => {
  return (
    <BarChart
      style={styles.chart}
      data={records}
      svg={{fill}}
      contentInset={{top: 30, bottom: 30}}>
      <Grid />
    </BarChart>
  );
};

const styles = StyleSheet.create({
  chart: {
    width: '100%',
    height: '60%',
  },
});

export default Chart;
