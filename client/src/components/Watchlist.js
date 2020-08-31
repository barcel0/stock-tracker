import React from 'react';
import { Text, StyleSheet, FlatList, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Greetings from '../components/Greetings';
import { FontAwesome5 } from '@expo/vector-icons';

const Watchlist = ({ companyList, updateWatchlist }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {companyList && companyList.length > 0 ?
        <FlatList
          data={companyList}
          keyExtractor={(item) => item.ticker}
          ListHeaderComponent={Greetings}
          renderItem={({ item }) => {
            return (
              <View style={styles.watchlistRow}>
                <TouchableOpacity onPress={() => navigation.navigate('Detail', { ticker: item.ticker, name: item.name })} style={{ flex: 1 }}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.ticker}>{item.ticker}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => updateWatchlist(companyList, item, 'remove', navigation)}>
                  <FontAwesome5 name="trash-alt" size={18} color="black" />
                </TouchableOpacity>
              </View>
            );
          }}
        />
        :
        <>
          <Greetings />
          <View style={styles.messageBox}>
            <Text>No companies added to watchlist, try</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} >
              <Text style={styles.link}> searching </Text>
            </TouchableOpacity>
            <Text>one.</Text>
          </View>

        </>

      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  watchlistRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 5,
    borderBottomColor: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5da5ed'
  },
  ticker: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e1e1e',
  },
  messageBox: {
    padding: 10,
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 5
  },
  link: {
    color: 'blue',
    fontWeight: 'bold'
  }
});

export default Watchlist;