import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight, Image } from 'react-native'

export default function PictureCard({ title, author, url, onPress }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.author}>{author}</Text>
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={onPress}>

                <Image
                    style={styles.picture}
                    source={{ uri: url }}
                />
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        backgroundColor: 'gainsboro',

    },
    title: {
        fontSize: 16,
    },
    author: {
        fontSize: 20,
    },
    picture: {
        resizeMode: "cover",
        height: 300,
    }
})