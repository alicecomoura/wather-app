import React, { useState } from "react";

import { fetchData } from "./services/api";
import { initalData } from "./services/helpers/initial-data";
import { Card } from "./components/card";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(initalData);

  const handleSubimit = (event) => {
    event.preventDefault();

    fetchData(city).then((response) => {
      setData(response);
    });
  };

  return (
    <div className="min-w-[380px] flex flex-col m-full h-screen items-center sm:justify-center p-4">
      <form onSubmit={handleSubimit} className="fixed bottom-10 w-full flex justify-center p-4 sm:relative">
        <input
          type="text"
          placeholder="Cidade"
          className="p-3 rounded-lg w-full flex-1 sm:max-w-[350px]"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-400 p-3 rounded-lg ml-3 text-white font-bold"
        >
          Pesquisar
        </button>
      </form>
      <Card data={data} />
    </div>
  );
}

export default App;
