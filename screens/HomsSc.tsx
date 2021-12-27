import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../styles';
import {HSProps} from '../types';

export function HomeSc({navigation}: HSProps) {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Text style={styles.Header}>HomeScreen</Text>
    </View>
  );
}
