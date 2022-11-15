import {
    StyleSheet,
    View,
    Text,
    Alert,
} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { createUser } from "../util/auth";
import { useState } from "react";

import Container from "../components/Container";
import AuthContent from "../components/auth/AuthContent";
import LoadingOverlay from "../components/LoadingOverlay";
import { useDispatch } from "react-redux";
import { authenticate } from "../store/redux/auth";


function SignupScreen({ navigation }) {
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const dispatch = useDispatch();

    async function signupHandler({ email, password }) {
        setIsAuthenticating(true);
        try {
            const token = await createUser(email, password);
            dispatch(authenticate({ token: token }));
        } catch (error) {
            Alert.alert(
                'Authentication failed',
                'Could not create user, please check your input and try again later!'
            )
            setIsAuthenticating(false);
        }
    }


    if (isAuthenticating) {
        return <LoadingOverlay message='Creating user...' />
    }
    return (
        <Container>
            <View style={styles.container}>
                <View style={styles.logo}>
                    <FontAwesome5 name="car-alt" size={60} color="#4563BF" />
                    <Text style={[styles.title]}>Car Wash</Text>
                </View>
                <AuthContent onAuthenticate={signupHandler} />

            </View>
        </Container>
    );
}

export default SignupScreen;



const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    logo: {
        alignItems: 'center',
        marginTop: 80,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#4563BF',
    },

});