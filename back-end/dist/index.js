"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const cors = require('cors');
const body_parser_1 = __importDefault(require("body-parser"));
const restauranteRoutes_1 = __importDefault(require("./src/routes/restauranteRoutes"));
const horarioRoutes_1 = __importDefault(require("./src/routes/horarioRoutes"));
const app = (0, express_1.default)();
app.use(cors());
app.use(body_parser_1.default.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(restauranteRoutes_1.default);
app.use(horarioRoutes_1.default);
app.use((req, res) => {
    res.status(404).json({ error: 'Rota não encontrada' });
});
app.use((err, req, res) => {
    console.error(err);
    res.status(500).json({ error: 'Erro interno do servidor' });
});
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
//# sourceMappingURL=index.js.map