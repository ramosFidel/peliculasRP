import Data from "./mocks/with-results.json";
export const searchMovies = async ({ search }) => {
  try {
    const res = await fetch("http://localhost:3001/catalogo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        PalabraClave: search,
      }),
    });
    const data = await res.json();
    const movie = data.data[0];
    console.log(search);

    console.log(movie);
    return movie;
    // const res = Data.Search;
    // // const data = res.filter((el) => search === el.Year);
    // console.log(search);
    // console.log(res);
    // return res;
  } catch {
    throw new Error("Error searching movies");
  }
};
//Debe retornar el usuario logeado
export const loginAuth = async (formData) => {
  try {
    const res = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
      }),
    });
    const data = await res.json();
    const user = data;
    return user;
  } catch (e) {
    console.log(e);
  }
};

export const registroAuth = async (formData) => {
  try {
    const res = await fetch("http://localhost:3001/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
      }),
    });
    const data = await res.json();
    const user = data;
    return user;
  } catch (e) {
    console.log(e);
  }
};

// Peliculas recomendadas de la pantalla principal
export const mainMovies = () => {
  const movies = Data.Search.slice(1, 5);
  return movies;
};

export const updateUserAuth = async (formData, idCurrentUser) => {
  try {
    const res = await fetch("http://localhost:3001/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: idCurrentUser,
        ...formData,
      }),
    });
    const data = await res.json();
    const user = data;
    return user;
  } catch (e) {
    console.log(e);
  }
};
export const updateUserPassAuth = async (contra, idCurrentUser) => {
  try {
    const res = await fetch("http://localhost:3001/updatePass", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: idCurrentUser,
        password: contra,
      }),
    });
    const data = await res.json();
    const user = data;
    return user;
  } catch (e) {
    console.log(e);
  }
};

export const deleteUserAuth = async (idUser) => {
  try {
    const res = await fetch("http://localhost:3001/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: idUser,
      }),
    });
    const data = await res.json();
    const user = data;
    return user;
  } catch (e) {
    console.log(e);
  }
};
