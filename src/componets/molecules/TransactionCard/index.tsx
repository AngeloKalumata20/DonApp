import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TransactionCard = ({date, desc, price, type}) => {
  return (
    <View style={styles.cardTransaction}>
      <View>
        <Text style={styles.textDate}>{date}</Text>
        <Text style={styles.textDescription}>{desc}</Text>
      </View>
      {type === 'Kredit' && (
        <Text style={styles.textPriceDebit}>Rp. -{price}</Text>
      )}
      {type === 'Debit' && (
        <Text style={styles.textPriceCredit}>Rp. {price}</Text>
      )}
    </View>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({
  cardTransaction: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 18,
  },
  textDate: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: 'black',
  },
  textDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: 'black',
  },
  textPriceDebit: {
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    color: '#06D001',
  },
  textPriceCredit: {
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    color: '#06D001',
  },
});
//#1ABC9C
