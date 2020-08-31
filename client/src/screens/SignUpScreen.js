import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { signUp } from '../actions/userActions';
import AuthForm from '../components/AuthForm';
import Container from '../components/Container';
import ErrorMessage from '../components/ErrorMessage';

const SignUpScreen = ({ api, signUp }) => {
  const navigation = useNavigation();

  return (
    <Container>
      {api.error ? <ErrorMessage error={api.error} /> : null}
      <AuthForm
        message='Create an account to start tracking your favourite stocks'
        submitButtonText={'Sign Up'}
        onSubmit={signUp}
      />
      <View style={styles.logInContainer}>
        <View style={styles.messageCointainer}>
          <Text style={styles.message}>Already have an account?</Text>
        </View>
        <Button
          onPress={() => navigation.navigate('LogIn')}
          title="Log In"
        />
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  logInContainer: {
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

export default connect(mapStateToProps, { signUp })(SignUpScreen);

