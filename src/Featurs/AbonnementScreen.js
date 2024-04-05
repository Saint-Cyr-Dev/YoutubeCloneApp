import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Abonnement({navigation}){
    const goToProfil = () => {
        navigation.navigate('Profil');
    }
    return (
        <View>
            <Text> Mon écran Abonnement </Text>
            <Button
                title="Aller vers profil"
                onPress= {goToProfil}
            />
        </View>
    )
}