import React from 'react';
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LottieView from 'lottie-react-native';
import {styles} from '../styles';
import { InputFieldParams, threadBtnProps } from '../types';

export function InputField({
  value,
  setValue,
  contentType,
  placeholder,
  style,
}: InputFieldParams) {
  return (
    <TextInput
      style={style}
      placeholder={placeholder}
      value={value}
      onChangeText={setValue}
      secureTextEntry={contentType == 'password' ? true : false}
        textContentType={contentType}
    />
  );
}

export function ThreadButton({
  toggle,
  title,
  isfinished,
  isloading,
  onfinish,
}: threadBtnProps) {
    
  function StepThread() {
    return (
      <TouchableOpacity
        style={styles.ThreadBtnTO}
        activeOpacity={0.8}
        onPress={toggle}>
        {!isfinished ? (
          <ActivityIndicator size="large" color="black" />
        ) : (
          <LottieView
            source={require('../src/lottie/52058-check.json')}
            autoPlay
            loop
            onAnimationFinish={onfinish}
          />
        )}
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={styles.ThreadBtnTO}
      activeOpacity={0.8}
      onPress={toggle}>
      {!isloading ? (
        <Text style={styles.ThreadBtnText}>{title}</Text>
      ) : (
        <StepThread />
      )}
    </TouchableOpacity>
  );
}
