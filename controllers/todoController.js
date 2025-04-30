import { todoModel } from "../models/todoModel.js";

export const getTodos = async (req, res) => {
  try {
    const todos = await todoModel.find();
    res.status(200).json({
      success: true,
      message: "Todos fetched successfully",
      todos,
    });
    console.log(todos);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Error while fetching todos",
    });
  }
};

export const createTodo = async (req, res) => {
  try {
    const { title } = req.body;
    const todo = await todoModel.create({ title });
    // console.log(todo, "Add");
    res.status(200).json({ success: true, message: todo });
    // console.log(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const abc = await todoModel.findByIdAndDelete(id);
    // console.log(abc, "delete");
    res
      .status(200)
      .json({ success: true, message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while deleting the todo" || error.message,
    });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    const updatedTodo = await todoModel.findByIdAndUpdate(
      id,
      { title },
      { new: true }
    );

    // console.log(updatedTodo, "updatedTodo");
    if (!updatedTodo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Todo updated successfully",
      todo: updatedTodo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Error while updating the todo",
    });
  }
};
