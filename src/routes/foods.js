import express from "express";
import { getFood } from "../resolvers/foods/get-food.js";
import { createFood } from "../resolvers/foods/create-food.js";
import { updateFood } from "../resolvers/foods/update-food.js";
import { deleteFood } from "../resolvers/foods/delete-food.js";

export const foodRouter = express.Router();

foodRouter.get("/", getFood);
foodRouter.post("/", createFood);
foodRouter.put("/", updateFood);
foodRouter.delete("/", deleteFood);
