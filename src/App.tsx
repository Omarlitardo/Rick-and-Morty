import { useEffect, useState } from "react";
import { getCharacters } from "./components/getCharacters";
import { Card } from "./components/Card";

export const App = () => {
  const [characters, setCharacters] = useState([]);

  const getData = async () => {
    const data = await getCharacters();
    setCharacters(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="flex flex-col gap-5">
      <nav className="w-full px-10 py-5 bg-slate-800">
        <h1 className="text-white text-2xl font-bold">Rick & Morthy Web App</h1>
      </nav>

      <div className="container px-10">
        <div className="flex justify-center mb-14">
          <input
            type="text"
            className="w-full bg-gray-100 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            placeholder="Buscar..."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {characters.map((character, index) => (
            <Card key={index} info={character} />
          ))}
        </div>
      </div>
    </section>
  );
};
