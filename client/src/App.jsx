import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/* Search Container */}
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border-t-4 border-blue-600">
        <h1 className="text-3xl font-black text-blue-800 text-center mb-2 tracking-tight">
          HALDIA BUS
        </h1>
        <p className="text-gray-500 text-center mb-8 text-sm italic">
          Shohoje khunje nin apnar bus route
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Kothay theke?
            </label>
            <input
              type="text"
              placeholder="e.g. Haldia Township"
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Kothay jaben?
            </label>
            <input
              type="text"
              placeholder="e.g. Mecheda"
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg transition-all active:scale-95 mt-4">
            Bus Khunjun
          </button>
        </div>
      </div>

      <p className="mt-6 text-gray-400 text-xs uppercase tracking-widest">
        Built with ❤️ for Haldia
      </p>
    </div>
  );
}

export default App;
