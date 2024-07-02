import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Button} from '../../atoms';

const Header = ({title, backButton, onPress}) => {
  return (
    <View style={styles.container}>
      {backButton && (
        <Button type="icon-only" icon="icon-back" onPress={onPress} />
      )}
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEF7FF',
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 30,
    color: '#020202',
    marginLeft: 24,
    marginVertical: 38,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.50)', // Warna bayangan teks dengan opacity
    textShadowOffset: {width: 1, height: 1}, // Offset bayangan teks
    textShadowRadius: 3, // Radius blur bayangan teks
  },
  buttonBack: {
    height: 35,
    width: 35,
  },
});
