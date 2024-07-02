import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ButtonIcon from '../ButtonIcon';

const Item = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>120</Text>
      </View>
      <View style={styles.textContainer1}>
        <Text style={styles.text1}>Poin</Text>
      </View>
      <View style={styles.containerB}>
        <View style={styles.barcode}>
          <ButtonIcon title={'Barcode'} />
        </View>
        <View style={styles.arrow}>
          <ButtonIcon title={'Arrow'} />
        </View>
      </View>
    </View>
  );
};
export default Item;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3B7080',
    padding: 17,
    marginHorizontal: 30,
    marginTop: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    height: windowHeight / 5.5, // Atur tinggi container
    justifyContent: 'flex-end', // Letakkan konten di bagian bawah
    width: '100%', // Atur lebar container r
    alignSelf: 'center', // Pastikan kontainer berada di tengah layar
    flexDirection: 'row',
  },
  textContainer: {
    position: 'absolute',
    bottom: 15, // Atur jarak dari bawah
    left: 15, // Atur jarak dari kiri
    width: '84%',
  },
  text: {
    fontFamily: 'Poppins',
    fontSize: 45,
    fontWeight: 'bold',
    color: '#fff',
    justifyContent: 'space-between',
  },
  textContainer1: {
    position: 'absolute',
    bottom: 33, // Atur jarak dari bawah
    left: 100, // Atur jarak dari kiri
    width: '60%',
  },
  text1: {
    fontFamily: 'Poppins',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    justifyContent: 'space-between',
  },
  // buttonAksi: {
  //   flexDirection: 'row',
  //   marginLeft: 10,
  // },
  containerB: {
    width: 110,
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: windowHeight / 14, // Atur tinggi container
    marginTop: 6,
    alignItems: 'center',
    left: 17,
    borderRadius: 7,
  },
  arrow: {
    left: 8,
    backgroundColor: '#EEF7FF',
  },
  barcode: {
    left: 7,
    backgroundColor: '#EEF7FF',
  },
});
