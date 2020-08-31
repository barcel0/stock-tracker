import React, { useState, useEffect } from 'react';
import { Text, TextInput, StyleSheet, Button, View } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setError } from '../actions/apiActions';

const AuthForm = ({ submitButtonText, onSubmit, errorMessage, setError, message }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setError(null);
      setEmail('');
      setPassword('');
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
        autoCorrect={false}
        autoCapitalize={'none'}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        secureTextEntry
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
        autoCorrect={false}
        autoCapitalize={'none'}
      />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <View style={styles.buttonContainer}>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password }, navigation)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 20,
    padding: 30,
    borderRadius: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#333333',
  },
  input: {
    marginTop: 5,
    height: 45,
    borderColor: '#a5a8b1',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#faf9fe',
    paddingHorizontal: 15,
    fontSize: 18
  },
  buttonContainer: {
    marginTop: 30
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 15,
    marginVertical: 20
  },
  message: {
    color: '#5da5ed',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center'
  }
});

const mapStateToProps = state => ({
  api: state.api
})

export default connect(mapStateToProps, { setError })(AuthForm);