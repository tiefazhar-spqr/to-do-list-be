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

        const result = await db.todo.delete({
            where: {
                // id : req.params.id 
                id : intId
            }
        });

        return res.status(200).json({
            message: "deleted success", result
        })

        } catch (error) {
        console.error(error.message);
    }
}

export const createdToDo = async (req = request, res = response) => {
    try {
        const { name_todo, price, status } = req.body;

        if(!name_todo && !price) {
            return req.status(401).json({
                message: "input is required"
            })
        }

        const result = await db.todo.create({
            data: {
                name_todo, price, status
            }
        });

        return res.status(200).json({
            message: "create success", result
        })

    } catch (error) {
        return res.status(500).json({
            message: "invalid error in creating data", error
        })
    }
};

export const updatedToDo = async (req = request, res = response) => {
    try {
        const { name_todo, price, status } = req.body;
        const { id } = req.params;

        if(!name_todo && !price) {
            return req.status(401).json({
            message: "input is required"
            })
        }

        const result = await db.todo.update({
            where: {id},
            data: {name_todo, price, status}
        });

        return res.status(200).json({
            message: "updated successffully", result
        })

    } catch (error) {
        
    }
};