import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';
import * as React from 'react';

const CoinInfoCard = () => {
  return (
    <View style={styles.coinCard}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#515b7a', '#242a3f']}
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

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    height: 72,
  },
  cardContent: {
    flexDirection: 'row',
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
});

export {CoinInfoCard};
