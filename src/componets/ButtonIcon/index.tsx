import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {IconBarcode, IconArrow} from '../../assets/IconsHome';

const ButtonIcon = ({title, type}) => {
  const Icon = () => {
    if (title === 'Barcode') {
      return <IconBarcode />;
    }

    if (title === 'Arrow') {
      return <IconArrow />;
    }

    return <IconBarcode />;
  };

  return (
    <TouchableOpacity>
      <View style={styles.button}>
        <Icon />
      </View>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    padding: 7,
  },
});
