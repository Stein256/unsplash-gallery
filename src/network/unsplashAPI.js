const client_id = 'cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0'

export async function loadPictures(page = 1) {
    const response = await fetch(`https://api.unsplash.com/photos/?client_id=${client_id}&page=${page}`)
    const result = await response.json()

    return result.map(picture => ({
        id: picture.id,
        title: picture.description || picture.alt_description || 'no title',
        author: picture.user.name,
        urlSmall: picture.urls.small,
        urlFull: picture.urls.full,
    }))
}
