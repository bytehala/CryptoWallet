import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';

type CoinQuickCardProps = {
  colors: string[];
};

const CoinQuickCard: React.FC<CoinQuickCardProps> = ({colors}) => {
  return (
    <View style={styles.quickCoinCard}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={colors}
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
  linearGradient: {
    flex: 1,
    height: 72,
  },
  cardContent: {
    flexDirection: 'row',
  },
});

export {CoinQuickCard};
