import React from 'react'
import { Card } from './components/card';

function App() {
  return (
    <div className="flex flex-col m-full h-screen items-center justify-center">
      <form>
        <input 
          type="text" 
          placeholder="Cidade"
          className="p-3 rounded-lg" 
        />
        <button 
          type="submit"
          className="bg-blue-400 p-3 rounded-lg ml-3 text-white font-bold"
        >
          Pesquisar
        </button>
      </form>

      <Card />
    </div>
  );
}

export default App;
