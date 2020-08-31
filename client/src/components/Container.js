import React from 'react';
import { View, StyleSheet } from 'react-native';

const Container = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    flex: 1
  }
})

export default Container;