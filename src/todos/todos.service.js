import { request, response } from "express";
import db from "../conn";

export async function getTodo(req = request, res = response) {
    try {
        const data = await db.todo.findMany();
        return res.status(200).json({
            message: "success get data todos", data
        })
    } catch (error) {
        return res.status(500).json({
            message: "invalid get data todos", error
        })
    }
}

export const deletedToDo = async (req = request, res = response) => {
    try {
        const id = req.params.id
        const intId = parseInt(id);

        const res = await db.todo.delete({
            where: {
                // id : req.params.id 
                id : intId
            }
        });

        return res.status(200).json({
            message: "deleted success", res
        })

        } catch (error) {
        console.error(error.message);
    }
}
