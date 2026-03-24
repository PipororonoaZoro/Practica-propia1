import mongoose from "mongoose";

const heroSchema = new mongoose.Schema(
    {
        nombre: String,
        poder: String,
        universo: String,
    });

    export default mongoose.model("Hero", heroSchema, "marvelheroes");