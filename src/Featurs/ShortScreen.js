import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function Shorts({navigation}){
    const goToProfil = () => {
        navigation.navigate('Profil');
    }
    return (
        <View>
            <Text> Mon écran Shorts </Text>
            <Button
                title="Aller vers profil"
                onPress= {goToProfil}
            />
        </View>
    )
}