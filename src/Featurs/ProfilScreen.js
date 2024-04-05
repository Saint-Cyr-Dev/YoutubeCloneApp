import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { Auth } from 'aws-amplify';

export default function Profil({ navigation }) {
    const setIsAuthenticated = (useContext)
    const signOut = async () => {
        try {
            await Auth.signOut();
            setIsAuthenticated(false)
        } catch (error) {
            console.log('Error for signOut:', error);
        }
    };

    return (
        <View>
            <Text> Mon écran Profil </Text>
            <Text>Je me déconnecte</Text>
            <Button title="Déconnexion" onPress={signOut} />
        </View>
    );
}
