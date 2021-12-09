import React, {useState} from 'react';
import {StyleSheet, Text, ScrollView, View} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInputs from '../../components/CustomInput/CustomInputs';
import { useNavigation } from '@react-navigation/core';



const ForgotPasswordScreen = () => {
  const navigation = useNavigation();

  
  const [username, setUsername] = useState('');
  const onRegisterPressed = () => {
    console.warn('Thsi is onRegisterPressed');
  };

const onSendPressed = () =>{
    navigation.navigate('NewPassword');
}

const onSignInPress = () =>{
        navigation.navigate('SignIn')
}


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset Your Password</Text>

        {/* Input from Here */}
        <CustomInputs
         placeholder="ForgotPasswordScreen"
          value={username}
          setValue ={setUsername}
          />
        
        {/* Buttons */}
        <CustomButton onPress={onSendPressed} text="Send" />
        <CustomButton onPress={onSignInPress} text="Back to Sign in" type="TERTIARY" />
      </View>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;

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
