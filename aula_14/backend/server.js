const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Servidor está funcionando!');
});

app.post('/cadastro', (req, res) => {
    const email = req.body;
    console.log('Email recebido:', email);
    res.status(200).send({ message: 'Email cadastrado com sucesso!' });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});