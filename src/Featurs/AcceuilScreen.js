import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function Accueil({ navigation }) {
    const goToProfil = () => {
        navigation.navigate('Profil'); 
    }

    return (
        <View>
            <Text> Mon écran Accueil </Text>
            <Button
                title="Aller vers profil"
                onPress={goToProfil}
            />
        </View>
    )
}
