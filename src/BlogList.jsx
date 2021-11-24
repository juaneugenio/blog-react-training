/** @format */
import { Link } from "react-router-dom";

// const BlogList = (props) => {
// 	const blogs = props.blogs;
//    const title = props.title;
// 	return (
// 		<div className="blog-list">
//           <h2>{title}</h2>
// 			{blogs.map((blog) => (
// 				<div className="blog-preview" key={blog.id}>
// 					<h2>{blog.title}</h2>
// 					<p>Escrito por {blog.author}</p>
// 				</div>
// 			))}
// 		</div>
// 	);
// };

// export default BlogList;

// como parámetros para la variable BlogList pasamos directamente blogs y title que son las props que vienes del parent Home.jsx. En este caso, al title lo mostramos en un h2 antes de las lista de blogs.

const BlogList = ({ blogs, title }) => {
	return (
		<div className="blog-list">
			<h2>{title}</h2>
			{blogs.map((blog) => (
				<div className="blog-preview" key={blog.id}>
					<Link to={`/blogs/${blog.id}`}>
						<h2>{blog.title}</h2>
						<p>Escrito por {blog.author}</p>
					</Link>
					{/* lo siguiente es para DELETE un blog y así actualizar el STATE de la app sin el blog que borramos. Para esto se usa SETSTATE. Entonces, creamos un botón que va a disparar la función que se encarga de DELETE el blog. 
               Esta función la declaramos directamente en el PRIMER lugar donde recibimos los datos del array, en este caso en Home.jsx y la pasamos como PROPS y luego la imprimimos aquí en el onClick*/}
				</div>
			))}
		</div>
	);
};

export default BlogList;
