import React from 'react'
import { Image, TouchableHighlight } from 'react-native'

export default function PictureScreen({ navigation, route }) {
    return (
        <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => navigation.goBack()}>
                
                <Image
                    style={{resizeMode: 'contain', height: '100%'}}
                    source={{uri: route.params.url}}
                />
        </TouchableHighlight>
    )
}
