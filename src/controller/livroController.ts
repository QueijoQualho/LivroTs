import express from 'express'
import { createLivro, getLivros } from '../models/livro'

export const pegarLivros = async (req: express.Request, res: express.Response) => {
    try {
        const livros = await getLivros()
        return res.status(200).json({ users: livros })
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const criarLivro = async (req: express.Request, res: express.Response) => {
    try {
        const { autor, titulo, anoLancamento, editora, idioma, sinopse, quantidade, isbn } = req.body;

        const newLivro = createLivro({
            autor,
            titulo,
            anoLancamento,
            editora,
            idioma,
            sinopse,
            quantidade,
            isbn
        });

        return res.status(201).json(newLivro);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
