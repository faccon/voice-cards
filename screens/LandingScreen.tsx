import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {BODY, HEADER, Login, Register, WIDTH} from '../constants';
import {LSsvg} from '../src/svg';
import {LSProps} from '../types';
import {styles} from '../styles';

export function LandingScreen({navigation}: LSProps) {
  const [defBtn, setdefBtn] = useState<boolean>(true);

  const toggleRL = (source: string) => {
    if (source === 'reg') {
      // Display register view
      setdefBtn(!defBtn);
    } else {
      // Display Login View
      setdefBtn(!defBtn);
      navigation.navigate('SignInSc');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'black', alignItems: 'center'}}>
      <View style={{paddingVertical: 10}}>
        <LSsvg size={WIDTH * 0.7} />
      </View>
      <Text style={styles.Header}>{HEADER}</Text>
      <Text style={styles.Body}>{BODY}</Text>

      {/* Register nand Login tab */}
      <View style={styles.RLBtnsTO}>
        {/* Left Button */}
        <TouchableOpacity
          style={[
            styles.RLBtn,
            {backgroundColor: defBtn ? 'white' : undefined},
          ]}
          onPress={() => toggleRL('reg')}>
          <Text
            style={{
              color: defBtn ? 'black' : 'white',
              fontSize: 22,
              fontWeight: 'bold',
            }}>
            {Register}
          </Text>
        </TouchableOpacity>
        {/* Right Button */}
        <TouchableOpacity
          style={[
            styles.RLBtn,
            {backgroundColor: !defBtn ? 'white' : undefined},
          ]}
          onPress={() => toggleRL('login')}>
          <Text
            style={{
              color: !defBtn ? 'black' : 'white',
              fontSize: 22,
              fontWeight: 'bold',
            }}>
            {Login}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
