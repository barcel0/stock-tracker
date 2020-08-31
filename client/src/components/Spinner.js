import React from 'react';
import { ActivityIndicator } from 'react-native';

const Spinner = ({ size = 'large' }) => {
  return <ActivityIndicator size={size} />;
}

export default Spinner;