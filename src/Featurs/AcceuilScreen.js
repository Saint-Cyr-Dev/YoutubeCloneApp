import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/FontAwesome';
import IconFondation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Accueil({ Profil }) {
    const goToProfil = () => {
        navigation.navigate('Profil');
    }

    return (
        <View>
            <Text> Mon écran Shorts </Text>
            <Button
                title="Aller vers profil"
                onPress={goToProfil}
            />
            <IconFondation name="home" Color="black" size={30} />
            <MaterialIcons name="replay-30" Color="black" size={30} />
            <AntDesign name="pluscircleo" Color="black" size={30} />
            <MaterialCommunityIcons name="youtube-subscription" Color="black" size={30} />
            <MaterialCommunityIcons name="account-circle-outline" Color="black" size={30} />
        </View>
    )
}
