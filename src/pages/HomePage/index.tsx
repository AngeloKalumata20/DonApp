import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, ViewBase} from 'react-native';
import {getDatabase, ref, onValue} from 'firebase/database';
import {Item} from '../../componets';
import {Menu1, Menu2, Menu3, Menu4, Menu5, Menu6} from '../../assets/IconsMenu';

const HomePage = ({navigation, route}) => {
  const {uid} = route.params;
  const [user, setUser] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const userRef = ref(db, 'users/' + uid);
    onValue(userRef, snapshot => {
      const data = snapshot.val();
      setUser(data);
    });
  }, []);

  return (
    <View style={styles.pageContainer}>
      <View style={styles.containerWithPhoto}>
        <View>
          <Text style={styles.appSubTitle}>Hi, {user.fullName}</Text>
        </View>
        <Image source={{uri: user.photo}} style={styles.avatar} />
      </View>
      <View style={styles.contentWrapper}>
        <Item />
        <View style={styles.ContainerMenu}>
          <Menu1 style={styles.ContainerMenu1} />
          <Menu2 style={styles.ContainerMenu2} />
          <Menu3 style={styles.ContainerMenu3} />
        </View>
        <View style={styles.ContainerMenU}>
          <Menu4 style={styles.ContainerMenu4} />
          <Menu5 style={styles.ContainerMenu5} />
          <Menu6 style={styles.ContainerMenu6} />
        </View>
      </View>
      <View />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentWrapper: {
    paddingHorizontal: 24,
    backgroundColor: '#EEF7FF',
    flex: 1,
  },
  subTitle: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    fontSize: 25,
    marginVertical: 12,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.50)', // Warna bayangan teks dengan opacity
    textShadowOffset: {width: 1, height: 1}, // Offset bayangan teks
    textShadowRadius: 3, // Radius blur bayangan teks
  },
  totalBalance: {
    fontFamily: 'Poppins-SemiBold',
    color: '#000000',
    fontSize: 24,
    textAlign: 'center',
  },
  line: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    marginVertical: 18,
  },
  subTotalWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subTotal: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#000000',
  },
  containerWithPhoto: {
    backgroundColor: '#EEF7FF',
    paddingHorizontal: 24,
    paddingVertical: 37,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  appTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 30,
    color: '#020202',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.50)', // Warna bayangan teks dengan opacity
    textShadowOffset: {width: 1, height: 1}, // Offset bayangan teks
    textShadowRadius: 3, // Radius blur bayangan teks
  },
  appSubTitle: {
    fontFamily: 'Poppins-medium',
    fontSize: 25,
    color: '#FFA500',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  iconsMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  ContainerMenu: {
    backgroundColor: '#EEF7FF',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'center',
  },
  ContainerMenu1: {
    width: 50, // Ubah sesuai dengan lebar yang diinginkan
    height: 50, // Ubah sesuai dengan tinggi yang diinginkan
    margin: 20, // Atur margin antar ikon
    justifyContent: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  ContainerMenu2: {
    width: 50,
    height: 50,
    margin: 25,
    justifyContent: 'center',
    borderRadius: 20,
    shadowColor: '#555', // Ubah warna bayangan sesuai kebutuhan
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 7,
  },
  ContainerMenu3: {
    width: 50,
    height: 50,
    margin: 25,
    justifyContent: 'center',
    borderRadius: 20,
    shadowColor: '#777', // Ubah warna bayangan sesuai kebutuhan
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 7,
  },
  ContainerMenU: {
    backgroundColor: '#EEF7FF',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 60,
    justifyContent: 'center',
  },
  ContainerMenu4: {
    width: 50,
    height: 50,
    margin: 25,
    justifyContent: 'center',
    borderRadius: 20,
    shadowColor: '#777', // Ubah warna bayangan sesuai kebutuhan
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 7,
  },
  ContainerMenu5: {
    width: 50,
    height: 50,
    margin: 25,
    justifyContent: 'center',
    borderRadius: 20,
    shadowColor: '#777', // Ubah warna bayangan sesuai kebutuhan
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 7,
  },
  ContainerMenu6: {
    width: 50,
    height: 50,
    margin: 25,
    justifyContent: 'center',
    borderRadius: 20,
    shadowColor: '#777', // Ubah warna bayangan sesuai kebutuhan
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 7,
  },
});
