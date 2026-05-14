import mongoose from "mongoose";
import dotenv from "dotenv";
import Bus from "./models/Bus.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Connected for seeding...");

    // Purono data thakle muche deba (optional)
    await Bus.deleteMany({});

    // Notun dummy data
    const sampleBuses = [
      {
        name: "Haldia Express",
        source: "Haldia",
        destination: "Kolkata",
        departureTime: "06:30 AM",
        fare: 120,
      },
      {
        name: "SBSTC Bus",
        source: "Haldia",
        destination: "Mecheda",
        departureTime: "09:00 AM",
        fare: 45,
      },
    ];

    await Bus.insertMany(sampleBuses);
    console.log("✅ Data successfully added to Database!");
    process.exit();
  })
  .catch((err) => console.log(err));
