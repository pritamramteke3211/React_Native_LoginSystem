import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/core';

const HomeScreen = () => {
    const navigation = useNavigation();
    const logout = () => {
        console.warn("User Logout Sucessfully");
        navigation.navigate('SignIn')
    }

    return (
        <View>
            <Text style={{fontSize: 24, alignSelf: 'center'}}>Home, Sweet Home</Text>
            <Button title="Logout" onPress={logout}/>  
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({})
