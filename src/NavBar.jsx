/** @format */

const NavBar = () => {
	return (
		<nav className="navbar">
			<h1>React blog</h1>
			<div className="links">
				<a href="/">Home</a>
				<a
					href="/create"
					// style={{
					// 	color: "white",
					// 	backgroundColor: "#f1356d",
					// 	borderRadius: 10,
					// }}
				>
					New blog
				</a>
			</div>
		</nav>
	);
};

export default NavBar;
