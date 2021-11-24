import express from "express";
import {createTodo, getTodos, deleteTodo} from "../controller/todos.js";

const router = express.Router();

router.get('/', getTodos);
router.post('/', createTodo);
router.delete('/:id', deleteTodo);

export default router;