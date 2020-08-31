import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { logOut } from '../actions/userActions';

const Greetings = ({ user, logOut }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.greetingsContainer}>
        <Text style={styles.greetings}>Welcome back! Signed in with email </Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
      <Button
        onPress={() => logOut(navigation)}
        title="Log Out"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 25,
    paddingHorizontal: 15,
    marginBottom: 10,
    borderRadius: 5
  },
  greetingsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 10
  },
  greetings: {
    fontSize: 16
  },
  email: {
    fontSize: 16,
    color: '#5da5ed',
    fontWeight: 'bold'
  }
});

const mapStateToProps = state => ({
  user: state.user.user
})

export default connect(mapStateToProps, { logOut })(Greetings);