import { useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom"

export const AlbumsPage = () => {
    const [albums, setAlbums] = useState([])
    const [photos, setPhotos] = useState([])
    const [open, setOpen] = useState(false)
    const idQuery = useParams()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums`)
            .then(response => response.json())
            .then(json => setAlbums(json))
    }, [])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos`)
            .then(response => response.json())
            .then(json => setPhotos(json))
    }, [])

    const filteredPhotos = useMemo(() => {
        return photos.filter(el => el.albumId === +idQuery.id)
    }, [photos, idQuery])

    const handleOpen = () => {
        setOpen(true)
    }

    useEffect(() => {
        setOpen(false)
    }, [idQuery.id])


    return (
        <>
            <ul>
                {albums
                    .filter(el => el.userId === +idQuery.id)
                    .map(el => (
                        <li key={el.id}>
                            <span>{el.title}</span>
                        </li>
                    ))
                }
                <button onClick={handleOpen}>Фотографії</button>
            </ul>

            {open && filteredPhotos.map(el => (
                <img key={el.id} src={`${el.thumbnailUrl}`} alt="#" />
            ))}
        </>
    )
}