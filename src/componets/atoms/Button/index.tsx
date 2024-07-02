import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {ArrowBack} from '../../../assets/icons';

const Button = ({
  label,
  color = '#FFA500',
  textColor = '#ffff',
  onPress,
  type,
  icon,
}) => {
  if (type === 'icon-only') {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        {icon === 'icon-back' && <ArrowBack />}
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      style={styles.button(color)}
      activeOpacity={0.5}
      onPress={onPress}>
      <Text style={styles.label(textColor)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: color => ({
    backgroundColor: color,
    paddingVertical: 20,
    borderRadius: 25,
    shadowColor: '#000', // Warna bayangan
    shadowOffset: {width: 0, height: 2}, // Offset bayangan
    shadowOpacity: 0.25, // Opacity bayangan
    shadowRadius: 3.84, // Radius blur bayangan
    elevation: 5, // Khusus untuk Android
  }),
  label: textColor => ({
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: textColor,
    textAlign: 'center',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.50)', // Warna bayangan teks dengan opacity
    textShadowOffset: {width: 2, height: 2}, // Offset bayangan teks
    textShadowRadius: 3, // Radius blur bayangan teks
  }),
  // button1: color => ({
  //   backgroundColor: color,
  //   paddingVertical: 12,
  //   borderRadius: 15,
  //   shadowColor: '#000', // Warna bayangan
  //   shadowOffset: {width: 0, height: 2}, // Offset bayangan
  //   shadowOpacity: 0.25, // Opacity bayangan
  //   shadowRadius: 3.84, // Radius blur bayangan
  //   elevation: 5, // Khusus untuk Android
  // }),
  // label1: textColor => ({
  //   fontFamily: 'Poppins-Medium',
  //   fontSize: 20,
  //   color: textColor,
  //   textAlign: 'center',
  //   fontWeight: 'bold',
  //   textShadowColor: 'rgba(0, 0, 0, 0.50)', // Warna bayangan teks dengan opacity
  //   textShadowOffset: {width: 2, height: 2}, // Offset bayangan teks
  //   textShadowRadius: 3, // Radius blur bayangan teks
  // }),
});
