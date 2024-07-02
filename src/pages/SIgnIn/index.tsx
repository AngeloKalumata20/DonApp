import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button, Gap} from '../../componets/atoms';
import {Header, TextInput} from '../../componets/molecules';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {showMessage} from 'react-native-flash-message';
import {Apple, Google, Facebook} from '../../assets/IconsSignIn';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();
  const onSubmit = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigation.navigate('Main', {
          screen: 'Home',
          params: {uid: user.uid},
        });
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        showMessage({
          message: errorMessage,
          type: 'danger',
        });
      });
  };

  return (
    <View style={styles.pageContainer}>
      <Header title="Sign In" />
      <View style={styles.contentContainer}>
        <Gap height={26} />
        <TextInput
          placeholder="Email"
          onChangeText={value => setEmail(value)}
        />
        <Gap height={1} />
        <TextInput
          placeholder="Password"
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
        />
        <Gap height={50} />
        <Button label="Login" onPress={onSubmit} />
        <Gap height={12} />
        <Button
          label="Create New Account"
          color="#3B7080"
          textColor="#FFFFFF"
          onPress={() => navigation.navigate('SignUp')}
        />
        <View style={styles.ContainerLine}>
          <View style={styles.line} />
          <Text style={styles.text}>or</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.ContainerLogo}>
          <Apple style={styles.ContainerApple} />
          <Google style={styles.ContainerGoogle} />
          <Facebook style={styles.ContainerFacebook} />
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#EEF7FF',
  },
  contentContainer: {
    backgroundColor: '##EEF7FF',
    marginTop: 24,
    flex: 1,
    paddingHorizontal: 24,
  },
  ContainerLogo: {
    flex: 1,
    flexDirection: 'row', // Atur ikon agar sejajar secara horizontal
    justifyContent: 'space-around', // Atur jarak antara ikon
    alignItems: 'center', // Pastikan ikon berada di tengah secara vertikal
    marginBottom: 150,
    marginTop: 20,
  },
  ContainerApple: {
    width: 80, // Ubah sesuai dengan lebar yang diinginkan
    height: 80, // Ubah sesuai dengan tinggi yang diinginkan
    justifyContent: 'center',
    alignItems: 'center', // Pastikan ikon berada di tengah
    borderRadius: 40, // Setengah dari width/height untuk membuatnya bulat
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  ContainerGoogle: {
    width: 80, // Ubah sesuai dengan lebar yang diinginkan
    height: 80, // Ubah sesuai dengan tinggi yang diinginkan
    justifyContent: 'center',
    alignItems: 'center', // Pastikan ikon berada di tengah
    borderRadius: 40, // Setengah dari width/height untuk membuatnya bulat
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  ContainerFacebook: {
    width: 80, // Ubah sesuai dengan lebar yang diinginkan
    height: 80, // Ubah sesuai dengan tinggi yang diinginkan
    justifyContent: 'center',
    alignItems: 'center', // Pastikan ikon berada di tengah
    borderRadius: 40, // Setengah dari width/height untuk membuatnya bulat
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  ContainerLine: {
    flexDirection: 'row',

    alignItems: 'center',
    marginVertical: 20, // Sesuaikan margin vertikal sesuai kebutuhan
    marginBottom: 40,
    marginTop: 40,
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: 'black', // Sesuaikan dengan warna garis yang diinginkan
    marginHorizontal: 10,
  },
  text: {
    fontSize: 18, // Sesuaikan ukuran teks sesuai kebutuhan
    color: '#3B7080', // Sesuaikan dengan warna teks yang diinginkan
    fontWeight: 'bold',
  },
});
