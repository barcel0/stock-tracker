import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { searchCompanies, clearSearchResults } from '../actions/companyActions';
import { Fontisto } from '@expo/vector-icons';

const SearchBox = ({ searchCompanies, clearSearchResults }) => {
  const [searchString, setSearchString] = useState('');
  const clearSearchValues = () => {
    clearSearchResults();
    setSearchString('');
  };

  useEffect(() => {
    if (searchString.length > 1) {
      const timeout = setTimeout(() => searchCompanies(searchString), 600);
      return () => clearTimeout(timeout);
    }
  }, [searchString]);

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.input}
        value={searchString}
        onChangeText={(text) => setSearchString(text)}

        autoCorrect={false}
        autoCapitalize={'none'}
        placeholder={'Search...'}
      />
      {searchString.length > 0 ?
        <TouchableOpacity onPress={() => clearSearchValues()}>
          <Fontisto name="close-a" size={20} color="grey" />
        </TouchableOpacity>
        : null}
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#faf9fe',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea'
  },
  input: {
    height: 50,
    backgroundColor: '#faf9fe',
    fontSize: 20,
    flexGrow: 1
  },
});

const mapStaToProps = state => ({
  company: state.company
})

export default connect(mapStaToProps, { searchCompanies, clearSearchResults })(SearchBox);