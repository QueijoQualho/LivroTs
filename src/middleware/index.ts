import express from 'express';
import { getLivrosByisbn } from '../models/livro';

const verificarIsbn = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const isbn = req.body.isbn;

    try {
        if (!isbn) {
            throw new Error('ISBN é obrigatório');
        }
        
        if (isbn.length !== 10 && isbn.length !== 13) {            
            throw new Error("O ISBN deve ter 10 ou 13 dígitos");
        }

        const data = await getLivrosByisbn(isbn);

        if (data) {
            throw new Error('Já existe esse registro');
        }

        next();

    } catch (error) {
        // Extracting relevant information from the error
        const errorMessage = error.message || 'Erro desconhecido';
        return res.status(400).json({ error: errorMessage });
    }
};

export default verificarIsbn;
