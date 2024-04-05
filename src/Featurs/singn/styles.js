import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    input: {
        height: 40,
        width: '80%',
        borderColor: '#E5E4E2',
        borderWidth: 1,
        borderRadius: 20,
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        elevation: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        margin: 20,
    },
    button: {
        width: '48%',
        backgroundColor: '#007bff',
        padding: 10,
        alignItems: 'center',
        borderRadius: 50,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
    },
});

export default styles;
