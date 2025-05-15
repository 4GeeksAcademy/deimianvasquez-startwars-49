import { useState, useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { useParams } from "react-router-dom"

export const PeopleDetail = () => {
    const { store } = useGlobalReducer()
    const { characters } = store
    const { theId } = useParams()

    const [detail, setDetail] = useState(null)

    const getDetail = () => {
        const character = characters.find((item) => item._id === theId)
        if (character) {
            setDetail(character)
        }
    }

    useEffect(() => {
        getDetail()
    }
        , [theId, characters])

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-md-6 detail-image">
                    <img
                        src={detail?.image}
                        alt={detail?.properties.name}
                        className="w-100"
                    />
                </div>
                <div className="col-12 col-md-6 detail-text">
                    <h1 className="text-danger">{detail?.properties.name}</h1>
                    <p>
                        {detail?.description}
                    </p>
                </div>
                <div className="col-12 d-flex justify-content-between text-danger border-top border-danger py-3 detail-feature">
                    <p>
                        <span>Name</span>
                        {detail?.properties.name}

                    </p>
                    <p>
                        <span>Birth Year</span>
                        {detail?.properties.birth_year}

                    </p>
                    <p>
                        <span>Gender</span>
                        {detail?.properties.gender}
                    </p>
                    <p>
                        <span>Height</span>
                        {detail?.properties.height}

                    </p>
                    <p>
                        <span>Skin</span>
                        {detail?.properties.skin_color}

                    </p>
                    <p>
                        <span>Eye Color</span>
                        {detail?.properties.eye_color}

                    </p>
                </div>
            </div>
        </div>
    )
}