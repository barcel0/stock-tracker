import React from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const CompanyChart = ({ companyQuotes }) => {
  return (
    <View style={styles.container}>
      {companyQuotes.length > 0 ?
        <LineChart
          data={{
            legend: ['12 months performance'],
            datasets: [
              { data: companyQuotes }
            ]
          }}
          width={useWindowDimensions().width - 40} // from react-native
          height={180}
          chartConfig={{
            backgroundColor: "#f3c242",
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            color: (opacity = 1) => `rgba(243, 194, 66, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(51, 51, 51, ${opacity})`,
            propsForDots: {
            },
            fillShadowGradientOpacity: 0.5
          }}
          bezier
          style={{ borderRadius: 5 }}
        />
        : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10
  }
});

export default CompanyChart;