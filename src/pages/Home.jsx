import { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const { characters, planets } = store
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)


	return (
		<div className="container mt-5">
			<div>
				<h1 className="text-danger">Characters</h1>
				<div className="my-carousel">
					{
						characters.map((item) => {
							const { properties, _id, image } = item
							return (
								<div
									key={_id}
									className="my-card">
									<img
										src={image}
										alt={properties.name}
										className="w-100"
									/>
									<div className="my-card-body">
										<h4>{properties.name}</h4>
										<p>
											<strong>Gender : </strong> {properties.gender}
										</p>
										<p>
											<strong>Hair Color :</strong> {properties.hair_color}
										</p>
										<p>
											<strong>Eye Color :</strong> {properties.eye_color}
										</p>
									</div>
									<div className="my-card-footer">
										<Link
											className="btn btn-outline-primary"
											to={`/people/${_id}`}
										>Learn More</Link>
										<button
											className="btn btn-outline-warning"
											onClick={() => {

												dispatch({
													type: 'TOGGLE_FAVORITE',
													payload: item
												})
											}}
										>
											{store.favorites.some((fav) => fav._id === _id) ?
												<i className="fas fa-heart"></i> :
												<i className="far fa-heart"></i>
											}
										</button>
									</div>
								</div>
							)
						})
					}

				</div>
			</div>

			<div className="container my-5">
				<h1 className="text-danger">People</h1>
				<div className="my-carousel">
					{
						planets.map((item) => {
							const { properties, _id, image } = item
							return (
								<div
									key={_id}
									className="my-card">
									<img
										src={image}
										alt={properties.name}
										className="w-100"
									/>
									<div className="my-card-body">
										<h4>{properties.name}</h4>
										<p>
											<strong>Population : </strong> {properties.population}
										</p>
										<p>
											<strong>Terrain :</strong> {properties.terrain}
										</p>
									</div>
									<div className="my-card-footer">
										<Link
											className="btn btn-outline-primary"
											to={`/planet/${_id}`}
										>Learn More</Link>
										<button
											className="btn btn-outline-warning"
											onClick={() => {

												dispatch({
													type: 'TOGGLE_FAVORITE',
													payload: item
												})
											}}
										>
											{store.favorites.some((fav) => fav._id === _id) ?
												<i className="fas fa-heart"></i> :
												<i className="far fa-heart"></i>
											}
										</button>
									</div>
								</div>
							)
						})
					}

				</div>
			</div>
		</div>
	);
}; 