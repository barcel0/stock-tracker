import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { getUser } from '../actions/userActions';
import { useNavigation } from '@react-navigation/native';
import Container from '../components/Container';
import SearchBox from '../components/SearchBox';
import SearchResults from '../components/SearchResults';
import HotCompanies from '../components/HotCompanies';

const HomeScreen = ({ searchResults, getUser }) => {
  const navigation = useNavigation();
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getUser();
    })
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <SearchBox />
      <Container >
        {searchResults ? <SearchResults searchResults={searchResults} /> : <HotCompanies />}
      </Container>
    </View>
  )
};

const mapStateToProps = state => ({
  searchResults: state.company.searchResults
})

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default connect(mapStateToProps, { getUser })(HomeScreen);