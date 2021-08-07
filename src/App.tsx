/**
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {CoinQuickCard} from './CoinQuickCard';
import {CoinInfoCard} from './CoinInfoCard';

const App = () => {
  const backgroundStyle = {
    backgroundColor: '#404968',
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{marginTop: -50}}
      style={backgroundStyle}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#9383e6', '#d47db0']}
        style={[styles.linearGradient, {height: 270}]}
      />
      <View>
        <View style={{flexDirection: 'row'}}>
          <CoinQuickCard colors={['#e5b64b', '#dd8939']} />
          <CoinQuickCard colors={['#9751e3', '#7037e7']} />
        </View>
        <CoinInfoCard />
        <CoinInfoCard />
        <CoinInfoCard />
        <CoinInfoCard />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    height: 72,
  },
});

export default App;
