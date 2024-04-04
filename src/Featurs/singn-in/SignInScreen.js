import React, { useState, useContext } from 'react'; 
import { View, Text, Button, TextInput, useColorScheme, StyleSheet } from 'react-native';
import { Auth } from 'aws-amplify'; 
import { AuthContext } from '../../../App';

export default function SignInScreen({ navigation }) {
    const { setIsAuthenticated } = useContext(AuthContext); 
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async () => {
        try {
            const user = await Auth.signIn(login, password); 
            console.log('Utilisateur connecté:', user);
            setIsAuthenticated(true); 
            navigation.navigate('Accueil');
        } catch (error) {
            console.log('Erreur de connexion :', error.message);
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
