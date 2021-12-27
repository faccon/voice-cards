import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {BODY_LOGIN, HEADER_LOGIN, HEADER_REG, HEIGHT, Login, Register} from '../constants';
import {styles} from '../styles';
import {SISProps} from '../types';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {InputField, ThreadButton} from '../components';

export function SignUpSc({navigation}: SISProps) {
  const [Email, setEmail] = useState<string>('');
  const [Username, setUsername] = useState<string>('');
  const [Pass, setPass] = useState<string>('');
  const [confirmPassword, setconfirmPassword] = useState<string>('');
  const [thread, setthread] = useState('initial');
  const [loading, setloading] = useState<boolean>(false);
  const [finished, setfinished] = useState<boolean>(false);

  function toggleThread() {
    setloading(!loading);
  }

  function redirectUser() {
    // Redirect after succesful signin
    return null;
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        padding: 20,
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign
          style={{marginTop: 30}}
          name="back"
          size={40}
          color="white"
        />
      </TouchableOpacity>
      <Text style={styles.Header}>{HEADER_REG} </Text>

      {/* Input Views */}
      <View
        style={{
          alignItems: 'center',
          marginTop: 50,
          height: HEIGHT * 0.3,
          justifyContent: 'center',
        }}>
        <InputField
          style={styles.IPFstyle}
          value={Username}
          setValue={setUsername}
          placeholder='Username'
          contentType="emailAddress"
        />
        <InputField
          style={styles.IPFstyle}
          value={Email}
          setValue={setEmail}
          placeholder='Email'
          contentType="emailAddress"
        />
        <InputField
          style={styles.IPFstyle}
          value={Pass}
          setValue={setPass}
          placeholder='Password'
          contentType="password"
        />
        <InputField
          style={styles.IPFstyle}
          value={confirmPassword}
          setValue={setconfirmPassword}
          placeholder="Re-enter Password"
          contentType="password"
        />
      </View>

      {/* Button View */}
      <View style={{marginTop: 'auto', alignItems: 'center'}}>
        <ThreadButton
          state={thread}
          title={Register}
          toggle={toggleThread}
          isloading={loading}
          isfinished={finished}
          onfinish={() => redirectUser}
        />
      </View>
    </View>
  );
}
