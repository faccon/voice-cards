import {StyleSheet} from 'react-native';
import {WIDTH} from '../constants';

export const styles = StyleSheet.create({
  Header: {
    fontSize: WIDTH * 0.1,
    color: 'white',
    fontWeight: 'bold',
    // letterSpacing: 2,
    padding: 10,
  },
  Body: {
    fontSize: 22,
    textAlign: 'center',
    lineHeight: 25,
    paddingHorizontal: 10,
  },
  BodyLogin: {
    fontSize: WIDTH * 0.08,
    paddingHorizontal: 10,
  },
  RLBtnsTO: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: WIDTH * 0.8,
    height: 70,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 20,
  },
  RLBtn: {
    width: WIDTH * 0.4,
    height: '100%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  IPFstyle: {
    borderWidth: 1,
    borderRadius: 10,
    height: 60,
    width: '85%',
    borderColor: 'rgba(255,255,255, 0.5)',
    paddingHorizontal: 10,
    fontSize: 18,
    marginBottom: 20,
  },
  ThreadBtnTO: {
    backgroundColor: 'white',
    height: 60,
    width: WIDTH * 0.5,
    borderColor: 'rgba(255,255,255,0.5)',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ThreadBtnText: {fontSize: 30, color: 'black'},
});
