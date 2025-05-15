import { useState, useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { useParams } from "react-router-dom"

export const PlanetDetail = () => {
    const { store } = useGlobalReducer()
    const { planets } = store
    const { theId } = useParams()

    const [detail, setDetail] = useState(null)

    const getDetail = () => {
        const planet = planets.find((item) => item._id === theId)
        if (planet) {
            setDetail(planet)
        }
    }

    useEffect(() => {
        getDetail()
    }
        , [theId, planets])

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-4 detail-image">
                    <img
                        src={detail?.image}
                        alt={detail?.properties.name}
                        className="w-100"
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-4 detail-text">
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
                        <span>Climate</span>
                        {detail?.properties.climate}

                    </p>
                    <p>
                        <span>Population</span>
                        {detail?.properties.population}
                    </p>
                    <p>
                        <span>Orbital Period</span>
                        {detail?.properties.orbital_period}

                    </p>
                    <p>
                        <span>Rotation Period</span>
                        {detail?.properties.rotation_period}

                    </p>
                    <p>
                        <span>Diameter</span>
                        {detail?.properties.diameter}

                    </p>
                </div>
            </div>
        </div>
    )
}