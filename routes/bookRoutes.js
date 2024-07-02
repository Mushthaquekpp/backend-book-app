import express from "express";
import {
  getAllBooks,
  addNewBook,
  updateBook,
  deleteBook,
  searchBooks,
  filterBooks,
} from "../controllers/booksController.js";

const router = express.Router();

router.get("/", getAllBooks);

router.post("/", addNewBook);

router.put("/:id", updateBook);

router.delete("/:id", deleteBook);

router.get("/search", searchBooks);

router.get("/filter", filterBooks);

export default router;
