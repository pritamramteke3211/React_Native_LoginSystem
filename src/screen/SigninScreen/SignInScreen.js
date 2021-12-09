import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View,
  useWindowDimensions,
} from 'react-native';
import Logo from '../../../assets/images/login-icon-3060.png';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInputs from '../../components/CustomInput/CustomInputs';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import {useNavigation} from '@react-navigation/core';

const SignInScreen = () => {
  const userdetails = {
    name: 'pritam',
    pass: '1234',
  };

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSignInPressed = () => {
    if (
      username === '' &&
      email === '' &&
      password === '' &&
      passwordRepeat === ''
    ) {
      console.warn('All Field Required');
    } 
    else if (username === userdetails.name && password === userdetails.pass) {
      navigation.navigate('Home');
      console.warn('User Login Sucessfully');
    } else {
      console.warn('Invalid Credential');
    }
  };

  const onForgetPasswordPressed = () => {
    console.warn('This is Forget Password');
    navigation.navigate('ForgetPassword');
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
        <CustomInputs
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInputs
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry // If you want to pass true then this can work
        />
        <CustomButton onPress={onSignInPressed} text="Sign In" />
        <CustomButton
          text="Forget password?"
          onPress={onForgetPasswordPressed}
          type="TERTIARY"
        />
        <SocialSignInButtons />
        <CustomButton
          onPress={onSignUpPress}
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default SignInScreen;

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
});
