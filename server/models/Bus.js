import mongoose from "mongoose";

const busSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    source: { type: String, required: true },
    destination: { type: String, required: true },
    departureTime: { type: String, required: true },
    fare: { type: Number, required: true },
  },
  { timestamps: true },
);

const Bus = mongoose.model("Bus", busSchema);
export default Bus;
