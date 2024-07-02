import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';

const TextInput = ({label, placeholder, ...rest}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Input style={styles.input} placeholder={placeholder} {...rest} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  input: {
    fontFamily: 'Popins-Medium',
    borderWidth: 2,
    justifyContent: 'center',
    borderColor: 'black',
    borderRadius: 25,
    padding: 20,
    fontSize: 18,
    color: 'black',
    marginHorizontal: 9,
    backgroundColor: '#fff',
  },
});
