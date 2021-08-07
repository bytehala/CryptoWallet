/**
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {ScrollView, View} from 'react-native';

import {CoinQuickCard} from './CoinQuickCard';
import {CoinInfoCard} from './CoinInfoCard';
import {Header} from './Header';

const App = () => {
  const backgroundStyle = {
    backgroundColor: '#404968',
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{marginTop: -50}}
      style={backgroundStyle}>
      <Header />
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

export default App;
