import React, { useState } from 'react';
import { View, Text, Button, TextInput, useColorScheme, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Profil({navigation}){
    const {setIsAuthenticated} = useContext(AuthContext)
        const signOut = async () => {
        try {
            await Auth.signOut()
            setIsAuthenticated(false)
        }catch(error){
            console.log('error for signOut')
        }}

    return (
        <View>
            <Text>Nom d'utilisateur:</Text>
            <TextInput
                style={styles.input}
                value={login}
                onChangeText={(text) => setLogin(text)}
                placeholder="Nom d'utilisateur"
            />
        <Text>Mot de passe:</Text>
        <TextInput
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Mot de passe"
            secureTextEntry={true}
        />
        <Button title="Connexion" onPress={signIn} />
    </View>

    );
}
