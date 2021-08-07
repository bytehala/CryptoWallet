import LinearGradient from 'react-native-linear-gradient';
import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native';

type Props = {
  walletName: string;
  accountValue: string;
  profitLoss: number;
  profitLossPercent: number;
  isPositive: boolean;
};

const Header: React.FC<Props> = ({
  walletName,
  accountValue,
  profitLoss,
  profitLossPercent,
  isPositive,
}) => {
  return (
    <>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#9383e6', '#d47db0']}
        style={[styles.linearGradient, {height: 270}]}>
        <Text style={[styles.walletName, styles.whiteCentered]}>
          {walletName}
        </Text>
        <Text style={[styles.accountValue, styles.whiteCentered]}>
          $ {accountValue}
        </Text>
        <Text style={[styles.profitLoss, styles.whiteCentered]}>
          {isPositive ? '+' : '-'}$ {profitLoss} ({profitLossPercent}%)
        </Text>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    height: 72,
  },
  walletName: {
    marginTop: 50,
  },
  accountValue: {
    marginTop: 50,
    fontSize: 56,
    fontWeight: 'bold',
  },
  profitLoss: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  whiteCentered: {
    color: 'white',
    alignSelf: 'center',
  },
});

export {Header};
