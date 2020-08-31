import React from 'react';
import { Text, FlatList, TouchableOpacity, StyleSheet, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ItemCompany from './ItemCompany';
import HotCompanies from '../components/HotCompanies';

const SearchResults = ({ searchResults }) => {
  const navigation = useNavigation();
  return (
    <>
      <Text style={styles.subtitle}>Search results: </Text>
      {searchResults.length > 0 ?
        < FlatList
          style={styles.flatlist}
          data={searchResults}
          keyExtractor={(item) => item["1. symbol"]}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('Detail', { ticker: item["1. symbol"], name: item["2. name"] })}>
                <ItemCompany companyInfo={item} />
              </TouchableOpacity>
            );
          }}
          ListFooterComponent={HotCompanies}
        />
        :
        <Text>Nothing found. Try with a different search term.</Text>
      }
    </>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
  },
  flatlist: {
    marginBottom: 40
  }
});

export default SearchResults;