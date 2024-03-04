import verificarIsbn from "../middleware/index";
import { criarLivro, pegarLivros } from "../controller/livroController";
import express from "express";

const router = express.Router()

router.get('/livros', pegarLivros)
router.post("/livros",verificarIsbn, criarLivro)

export default router;