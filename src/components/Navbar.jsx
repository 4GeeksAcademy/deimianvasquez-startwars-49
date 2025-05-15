import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import Logo from "../assets/img/logo.png";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();
	const { favorites } = store;

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img
							src={Logo}
							alt="logo de starwars"
							className="image-logo" />
					</span>
				</Link>
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						favorites <span className="badge text-bg-secondary">{favorites.length}</span>
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						{
							favorites.length > 0 ? (
								favorites.map((item) => {
									return (
										<li
											key={item._id}
											className="d-flex mb-2"
										>
											<Link
												className="dropdown-item"
												to={`/people/${item._id}`}>{item.properties.name}</Link>
											<button
												className="btn btn-outline-danger me-2"
												onClick={() => {
													dispatch({
														type: "REMOVE_FAVORITE",
														payload: item._id,
													});
												}}
												aria-label="Remove from favorites"
												title="Remove from favorites"
											>
												<i class="far fa-trash-alt"></i>
											</button>
										</li>
									)
								})
							) : (
								<li><span className="dropdown-item">No favorites</span></li>
							)
						}
						{/* <li><a className="dropdown-item" href="#">Action</a></li>
						<li><a className="dropdown-item" href="#">Another action</a></li>
						<li><a className="dropdown-item" href="#">Something else here</a></li> */}
					</ul>
				</div>
			</div>
		</nav>
	);
};