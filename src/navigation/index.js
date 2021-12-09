import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ConfirmEmailScreen from '../screen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screen/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../screen/NewPasswordScreen';
import SignInScreen from '../screen/SigninScreen/SignInScreen';
import SignUpScreen from '../screen/SignUpScreen/SignUpScreen';
import HomeScreen from '../screen/HomeScreen';


const Stack = createNativeStackNavigator();


const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
                <Stack.Screen name="ForgetPassword" component={ForgotPasswordScreen} />
                <Stack.Screen name="NewPassword" component={NewPasswordScreen} />

                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;

const styles = StyleSheet.create({})
