import express from "express";
import cors from 'cors';
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.post("/users", async (req, res) => {
    await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            content: req.body.content,
            imageUrl: req.body.imageUrl,
            role: req.body.role,
        }
    })
    res.status(201).json(req.body);
})

app.get("/users", async (req, res) => {
    const users = await prisma.user.findMany()
    res.status(200).json(users);
});

app.listen(3000)