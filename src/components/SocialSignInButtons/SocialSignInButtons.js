import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomButton from '../CustomButton/CustomButton';

const SocialSignInButtons = () => {

    
  const onSignInFacebook = () => {
    console.warn('onSignInFacebook');
  };

  const onSignInGoogle = () => {
    console.warn('onSignInGoogle');
  };

  const onSignInApple = () => {
    console.warn('onSignInApple');
  };

    return (
        <>
           <CustomButton onPress={onSignInFacebook} 
      text="Sign In with Facebook"
      bgColor="#E7E4F4"
      fgColor="#4765A9"
      />
      <CustomButton onPress={onSignInGoogle} 
      text="Sign In with Google" 
      bgColor="#FAE9E4"
      fgColor="#DD4D44"
      />
      <CustomButton onPress={onSignInApple} 
      text="Sign In with Apple" 
      bgColor="#e3e3e3"
      fgColor="#363636"
      />
    </>
      
    )
}

export default SocialSignInButtons;

const styles = StyleSheet.create({})
