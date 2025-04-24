import { useState } from "react";
import Slide from "./components/Slide";
import { slides } from "./components/data";

export default function App() {
  const [current, setCurrent] = useState<number>(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      {/* Autorzy w lewym górnym rogu */}
      <div className="absolute top-4 left-4 bg-inherit text-2xl text-gray-700 font-mono">
        <span className="text-red-500 font-bold">Autorzy</span>: <strong>Jakub Kasprzak 2G</strong>, <strong>Yaroslav Kolot 2G</strong>
      </div>

      <Slide {...slides[current]} />

      {/* Strzałki na dole, wyśrodkowane */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
        <button
          onClick={prevSlide}
          className="bg-gray-300 text-black text-2xl hover:text-white w-14 h-14 rounded-full hover:bg-gray-400 transition cursor-pointer flex items-center justify-center"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="bg-gray-300 text-black text-2xl hover:text-white w-14 h-14 rounded-full hover:bg-gray-400 transition cursor-pointer flex items-center justify-center"
        >
          →
        </button>
      </div>
    </div>
  );
}