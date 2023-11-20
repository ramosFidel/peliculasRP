import React from "react";

export const AboutUs = () => {
  return (
    <div className="w-full max-w-7xl px-4 mx-auto sm:px-8 mt-24">
      <div className="lg:text-center">
        <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
          buscaMovie, Encuentra Tu Próxima Película!
        </p>
        <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
          Ya sea que seas un cinéfilo empedernido o simplemente estés buscando
          algo nuevo para ver, buscaMovie está aquí para hacerte compañía en tu
          viaje cinematográfico.
        </p>
      </div>
      <blockquote className="relative grid items-center bg-white shadow-xl md:grid-cols-3 rounded-xl">
        <img
          className="hidden object-cover w-full h-full rounded-l-xl md:block"
          src="https://img.freepik.com/vector-premium/buscar-diseno-plantilla-logotipo-pelicula_20029-921.jpg?w=2000"
        ></img>

        <article className="relative p-6 md:p-8 md:col-span-2">
          <div className="space-y-8">
            <p className="text-base sm:leading-relaxed md:text-2xl">
              En buscaMovie, estamos apasionados por conectar a las personas con
              las películas que aman y descrubir nuevas y diferentes peliculas.
              Nuestra plataforma, impulsada por la última tecnología en frontend
              con React.js y un robusto backend construido en Node.js, está
              diseñada para ofrecerte la mejor experiencia de búsqueda y
              descubrimiento cinematográfico.
            </p>

            <footer className="flex items-center space-x-4 md:space-x-0">
              <img
                className="w-12 h-12 rounded-full md:hidden"
                src="https://randomuser.me/api/portraits/men/68.jpg"
              ></img>
              <span className="font-bold text-lg">Grupo #</span>
            </footer>
          </div>
        </article>
      </blockquote>
      <section className="">
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img src="https://cdn-icons-png.flaticon.com/512/1628/1628441.png"></img>
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Mision
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Nuestro proyecto ayuda a facilitar la exploración del
                    fascinante universo del cine. Creemos que cada película
                    tiene una historia única y queremos ayudarte a encontrar la
                    próxima joya que te emocione, haga reír o te sumerja en una
                    nueva realidad.
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img src="https://images.vexels.com/media/users/3/128866/isolated/lists/9d104cd78be9c669adf883bf1eb37c92-objetivo-icon-svg.png"></img>
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Objetivo
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Facilitar a los usuarios la búsqueda, descubrimiento y
                    disfrute de películas mediante una plataforma intuitiva y
                    tecnológicamente avanzada, que ofrezca información
                    detallada, recomendaciones personalizadas y una experiencia
                    cinematográfica única.
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img src="https://cdn-icons-png.flaticon.com/512/3789/3789834.png"></img>
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Colaboradores
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Detrás de cada línea de código, diseño y actualización de la
                    base de datos hay un equipo de personas apasionadas por el
                    cine y la tecnología. Nos esforzamos por ofrecer una
                    plataforma que refleje nuestro amor por las películas y
                    nuestra dedicación para hacer que descubrir nuevas historias
                    sea emocionante y fácil.
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img src="https://cdn-icons-png.flaticon.com/512/1186/1186622.png"></img>
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Tecnología
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Con un equipo de desarrolladores apasionados en tecnologías
                    de punta, hemos creado un frontend en React.js que ofrece
                    una interfaz intuitiva y atractiva. En el backend, nuestra
                    API construida en Node.js garantiza respuestas rápidas y
                    datos actualizados para que tu experiencia de búsqueda sea
                    fluida y eficiente.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
