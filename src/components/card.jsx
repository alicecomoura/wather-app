import React from "react";

export const Card = () => {
  return (
    <div className="bg-white p-6 mt-10 rounded-lg shadow-md">
      <div>
        <h3 className="text-xl font-bold text-slate-500">Rio de Janeiro</h3>
        <p className="text-slate-400 text-sm font-medium">Rio de Janeiro, Brasil</p>
      </div>
      <div className="font-bold text-slate-700 flex mt-4 mb-2">
        <span className="text-8xl">27</span>
        <span className="text-2xl mt-2">°C</span>
      </div>

      <div className="text-center">
        <span className="block">icone</span>
        <p className="font-medium text-slate-700">Nublado</p>
      </div>
    </div>
  );
};
