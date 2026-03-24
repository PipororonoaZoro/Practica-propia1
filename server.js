import dns from "dns";

// Forzar servidores DNS: Google y Cloudflare
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import heroRoutes from "./routes/heroRoutes.js";

dotenv.config();


const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Conectado a MongoDB"))
.catch(err => console.log("Error:", err));

app.use("/heroes", heroRoutes);

app.listen(3000, () => {console.log("Servidor corriendo en puerto 3000")});