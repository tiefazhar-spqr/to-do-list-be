import express from "express"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.json({
    limit: "100mb"
}));

const PORT = process.env.PORT 
app.listen(() => console.info(`
        ====================
        Running PORT: ${PORT}
        ====================
    `)
);
