import Data from "./mocks/with-results.json";
export const searchMovies = ({ search }) => {
  try {
    const res = Data.Search;
    // const data = res.filter((el) => search === el.Year);
    console.log(search);
    console.log(res);
    return res;
  } catch {
    throw new Error("Error searching movies");
  }
};
export const loginAuth = (formData) => {
  const user = Data.usuarios;
  const usuarioEncontrado = user.find(
    (el) =>
      el.username === formData.username && el.password === formData.password
  );

  return usuarioEncontrado;
};

export const registroAuth = (formData) => {
  const user = Data.usuarios;
  user.push(formData);
  // console.log(user);
};
