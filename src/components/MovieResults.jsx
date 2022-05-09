import Card from 'react-bootstrap/Card'

export const MovieResults = ({movieList}) => {

    return (
        <>
            <ul className="d-flex justify-content-center align-items-center flex-wrap">
                {movieList.map(item => {
                return <li className='m-3' key={item.imdbID}>
                            <Card className='card'>
                            <Card.Img variant="top" src={item.Poster} />
                            <Card.Body>
                                <Card.Title>{item.Title}</Card.Title>
                                <Card.Text>Año: {item.Year}
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </li>
            })}
            </ul>
        </>
    )
}