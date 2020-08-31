import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ItemCompany = ({ companyInfo }) => {
  return (
    <View style={styles.companyContainer}>
      <View style={styles.companyHeader}>
        <Text style={styles.name}>{companyInfo["2. name"]}</Text>
      </View>
      <View style={styles.companySubheader}>
        <Text style={styles.symbol}>{companyInfo["1. symbol"]}</Text>
        <View style={styles.infoRow}>
          <Text style={styles.info}>{companyInfo["3. type"]} - </Text>
          <Text style={styles.info}>{companyInfo["4. region"]} - </Text>
          <Text style={styles.info}>{companyInfo["8. currency"]}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  companyContainer: {
    backgroundColor: 'white',
    marginTop: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  companyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  companySubheader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoRow: {
    flexDirection: 'row'
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5da5ed'
  },
  symbol: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e1e1e',
  },
  info: {
    fontSize: 12,
    color: '#a5a8b1',
  }
});

export default ItemCompany;