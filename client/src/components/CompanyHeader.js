import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CompanyHeader = ({ company }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{company.name}</Text>
      <Text style={styles.symbol}>{company.ticker}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5da5ed'
  },
  symbol: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e1e1e',
  },
})

export default CompanyHeader;