import { useEffect, useState } from "react"
import { Loader } from "./Loader"
import { MovieResults } from "./MovieResults"

export const Main  = () => {

    const [movieList, setMovieList] = useState([])
    const [searchKey, setSearchKey] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [modalLoaderShow, setModalLoaderShow] = useState(true)

    //Hook para cargar datos de la API
    useEffect(()=> {
        fetch(`https://www.omdbapi.com/?s=${searchKey}&apikey=9eafdb3a`)
            .then(res => res.json())
            .then(movies => !movies.Error && setMovieList(movies.Search))
            .finally(() => setIsLoading(false))
            .catch(err => console.log(err))
    }, [searchKey])



    return(
        <>
            {isLoading && <Loader show={modalLoaderShow} onHide={() => setModalLoaderShow(false)}/>}

            <div className="d-flex flex-column align-items-center mb-5">
                <h1 className='mt-5 mb-3 text-white'>Búsqueda de peliculas</h1>
                <input className="input-group-text input-lg" name="text" placeholder="Ingresá el nombre" type="text" onChange={(e) => setSearchKey(e.target.value.toLowerCase())} />
            </div>

            {/* Componente que lista cada item de los resultados */}
            <MovieResults movieList = {movieList} />
        </>
    )
}