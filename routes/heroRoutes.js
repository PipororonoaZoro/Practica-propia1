import express from "express";
import Hero from "../models/Hero.js";

const router = express.Router();

// Crear héroe
router.post("/", async (req, res) => 
    {
        const hero = new Hero(req.body)
        await hero.save();
        res.json(hero);
    });

// Obtener todos
router.get("/", async (req, res) => 
        {
            const heroes = await Hero.find();
            res.json(heroes);
        });

// Buscar por nombre
router.get("/:nombre", async (req, res) => 
    {
        const hero = await Hero.findOne({ nombre: req.params.nombre });
        res.json(hero);
    });

// Eliminar
router.delete("/:id", async (req, res) => 
    {
        await Hero.findByIdAndDelete(req.params.id);
        res.json({ mensaje: "Heroe eliminado" });
    });

export default router;
