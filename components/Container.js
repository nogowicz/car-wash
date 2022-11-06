import { View, Dimensions, ImageBackground, ScrollView } from "react-native";


// export const assets = [require("../assets/Group1.png")]
export const assets = [require("../assets/Slice1.png")]
const { width } = Dimensions.get("window")
const aspectRatio = 750 / 1126
const height = width * aspectRatio


function Container({ children }) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white'
        }}>

            <ImageBackground source={assets[0]} style={
                {
                    width,
                    // height,
                    height: '50%'
                }}
            >

                {children}

            </ImageBackground>


        </View>
    );
}

export default Container;