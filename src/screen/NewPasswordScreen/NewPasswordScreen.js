import { useNavigation } from '@react-navigation/core';
import React, {useState} from 'react';
import {StyleSheet, Text, ScrollView, View} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInputs from '../../components/CustomInput/CustomInputs';


const NewPasswordScreen = () => {
  
  const navigation = useNavigation();
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');


const onSubmitPressed = () =>{
        navigation.navigate('Home')
  }

const onSignInPress = () =>{
        navigation.navigate('SignIn')
}


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>New Password</Text>

        {/* Input from Here */}
        <CustomInputs
         placeholder="Code"
          value={code}
          setValue ={setCode}
          />
        <CustomInputs
         placeholder="Enter your new password"
          value={newPassword}
          setValue ={setNewPassword}
          />

          
        
        {/* Buttons */}
        <CustomButton onPress={onSubmitPressed} text="Submit" />
        <CustomButton onPress={onSignInPress} text="Back to Sign in" type="TERTIARY" />
      </View>
    </ScrollView>
  );
};

export default NewPasswordScreen;

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
