import axios from "axios";

export const getCharacters = async () => {
  try {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character?page=2"
    );

    const data = response.data.results;

    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
// fetch("http://dummyjson.com/users?limit=3") //aki
//       .then((res) => res.json())
//       .then((data) => {
//         // console.log(data.users);
//         setUsers(data.users))};
