import express from "express";
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../controllers/todoController.js";

export const todoRoute = express.Router();

todoRoute.get("/checkTodo", getTodos);
todoRoute.post("/", createTodo);
todoRoute.delete("/:id", deleteTodo);
todoRoute.put("/:id", updateTodo);
