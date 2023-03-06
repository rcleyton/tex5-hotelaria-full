require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	res.send({ message: 'hello, world!' });
});

app.listen(process.env.PORT, () => {
	console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});
