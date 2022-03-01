import react from 'react';
import CardDetails from '../components/CardDetails';
import { View, Text, StyleSheet, FlatList } from 'react-native';
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


const Home = () => {

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


    const data = [
        {
            index: "1",
            name: "All of Us Dead",
            year: "2021",
            description: "Find out why the All of us dead. When an island populated by happy,flightless birds is visited by mysterious green piggies, it's up to three unlikely outcasts - Red, Chuck and Bomb",
            image: "https://www.pinkvilla.com/files/all_dead_main_1.jpg"
        },
        {
            index: "2",
            name: "La Casa De Papel",
            year: "2019",
            description: "Money Heist (Spanish: La casa de papel, [la ˈkasa de paˈpel], (The House of Paper) is a Spanish heist crime drama television series created by Álex Pina",
            image: "https://i.ytimg.com/vi/htqXL94Rza4/maxresdefault.jpg"
        },
        {
            index: "3",
            name: "The Witchers",
            year: "2020",
            description: "Witchers are once-normal humans who got mutated by a combination of medieval science and magic, which made them superhuman and able to take potions too toxic for normal people",
            image: "https://image.api.playstation.com/vulcan/img/rnd/202009/2913/TQKAd8U6hnIFQIIcz6qnFh8C.png"
        },
        {
            index: "4",
            name: "Peaky Blinders",
            year: "2015",
            description: "Peaky Blinders is an epic centered on a gangster family of Irish-Romani origin set in Birmingham, England, starting in 1919, several months after the end of the First World War in November 1918",
            image: "https://www.thenews.com.pk/assets/uploads/updates/2022-01-02/921920_4470820_cilian_updates.jpg"

        },
        {
            index: "5",
            name: "Vikings",
            year: "2012",
            description: "The Vikings were raiders, pirates, traders, explorers, and colonizers during the 9th to 11th century. Tall, blonde, burly, with long beards dishevelled from their hard life as warriors",
            image: "https://m.media-amazon.com/images/M/MV5BODk4ZjU0NDUtYjdlOS00OTljLTgwZTUtYjkyZjk1NzExZGIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"
        },
        {
            index: "6",
            name: "Breaking Bad",
            year: "2007",
            description: "Breaking Bad follows Walter White, a meek high school chemistry teacher who transforms into a  drug trader, driven by a desire to financially for his family diagnosed with lung cancer",
            image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202001/Breaking_Bad.jpeg?Ifrqi.v01Y0KfAlAyY172HCu8HZTJJvy&size=770:433"
        },
    ]

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.headingStyle}>Netflix App</Text>
            </View>


            <View>
                <FlatList
                    data={data}
                    keyExtractor={(key) => {
                        return key.index
                    }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={(element) => {
                        return (
                            <View>
                                <CardDetails
                                    name={element.item.name}
                                    image = {element.item.image}
                                    year={element.item.year}
                                    description={element.item.description}
                                />
                            </View>
                        )
                    }}
                />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        padding: 80,
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    headingStyle: {
        color: "red",
        textShadowRadius: 10,
        textShadowColor: "grey",
        fontSize: 30,
        margin: 20,
        textTransform: 'uppercase',
        letterSpacing: 2,
        fontFamily: "JosefinSans_700Bold"

    },
})
export default Home;