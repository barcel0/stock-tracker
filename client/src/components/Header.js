import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = ({ icon = null, title }) => {
  return (
    <View style={styles.container}>
      {icon}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10
  }
});

export default Header;