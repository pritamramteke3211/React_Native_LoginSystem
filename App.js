/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import Navigation from './src/navigation';




const App = () => {
  return (
    <View style={styles.root}>
      {/* <SignInScreen/> */}
      {/* <SignUpScreen/> */}
      {/* <ConfirmEmailScreen/> */}
      {/* <ForgotPasswordScreen/> */}
      {/* <NewPasswordScreen/> */}
      <Navigation/>
    </View>
  );
};

const styles = StyleSheet.create({
  root : {
    flex: 1,
    // backgroundColor: 
    backgroundColor: '#f2f2f2',
  }
});

export default App;
