import react from 'react';
import { View, Image, Text, Button, StyleSheet, Linking } from 'react-native';
import {
    JosefinSans_100Thin,
    JosefinSans_200ExtraLight,
    JosefinSans_300Light,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_700Bold,
    JosefinSans_100Thin_Italic,
    JosefinSans_200ExtraLight_Italic,
    JosefinSans_400Regular_Italic,
    JosefinSans_500Medium_Italic,
    JosefinSans_600SemiBold_Italic,
    JosefinSans_700Bold_Italic,
} from "@expo-google-fonts/josefin-sans";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";


const CardDetails = (props) => {

    let [fontsLoad, error] = useFonts({
        JosefinSans_100Thin,
        JosefinSans_200ExtraLight,
        JosefinSans_300Light,
        JosefinSans_400Regular,
        JosefinSans_500Medium,
        JosefinSans_700Bold,
        JosefinSans_100Thin_Italic,
        JosefinSans_200ExtraLight_Italic,
        JosefinSans_400Regular_Italic,
        JosefinSans_500Medium_Italic,
        JosefinSans_600SemiBold_Italic,
        JosefinSans_700Bold_Italic,
    });


    if (!fontsLoad) {
        return <AppLoading />;
    }


    return (
        <View>
            <View style={styles.container}>
                <View style={styles.poster}>
                    <Image
                        style={styles.imgStyle}
                        source={{
                            uri: props.image,
                        }}
                    />

                    <View style={styles.poster__info}>
                        <Text style={styles.poster__title}> {props.name} ({props.year}) </Text>
                        <Text style={styles.poster__text}>
                            {props.description}
                        </Text>
                    </View>
                    <View style={styles.buttonStyle}>
                        <Button
                            title="Watch Now"
                            onPress={() => Linking.openURL("https://www.netflix.com/browse")}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        fontSize: 30,
        marginBottom: 20,
    },
    poster: {
        width: 250,
        borderWidth: 1,
        alignItems: "center",
    },
    poster__info: {
        alignItems: "center",
        marginVertical: 10,
    },
    poster__title: {
        fontSize: 20,
        marginBottom: 10,
    },
    poster__text: {
        color: "#999",
        paddingHorizontal: 20,
        marginBottom: 10,
        fontFamily: "JosefinSans_500Medium",
        textAlign: 'justify'
    },
    imgStyle: {
        width: "100%",
        height: undefined,
        aspectRatio: 1,
    },
    buttonStyle: {
        marginBottom: 10,
    },
});

export default CardDetails;