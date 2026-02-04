import { request, response } from "express";
import db from "../conn";

export async function getTodo(req = request, res = response) {
    try {
        const data = await db.Todo.findMany();
        return res.status(200).json({
            message: "success get data todos", data
        })
    } catch (error) {
        return res.status(500).json({
            message: "invalid get data todos", error
        })
    }
}