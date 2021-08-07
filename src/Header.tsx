import LinearGradient from 'react-native-linear-gradient';
import * as React from 'react';
import {StyleSheet} from 'react-native';

const Header = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#9383e6', '#d47db0']}
      style={[styles.linearGradient, {height: 270}]}
    />
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    height: 72,
  },
});

export {Header};
