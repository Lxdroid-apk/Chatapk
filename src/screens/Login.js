import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Login</Text>
      <Text style={styles.txtins}>
        Submit all the Dtails to Login process ...!
      </Text>
      <TextInput
        placeholder="Enter Email"
        style={[styles.txtinput, {marginTop: 100}]}
        value={email}
        onChangeText={txt => setEmail(txt)}
      />
      <TextInput
        placeholder="Enter Password"
        style={[styles.txtinput, {marginTop: 20}]}
        value={password}
        onChangeText={txt => setPassword(txt)}
      />
      <TouchableOpacity
        style={styles.btn}
        >
        <Text style={styles.btntxt}>Login</Text>
      </TouchableOpacity>
      <Text
        style={styles.orLogin}
        onPress={() => {
          navigation.goBack();
        }}>
        Or SignUp
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  txt: {
    alignSelf: 'center',
    marginTop: 50,
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
  },
  txtins: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 5,
  },
  txtinput: {
    alignSelf: 'center',
    fontSize: 18,
    width: '90%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 50,
    paddingLeft: 20,
    fontWeight: '400',
  },
  btn: {
    width: '80%',
    height: 50,
    borderRadius: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: 'grey',
  },
  btntxt: {
    fontSize: 18,
    color: 'white',
  },
  orLogin: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    fontWeight: '500',
    fontSize: 20,
    color: 'grey',
  },
});
