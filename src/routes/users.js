import express from "express";
import { getUsers } from "../resolvers/users/get.users";
import { createUser } from "../resolvers/users/create-user";
import { updateUser } from "../resolvers/users/update-user";
import { deleteUser } from "../resolvers/delete-user";

export const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.put("/", updateUser);
router.delete("/:id", deleteUser);
