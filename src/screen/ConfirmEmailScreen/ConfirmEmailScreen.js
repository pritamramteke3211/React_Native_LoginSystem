import React, {useState} from 'react';
import {StyleSheet, Text, ScrollView, View} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInputs from '../../components/CustomInput/CustomInputs';
import { useNavigation } from '@react-navigation/core';


const ConfirmEmailScreen = () => {
  
  const [code, setCode] = useState('');
  const onRegisterPressed = () => {
    console.warn('Thsi is onRegisterPressed');
  };
  const navigation = useNavigation();

const onConfirmPressed = () =>{
    navigation.navigate('Home');
}

const onResendPressed = () =>{
      console.warn('Message Resend ')
}

const onSignInPress = () =>{
    navigation.navigate('SignIn');
}


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm Your Email</Text>

        {/* Input from Here */}
        <CustomInputs
         placeholder="Enter your confirmation code"
          value={code}
          setValue ={setCode}
          />
        
        {/* Buttons */}
        <CustomButton onPress={onConfirmPressed} text="Confirm" />
        <CustomButton onPress={onResendPressed} text="Resend code" type="SECONDARY"/>
        <CustomButton onPress={onSignInPress} text="Back to Sign in" type="TERTIARY" />
      </View>
    </ScrollView>
  );
};

export default ConfirmEmailScreen;

const styles = StyleSheet.create({
 
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
  
});
