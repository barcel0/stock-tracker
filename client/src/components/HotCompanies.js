import React from 'react';
import { Text, FlatList, TouchableOpacity, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ItemCompany from './ItemCompany';
import { FontAwesome5 } from '@expo/vector-icons';

const HotCompanies = ({ hotCompaniesList }) => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.sectionHeader}>
        <FontAwesome5 name="pepper-hot" size={16} color="black" />
        <Text style={styles.h1}>Hot Companies</Text>
      </View>
      <FlatList
        style={styles.flatlist}
        data={hotCompaniesList}
        keyExtractor={(item) => item["1. symbol"]}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Detail', { name: item["2. name"], ticker: item["1. symbol"] })}>
              <ItemCompany companyInfo={item} />
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    borderBottomWidth: 1,
    borderBottomColor: '#a5a8b1',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 4,
    marginTop: 20,
  },
  h1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#1e1e1e'
  },
  flatlist: {
    marginTop: 5
  }
});

HotCompanies.defaultProps = {
  hotCompaniesList: [
    {
      "1. symbol": "TXN",
      "2. name": "Texas Instruments Incorporated",
      "3. type": "Equity",
      "4. region": "United States",
      "5. marketOpen": "09:30",
      "6. marketClose": "16:00",
      "7. timezone": "UTC-05",
      "8. currency": "USD",
      "9. matchScore": "0.3333",
    },
    {
      "1. symbol": "BA",
      "2. name": "The Boeing Company",
      "3. type": "Equity",
      "4. region": "United States",
      "5. marketOpen": "09:30",
      "6. marketClose": "16:00",
      "7. timezone": "UTC-05",
      "8. currency": "USD",
      "9. matchScore": "0.8000",
    },
    {
      "1. symbol": "TSLA",
      "2. name": "Tesla Inc.",
      "3. type": "Equity",
      "4. region": "United States",
      "5. marketOpen": "09:30",
      "6. marketClose": "16:00",
      "7. timezone": "UTC-05",
      "8. currency": "USD",
      "9. matchScore": "0.8889",
    },
    {
      "1. symbol": "NFLX",
      "2. name": "Netflix Inc.",
      "3. type": "Equity",
      "4. region": "United States",
      "5. marketOpen": "09:30",
      "6. marketClose": "16:00",
      "7. timezone": "UTC-05",
      "8. currency": "USD",
      "9. matchScore": "0.7273",
    }
    ,
    {
      "1. symbol": "ADS.FRK",
      "2. name": "adidas AG",
      "3. type": "Equity",
      "4. region": "Frankfurt",
      "5. marketOpen": "08:00",
      "6. marketClose": "20:00",
      "7. timezone": "UTC+02",
      "8. currency": "EUR",
      "9. matchScore": "0.8000",
    },
  ]
}

export default HotCompanies;