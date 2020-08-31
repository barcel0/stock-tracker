import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const CompanyData = ({ companyData }) => {

  const setDataColor = value => {
    if (value) {
      value = value.replace('%', '');
      if (value > 0) {
        return <Text style={styles.dataContent, styles.positive}>{value}</Text>;
      } else if (value < 0) {
        return <Text style={styles.dataContent, styles.negative}>{value}</Text>;
      } else {
        return <Text style={styles.dataContent}>{value}</Text>;
      }
    }
  }

  return companyData ?
    <View style={styles.container}>
      <View style={styles.dataColumn}>
        <View style={styles.dataRow}>
          <Text style={styles.dataTitle}>Price</Text>
          <Text style={styles.dataContent}>{companyData["05. price"]}</Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.dataTitle}>Open</Text>
          <Text style={styles.dataContent}>{companyData["02. open"]}</Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.dataTitle}>High</Text>
          <Text style={styles.dataContent}>{companyData["03. high"]}</Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.dataTitle}>Low</Text>
          <Text style={styles.dataContent}>{companyData["04. low"]}</Text>
        </View>
      </View>

      <View style={styles.dataColumn}>
        <View style={styles.dataRow}>
          <Text style={styles.dataTitle}>Change %</Text>
          {setDataColor(companyData["10. change percent"])}
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.dataTitle}>Change</Text>
          {setDataColor(companyData["09. change"])}
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.dataTitle}>Volume</Text>
          <Text style={styles.dataContent}>{companyData["06. volume"]}</Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.dataTitle}>Prev Close</Text>
          <Text style={styles.dataContent}>{companyData["08. previous close"]}</Text>
        </View>
      </View>

    </View>
    : null
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 5,
  },
  dataColumn: {
    width: '45%',
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingVertical: 5,

  },
  dataTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#a5a8b1'
  },
  dataContent: {
    justifyContent: 'flex-end',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#5da5ed'
  },
  positive: {
    color: '#5fce89',
    fontWeight: 'bold',
  },
  negative: {
    color: 'red',
    fontWeight: 'bold',
  }
});

export default CompanyData;