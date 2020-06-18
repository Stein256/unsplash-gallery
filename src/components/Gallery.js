import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FlatList, View, ActivityIndicator, StyleSheet } from 'react-native'

import loadMorePictures from '../actions/loadMorePictures'
import PictureCard from './PictureCard'

export default function Gallery({ showPicture }) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadMorePictures())
    }, [])
    const pictures = useSelector(state => state.pictures)
    const isLoading = useSelector(state => state.isLoading)

    if (!pictures.length) {
        return <LoadingSpinner />
    }

    return (
        <FlatList
            keyExtractor={picture => picture.id}
            data={pictures}
            onEndReachedThreshold={2}
            onEndReached={() => dispatch(loadMorePictures())}
            ListFooterComponent={isLoading && <LoadingSpinner />}
            renderItem={({ item }) => (
                <PictureCard
                    title={item.title}
                    author={item.author}
                    url={item.urlSmall}
                    onPress={() => showPicture(item.urlSmall)}
                />)}
        />
    )
}

function LoadingSpinner() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={100} color="blue"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
})