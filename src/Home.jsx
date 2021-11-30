/** @format */
import React from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs/");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading ...</div>}
      {/* Aquí es donde pasamos las propiedades de la constante que
			contiene los datos que necesitamos mostrar desde el CHILD: BlogList.jsx que es donde creamos el TEAMPLATE. En este caso, nombramos como queremos a la constante donde pasaremos las PROPS blogs. Además, podemos pasarle otros datos que no necesariamente son variables ya definidas anteriormente, por ejemplo un título para la sección "Lista de blogs" */}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}

      {/* Lo siguiente es un ejemplo de como reusar un componente y desde esta misma página pasarle funciones para que muestre otros valores como filtrar solo los blogs de un usuario en particular. Así se demuestra 	que los componentes son dinámicos.

			<BlogList
				blogs={blogs.filter((blog) => blog.author === "mario")}
				title="Mario's blogs"
			/> */}
    </div>
  );
};

export default Home;
