import axios from "axios";
import React, { useState } from "react";

function App() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!from || !to) {
      alert("Please enter both locations");
      return;
    }

    setLoading(true);
    console.log("Searching for:", from, to); // Console-e check korar jonno

    try {
      // Localhost bad diye 127.0.0.1 use koro, eta beshi stable
      // App.jsx handleSearch function update koro
      // App.jsx handleSearch function-er bhetore:
      // App.jsx handleSearch function update
      const response = await axios.get("http://127.0.0.1:8000/api/buses");
      console.log("Data received:", response.data);

      const filtered = response.data.filter(
        (bus) =>
          bus.source.toLowerCase().includes(from.toLowerCase()) &&
          bus.destination.toLowerCase().includes(to.toLowerCase()),
      );
      setResults(filtered);
    } catch (error) {
      console.error("Axios Error:", error);
      alert(
        "Backend connection failed! Check if server is running on port 5000",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Search Header */}
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border-t-4 border-blue-600">
        <h1 className="text-3xl font-black text-blue-800 text-center mb-6 uppercase">
          HALDIA BUS
        </h1>

        <div className="space-y-4">
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase ml-1">
              Kothay theke?
            </label>
            <input
              type="text"
              placeholder="e.g. Haldia"
              className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>
          {/* Dynamic Header */}
          <header className="w-full max-w-4xl flex justify-between items-center mb-10 px-4">
            <div>
              <h2 className="text-2xl font-black text-blue-900">
                Haldia Transport
              </h2>
              <p className="text-gray-500 text-sm font-medium">
                Safe & Reliable Travel
              </p>
            </div>
            <div className="text-right">
              <p className="text-blue-600 font-bold">
                {new Date().toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <div className="flex items-center justify-end space-x-2 text-green-600">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-bold uppercase">Server Live</span>
              </div>
            </div>
          </header>

          <div>
            <label className="text-xs font-bold text-gray-400 uppercase ml-1">
              Kothay jaben?
            </label>
            <input
              type="text"
              placeholder="e.g. Kolkata"
              className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setTo(e.target.value)}
            />
          </div>
          <button
            onClick={handleSearch}
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition shadow-lg active:scale-95 mt-2"
          >
            {loading ? "Searching..." : "Bus Khunjun"}
          </button>
        </div>
      </div>

      {/* Results List */}
      <div className="mt-8 w-full max-w-2xl space-y-4">
        {results.length > 0 ? (
          <>
            <h2 className="text-xl font-bold text-gray-700 px-2 italic">
              Found {results.length} Buses:
            </h2>
            {results.map((bus) => (
              <div
                key={bus._id}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center hover:shadow-md transition-all"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-50 p-4 rounded-full text-blue-600 text-2xl">
                    🚌
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 uppercase">
                      {bus.name}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {bus.source}{" "}
                      <span className="text-blue-400 font-bold">→</span>{" "}
                      {bus.destination}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-8 mt-4 md:mt-0">
                  <div className="text-center">
                    <p className="text-[10px] text-gray-400 font-black uppercase">
                      Time
                    </p>
                    <p className="text-blue-700 font-bold">
                      {bus.departureTime}
                    </p>
                  </div>
                  <div className="text-right border-l pl-8">
                    <p className="text-[10px] text-gray-400 font-black uppercase">
                      Fare
                    </p>
                    <p className="text-2xl font-black text-green-600">
                      ₹{bus.fare}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          from &&
          to &&
          !loading && (
            <div className="text-center p-10 bg-white rounded-xl shadow-inner border border-dashed border-gray-300">
              <p className="text-gray-400 italic">
                No buses found for this route.
              </p>
              <p className="text-xs text-gray-300 mt-1">
                Tip: Check if you added data using seed.js
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default App;
