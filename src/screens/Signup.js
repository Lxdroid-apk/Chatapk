import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
  import uuid from 'react-native-uuid';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation=useNavigation();
  const registerUser=()=>{
    const userID=uuid.v4();
    firestore().collection("users").doc(userID).set({
      name:name,
      email:email,
      mobile:mobile,
      password:password,
      userID:userID,
    }).then(res=>{
      console.log('user created');
      navigation.navigate('Login');
    }).catch(error=>{
      console.log(error);
    });

  };
  const validate=()=>{
    let isValid=true;
    if (name == ''){
      isValid=false;
    };
    if(email ==''){
      isValid=false;
    };
    if(mobile == ''){
      isValid=false;
    };
    if(password == ''){
      isValid=false;
    };
    if(confirmPassword == ''){
      isValid=false;
    };
    if(confirmPassword !== password){
      isValid=false;
    };
    return isValid;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Signup</Text>
      <Text style={styles.txtins}>
        Submit all the Dtails to register process ...!
      </Text>
      <TextInput
        placeholder="Enter Name "
        style={[styles.txtinput, {marginTop: 50}]}
        value={name}
        onChangeText={txt => setName(txt)}
      />
      <TextInput
        placeholder="Enter Email"
        style={[styles.txtinput, {marginTop: 20}]}
        value={email}
        onChangeText={txt => setEmail(txt)}
      />
      <TextInput
        placeholder="Enter Mobile"
        style={[styles.txtinput, {marginTop: 20}]}
        keyboardType="number-pad"
        maxLength={10}
        value={mobile}
        onChangeText={txt => setMobile(txt)}
      />
      <TextInput
        placeholder="Enter Password"
        style={[styles.txtinput, {marginTop: 20}]}
        value={password}
        onChangeText={txt => setPassword(txt)}
      />
      <TextInput
        placeholder="Enter Confirm Password"
        style={[styles.txtinput, {marginTop: 20}]}
        value={confirmPassword}
        onChangeText={txt => setConfirmPassword(txt)}
      />
      <TouchableOpacity 
      style={styles.btn}
      onPress={() => {
        if (validate()){
          registerUser();
        }else{
          Alert.alert("Please Enter Correct Data");
        }
          
        }}>
        <Text style={styles.btntxt}>SignUp</Text>
      </TouchableOpacity>
      <Text style={styles.orLogin}
      onPress={()=>{
        navigation.navigate('Login');
      }}
      >Or Login</Text>
    </View>
  );
};


export default Signup;

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
