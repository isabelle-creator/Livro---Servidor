const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

router.get('/', async (req, res) => {
  const livros = await obterLivros();
  res.json(livros);
});

router.post('/', async (req, res) => {
  const livro = req.body;
  try {
    await incluir(livro);
    res.json({ status: true, message: 'Livro incluído com sucesso' });
  } catch (err) {
    res.json({ status: false, message: 'Erro ao incluir livro' });
  }
});

router.delete('/:id', async (req, res) => {
  const codigo = req.params.id;
  try {
    await excluir(codigo);
    res.json({ status: true, message: 'Livro excluído com sucesso' });
  } catch (err) {
    res.json({ status: false, message: 'Erro ao excluir livro' });
  }
});

module.exports = router;