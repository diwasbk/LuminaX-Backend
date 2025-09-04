import express, { response } from "express"
import dotenv from "dotenv"
import { GoogleGenerativeAI } from "@google/generative-ai";
import cors from "cors"

const app = express()

app.use(express.json())
dotenv.config()
app.use(cors({
    origin: process.env.ALLOWED_ORIGIN,
    methods: ["POST"],
}))

const generateAnswer = async (prompt) => {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(prompt);
    return result.response.text()
}

app.post("/api/ask", async (req, res) => {
    const answer = await generateAnswer(req.body.question)
    res.send({ message: "Welcome to LuminaX", response: answer })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running at the port ${PORT}`)
})