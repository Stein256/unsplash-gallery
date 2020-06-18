import React from 'react'
import Gallery from '../components/Gallery'

export default function GalleryScreen({ navigation }) {
    return (
        <Gallery showPicture={url => navigation.navigate('Picture', {url})} />
    )
}
