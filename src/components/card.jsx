import React from "react";

export const Card = ({ data }) => {
  const { location, current } = data;

  return (
    <div className="bg-white p-6 mt-10 rounded-lg shadow-md min-w-[350px]">
      <div className="flex justify-around items-center">
        <div>
          <h3 className="text-xl font-bold text-slate-500">{location.name}</h3>
          <p className="text-slate-400 text-sm font-medium">
            {`${location.region}, ${location.country}`}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img
            src={current.condition.icon}
            alt={`Wather icon: ${current.condition.text}`}
          />
          <p className="font-medium text-slate-700">{current.condition.text}</p>
        </div>
      </div>

      <div className="font-bold text-slate-700 flex justify-center mt-4 mb-2">
        <span className="text-8xl">{current.temp_c}</span>
        <span className="text-2xl mt-2">°C</span>
      </div>
    </div>
  );
};
