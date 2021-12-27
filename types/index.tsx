import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { ViewStyle } from 'react-native';

export type MainStackParams = {
  LandingSc: undefined;
  SignInSc: undefined;
};

export type LSProps = NativeStackScreenProps<MainStackParams, 'LandingSc'>;
export type SISProps = NativeStackScreenProps<MainStackParams, 'SignInSc'>;

export interface InputFieldParams {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  contentType: string;
  style: ViewStyle;
}

export interface threadBtnProps {
  toggle: () => void;
  state: string;
  title: string;
  isloading: boolean;
  isfinished: boolean;
  onfinish: () => void;
}