import express from 'express';
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const cors = require('cors');

import bodyParser from 'body-parser';
import restauranteRoutes from './src/routes/restauranteRoutes';
import horarioRoutes from './src/routes/horarioRoutes';

const app = express();
app.use(cors({
  origin: '*'
}));

app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(restauranteRoutes);
app.use(horarioRoutes)

app.use((req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

app.use((err: any, req: express.Request, res: express.Response) => {
  console.error(err);
  res.status(500).json({ error: 'Erro interno do servidor' });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});


