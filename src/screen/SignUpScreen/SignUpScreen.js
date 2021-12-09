import React, {useState} from 'react';
import {StyleSheet, Text, ScrollView, View} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInputs from '../../components/CustomInput/CustomInputs';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/core';

const SignUpScreen = ({userdata , setUserData}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  


  const navigation = useNavigation();
  

  const onRegisterPressed = () => {
    if(username === '' && email === '' && password ==='' && passwordRepeat === ''){
        console.warn("All Field Required")
    }
    else{
      
      console.warn(userdetails)
      navigation.navigate('ConfirmEmail')
    }
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn')
  };

 
  const onTermsOfUsePressed = () => {
    console.warn(' onTermsOfUse ' )
  }

  const onPrivacyPressed = () => {
    console.warn(' onPrivacyPressed ');
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an Account</Text>

        {/* Input from Here */}
        <CustomInputs
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInputs placeholder="Email" value={email} setValue={setEmail} />
        <CustomInputs
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry // If you want to pass true then this can work
        />
        <CustomInputs
          placeholder="Repeat Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry // If you want to pass true then this can work
        />

        {/* Buttons */}
        <CustomButton onPress={onRegisterPressed} text="Register" />
        {/* Terms And condition */}

        <Text style={styles.text}>
        By registering, you confirm that you accept our {' '}
        <Text style={styles.link} onPress={onTermsOfUsePressed}> Terms of Use </Text> and {' '} 
        <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
        </Text >

        {/* Social SignUpButtons */}
        <SocialSignInButtons/>
        

        <CustomButton
          text="Have an account? Sign in"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10,
  },
  text:{
    color : 'gray',
    marginVertical: 10,
  },
  link:{
    color: '#FDB075'
  },
});
