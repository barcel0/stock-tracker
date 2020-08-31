import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { logIn } from '../actions/userActions';
import AuthForm from '../components/AuthForm';
import Container from '../components/Container';
import ErrorMessage from '../components/ErrorMessage';

const LogInScreen = ({ api, logIn }) => {
  const navigation = useNavigation();

  return (
    <Container>
      {api.error ? <ErrorMessage error={api.error} /> : null}
      <AuthForm
        message='Sign in to see your watchlist'
        submitButtonText={'Log In'}
        onSubmit={logIn}
      />
      <View style={styles.signUpContainer}>
        <View style={styles.messageCointainer}>
          <Text style={styles.message}>Don't have an account?</Text>
        </View>
        <Button
          onPress={() => navigation.navigate('SignUp')}
          title="Sign Up"
        />
      </View>
    </Container>
  )
};

const styles = StyleSheet.create({
  signUpContainer: {
    backgroundColor: 'white',
    marginTop: 20,
    padding: 30,
    borderRadius: 5,
  },
  messageCointainer: {
    alignItems: 'center'
  },
  message: {
    color: '#5da5ed',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 20
  }
});

const mapStateToProps = state => ({
  api: state.api,
  user: state.user
})

export default connect(mapStateToProps, { logIn })(LogInScreen);