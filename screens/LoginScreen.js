import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Dimensions,
    TouchableOpacity,
    Alert,
} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from "react";
import { login } from "../util/auth";

import Container from "../components/Container";
import AuthContent from "../components/auth/AuthContent";
import LoadingOverlay from "../components/LoadingOverlay";
import { useDispatch } from "react-redux";
import { authenticate } from "../store/redux/auth";


function LoginScreen({ navigation }) {
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const dispatch = useDispatch();

    async function loginHandler({ email, password }) {
        setIsAuthenticating(true);
        try {
            const token = await login(email, password);
            dispatch(authenticate({ token: token }));
        } catch (error) {
            Alert.alert(
                'Authentication failed',
                'Could not log you in. Please check your credentials or try again later!'
            )
            setIsAuthenticating(false);
        }
    }


    if (isAuthenticating) {
        return <LoadingOverlay message='Logging you in...' />
    }
    return (
        <Container>
            <View style={styles.container}>
                <View style={styles.logo}>
                    <FontAwesome5 name="car-alt" size={60} color="#4563BF" />
                    <Text style={[styles.title]}>Car Wash</Text>
                </View>
                <AuthContent isLogin onAuthenticate={loginHandler} />

            </View>
        </Container>
    );
}

export default LoginScreen;



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