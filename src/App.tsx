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

const CoinInfoCard = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#515b7a', '#242a3f']}
      style={styles.linearGradient}>
      <View style={styles.cardContent}>
        <Icon name="rowing" />
        <Text style={{backgroundColor: 'red'}}>CARD DIVIDER</Text>
        <Text style={{backgroundColor: 'green'}}>CARD DIVIDER</Text>
      </View>
    </LinearGradient>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View>
          <CoinInfoCard />
          <CoinInfoCard />
          <CoinInfoCard />
          <CoinInfoCard />
        </View>
      </ScrollView>
    </SafeAreaProvider>
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
    borderColor: 'transparent'
  },
  coinCard: {
    shadowColor: 'red',
    borderRadius: 10,
  },
  cardContent: {
    flexDirection: 'row',
  },
  linearGradient: {
    flex: 1,
    borderRadius: 8,
    margin: 8,
    padding: 8,
    height: 64,
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
