import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Logo} from '../../assets/icons';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Logo width="300" height="300" uri={Logo} />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFA500',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLogo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
