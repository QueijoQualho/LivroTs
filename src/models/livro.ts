import mongoose from 'mongoose'

const LivroSchema = new mongoose.Schema({
    autor: {type:  String, required: true},
    titulo: { type: String, required: true },
    anoLancamento: { type: Number, required: true },
    idioma:  { type: String, required: true },
    sinopse: String,
    editora: String,
    quantidade: {type:  Number, default: 0},
    isbn: {type: String, require: true}
})

export const LivroModel = mongoose.model('Livro', LivroSchema);

export const getLivros = () => LivroModel.find()
export const createLivro = (values: Record<string, any>) => new LivroModel(values).save().then((livro) => livro.toObject());
export const getLivrosByisbn = (isbn: String) => LivroModel.findOne({isbn: isbn})
