import express from "express";
import { getUsers } from "../resolvers/users/get-user.js";
import { createUser } from "../resolvers/users/create-user.js";
import { updateUser } from "../resolvers/users/update-user.js";
import { deleteUser } from "../resolvers/users/delete-user.js";

export const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.put("/", updateUser);
router.delete("/:id", deleteUser);
