import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  ProfileBack,
  LogouT,
  ProfilePhoto,
  Data,
} from '../../assets/IconsProfile';

const Profile = () => {
  return (
    <View style={styles.ContainerPage}>
      <View style={styles.header}>
        <ProfileBack width={40} height={40} style={styles.ProfileBack} />
        <LogouT width={40} height={40} style={styles.LogouT} />
      </View>
      <View style={styles.ContainerProfile}>
        <ProfilePhoto
          width={100}
          height={100}
          style={styles.Containerprofile}
        />
      </View>
      <View style={styles.ContainerText}>
        <Text style={styles.text}>Kevin Ombeng Jungkok</Text>
      </View>
      <View style={styles.ContainerInfo}>
        <View style={styles.Containerdata}>
          <Data />
        </View>
      </View>
      <View />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  ContainerPage: {
    flex: 1,
    backgroundColor: '#EEF7FF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Memisahkan ikon ke kiri dan kanan
    alignItems: 'center',
    paddingHorizontal: 30, // Memberikan ruang horizontal
    paddingVertical: 30, // Memberikan ruang vertikal
    backgroundColor: '#EEF7FF',
  },
  ProfileBack: {
    color: 'black',
  },
  LogouT: {
    color: 'black',
  },
  ContainerProfile: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  ContainerText: {
    backgroundColor: '#EEF7FF',
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'poppins-medium',
    shadowColor: '#001',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  ContainerInfo: {
    flex: 1,
    backgroundColor: '#EEF7FF',
    alignItems: 'center',
  },
  Containerdata: {
    backgroundColor: 'white',
    padding: 20,
    marginTop: 100,
    alignItems: 'center',
    borderRadius: 15,
  },
});
