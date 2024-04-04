import React, { useState, createContext, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// Import des composants
import Accueil from "./src/Featurs/AcceuilScreen";
import Camera from "./src/Featurs/CameraScreen";
import Abonnement from "./src/Featurs/AbonnementScreen";
import Profil from "./src/Featurs/ProfilScreen";
import Shorts from "./src/Featurs/ShortScreen";
import SignInScreen from "./src/Featurs/singn-in/SignInScreen";

import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration';
Amplify.configure(amplifyconfig);
import { Auth } from 'aws-amplify';


// Import des icônes
import IconFondation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { LogBox, Alert } from 'react-native';
LogBox.ignoreAllLogs(); 

export const AuthContext = createContext({ isAuthenticated: false });

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function BottomNavigation() {
    const authContext = useContext(AuthContext);

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}
            initialRouteName="Accueil"
            activeColor="red"
            barStyle={{ backgroundColor: 'white' }}>
            <Tab.Screen name="Accueil" component={Accueil}
                options={{
                    tabBarLabel: 'Accueil',
                    tabBarIcon: ({ color }) => (
                        <IconFondation name="home" color={color} size={26} />
                    ),
                }} />
            <Tab.Screen name="Short" component={Shorts}
                options={{
                    tabBarLabel: 'Short',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="replay-30" color={color} size={26} />
                    ),
                }} />
            {authContext.isAuthenticated ? <Tab.Screen name="Camera" component={Camera}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="pluscircleo" color={color} size={26} />
                    ),
                }} /> : null}
            <Tab.Screen name="Abonnement" component={Abonnement}
                options={{
                    tabBarLabel: 'Abonnement',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="youtube-subscription" color={color} size={26} />
                    ),
                }} />
            {authContext.isAuthenticated ? <Tab.Screen name="Profil" component={Profil}
                options={{
                    tabBarLabel: 'Vous',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account-circle-outline" color={color} size={26} />
                    ),
                }} /> : <Tab.Screen name="SignInScreen" component={SignInScreen}
                options={{
                    tabBarLabel: 'Vous',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account-circle-outline" color={color} size={26} />
                    ),
                }} />}
        </Tab.Navigator>
    );
}

export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            setIsAuthenticated,
            titre: "ShortsTitle",
            alertTest: () => { Alert.alert('test fonction', 'ceci est une fonction envoyée par context') }
        }}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="BottomNav" component={BottomNavigation} />
                </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    );
}
