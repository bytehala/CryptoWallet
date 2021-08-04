/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Card, Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

const CoinQuickCard = () => {
  return (
    <View style={styles.quickCoinCard}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#e5b64b', '#dd8939']}
        style={[
          styles.linearGradient,
          {
            borderRadius: 8,
          },
        ]}>
        <View style={styles.cardContent}>
          <Icon name="rowing" />
          <Text style={{backgroundColor: 'red'}}>CARD DIVIDER</Text>
          <Text style={{backgroundColor: 'green'}}>CARD DIVIDER</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const CoinQuickCard2 = () => {
  return (
    <View style={styles.quickCoinCard}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#9751e3', '#7037e7']}
        style={[
          styles.linearGradient,
          {
            borderRadius: 8,
          },
        ]}>
        <View style={styles.cardContent}>
          <Icon name="rowing" />
          <Text style={{backgroundColor: 'red'}}>CARD DIVIDER</Text>
          <Text style={{backgroundColor: 'green'}}>CARD DIVIDER</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const CoinInfoCard = () => {
  return (
    <View style={styles.coinCard}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#515b7a', '#242a3f']}
        style={[styles.linearGradient, {
          borderRadius: 8,}]}>
        <View style={styles.cardContent}>
          <Icon name="rowing" />
          <Text style={{backgroundColor: 'red'}}>CARD DIVIDER</Text>
          <Text style={{backgroundColor: 'green'}}>CARD DIVIDER</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: '#404968',
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{ marginTop: -50 }}
      style={backgroundStyle}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#9383e6', '#d47db0']}
        style={[styles.linearGradient, {height: 270}]}></LinearGradient>
      <View>
        <View style={{flexDirection: 'row'}}>
          <CoinQuickCard />
          <CoinQuickCard2 />
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
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  card: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  coinCard: {
    height: 72,
    borderColor: 'black',
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginVertical: 6,
    borderRadius: 8,
    shadowOffset: {
      width: -3,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 8,
  },
  quickCoinCard: {
    height: 72,
    borderColor: 'black',
    backgroundColor: 'white',
    marginLeft: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowOffset: {
      width: -3,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 8,
    width: 170,
  },
  cardContent: {
    flexDirection: 'row',
  },
  linearGradient: {
    flex: 1,
    height: 72,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default App;
