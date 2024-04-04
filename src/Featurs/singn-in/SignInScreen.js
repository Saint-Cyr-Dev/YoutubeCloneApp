import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { Auth } from 'aws-amplify';

export default function SignInScreen({ navigation }) {
    const [login, setLogin] = useState('spleencyr@gmail.com');
    const [password, setPassword] = useState('Youtube04@');
    const [otp, setOTP] = useState('');

    const [isSigningIn, setIsSigningIn] = useState(false);

    const handleSignUp = async () => {
        try {
            const signUpInfo = {
                username: login,
                password: password,
                attributes: {},
            };
            await Auth.signUp(signUpInfo);
            console.log('Utilisateur inscrit avec succès.');
        } catch (error) {
            console.log('Erreur lors de l\'inscription:', error.message);
        }
    };

    const handleOTP = async () => {
        try {
            const confirmation = await Auth.confirmSignUp(
                login,
                otp
            );
            console.log('valider avec succes');
        } catch (error) {
            console.log('Erreur de la validation:', error.message);
        }
    };

    const signIn = async () => {
        if (isSigningIn) {
            console.log('Une tentative de connexion est déjà en cours.');
            return;
        }

        setIsSigningIn(true);

        try {
            const user = await Auth.signIn(login, password);
            console.log('Utilisateur connecté:', user);
            navigation.navigate('Accueil');
        } catch (error) {
            console.log('Erreur de connexion :', error.message);
        } finally {
            setIsSigningIn(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text>Nom d'utilisateur:</Text>
            <TextInput
                style={styles.input}
                value={login}
                onChangeText={(text) => setLogin(text)}
                placeholder="Nom d'utilisateur"
                editable={!isSigningIn}
            />
            <Text>Mot de passe:</Text>
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder="Mot de passe"
                secureTextEntry={true}
                editable={!isSigningIn}
            />
            <Button title="Connexion" onPress={signIn} disabled={isSigningIn} />
            <Button title="Créer un compte" onPress={handleSignUp} />
            <Text>Code de verification:</Text>
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                value={otp}
                onChangeText={(text) => setOTP(text)}
                placeholder="Code de verification"
                editable={!isSigningIn}
            />   
            <Button title="Valider l'inscription" onPress={handleOTP} />         
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: '100%',
    },
});
