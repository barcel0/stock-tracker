import React, { useState, useEffect } from 'react';
import { Button } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { updateWatchlist } from '../actions/userActions';

const BtnWatchlist = ({ company, watchlist = [], updateWatchlist }) => {
  const [isInWatchlist, setIsInWatchlist] = useState(false);
  const ticker = company.ticker;
  const tickerArr = watchlist.map(watchlistCompany => watchlistCompany.ticker);
  const navigation = useNavigation();

  useEffect(() => {
    tickerArr.includes(ticker) ? setIsInWatchlist(true) : setIsInWatchlist(false);
  }, [tickerArr]);

  const handleWatchlistClick = action => {
    updateWatchlist(watchlist, company, action, navigation);
  }

  return isInWatchlist ?
    <Button title='Remove from Watchlist' onPress={() => handleWatchlistClick('remove')} /> :
    <Button title='Add to Watchlist' onPress={() => handleWatchlistClick('add')} />
}

const mapStateToProps = state => ({
  loading: state.api.loading,
  watchlist: state.user.user.watchlist,
})

export default connect(mapStateToProps, { updateWatchlist })(BtnWatchlist);
