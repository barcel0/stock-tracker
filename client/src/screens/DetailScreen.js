import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { getCompany } from '../actions/companyActions';
import { getUser } from '../actions/userActions';
import CompanyHeader from '../components/CompanyHeader';
import CompanyChart from '../components/CompanyChart';
import CompanyData from '../components/CompanyData';
import BtnWatchlist from '../components/BtnWatchlist';
import Spinner from '../components/Spinner';

const DetailScreen = (props) => {
  const { getCompany, companyDetails, loading } = props;
  const { ticker, name } = props.route.params;
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribeFocus = navigation.addListener('focus', () => {
      getCompany(ticker);
    })
    return unsubscribeFocus;
  }, [navigation, ticker]);

  return (
    <View style={styles.container}>
      {loading ?
        <Spinner /> :
        <>
          <CompanyHeader company={{ name, ticker }} />
          <BtnWatchlist company={{ name, ticker }} />
          <CompanyChart companyQuotes={companyDetails.quotes} />
          <CompanyData companyData={companyDetails.global} />
        </>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 20
  },
});

const mapStateToProps = state => ({
  companyDetails: state.company.details,
});

export default connect(mapStateToProps, { getCompany, getUser })(DetailScreen);