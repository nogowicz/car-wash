import { View, Dimensions, ImageBackground, Keyboard } from "react-native";
import { useEffect, useState } from "react";


// export const assets = [require("../assets/Group1.png")]
export const assets = [require("../assets/Slice1.png")]
const { width } = Dimensions.get("window")

const aspectRatio = 750 / 1126
const height = width * aspectRatio


function Container({ children }) {
    const [keyboardStatus, setKeyboardStatus] = useState(false);
    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardStatus(true);
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardStatus(false);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white'
        }}>

            <ImageBackground source={assets[0]} style={
                {
                    width,
                    // height,
                    height: keyboardStatus ? '55%' : '50%'
                }}
            >

                {children}

            </ImageBackground>


        </View>
    );
}

export default Container;