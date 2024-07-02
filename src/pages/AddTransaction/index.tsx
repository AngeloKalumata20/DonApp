import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap} from '../../componets/atoms';
import {Header, TextInput, TransactionCard} from '../../componets/molecules';

const AddTransaction = ({navigation}) => {
  return (
    <View style={styles.pageContainer}>
      <Header title="Order" backButton onPress={() => navigation.goBack()} />
      <View style={styles.contentWrapper}>
        <TextInput label="" placeholder="Masukan Pesanan " />
        <Gap height={1} />
        <TextInput label="" placeholder="Total" />
        <Gap height={1} />
        <TextInput label="" placeholder="Jenis Pesanan" />
        <Gap height={50} />
        <Button label="Save" />
        <Gap height={10} />
        <Text style={styles.subTitle}>Now</Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          <TransactionCard
            date="11:10 AM"
            desc="Lemonade"
            price="17.000"
            type="Kredit"
          />
          <TransactionCard
            date="8:00 AM"
            desc="Bubur Manado"
            price="15.000"
            type="Kredit"
          />
          <TransactionCard
            date="7:40 PM"
            desc="Nasi Goreng Roa"
            price="18.000"
            type="Debit"
          />
          <TransactionCard
            date="7:39 PM"
            desc="Ayam Kremes"
            price="20.000"
            type="Debit"
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default AddTransaction;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentWrapper: {
    backgroundColor: '#EEF7FF',
    paddingHorizontal: 24,
    paddingVertical: 18,
    flex: 1,
  },
  subTitle: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    fontSize: 16,
    marginVertical: 12,
  },
});
