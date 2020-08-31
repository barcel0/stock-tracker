import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { updateWatchlist, tryLocalSignIn, getUser } from '../actions/userActions';
import { useNavigation } from '@react-navigation/native';
import Watchlist from '../components/Watchlist';

const WatchlistScreen = ({ user, tryLocalSignIn, getUser, updateWatchlist }) => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      tryLocalSignIn(navigation);
    });
    getUser();
    return unsubscribe;
  }, [user]);

  return user.token ?
    <View style={styles.container}>
      <Watchlist companyList={user.user.watchlist} updateWatchlist={updateWatchlist} />
    </View> : null
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20
  }
});

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, { tryLocalSignIn, getUser, updateWatchlist })(WatchlistScreen);