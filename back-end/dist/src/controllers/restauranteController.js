"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRestaurante = exports.updateRestaurante = exports.getRestauranteById = exports.createRestaurante = exports.getRestaurantes = void 0;
const restauranteService_1 = require("../services/restauranteService");
const getRestaurantes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const restaurantes = yield (0, restauranteService_1.listarRestaurantes)();
        res.json(restaurantes);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao obter restaurantes' });
    }
});
exports.getRestaurantes = getRestaurantes;
const createRestaurante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const restauranteData = req.body;
    try {
        const restaurante = yield (0, restauranteService_1.criarRestaurante)(restauranteData);
        res.status(201).json(restaurante);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao criar restaurante' });
    }
});
exports.createRestaurante = createRestaurante;
const getRestauranteById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const restaurante = yield (0, restauranteService_1.obterRestaurantePorId)(parseInt(id, 10));
        if (restaurante) {
            res.json(restaurante);
        }
        else {
            res.status(404).json({ error: 'Restaurante não encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao obter restaurante' });
    }
});
exports.getRestauranteById = getRestauranteById;
const updateRestaurante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const restauranteData = req.body;
    try {
        const restaurante = yield (0, restauranteService_1.atualizarRestaurante)(parseInt(id, 10), restauranteData);
        res.json(restaurante);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar restaurante' });
    }
});
exports.updateRestaurante = updateRestaurante;
const deleteRestaurante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield (0, restauranteService_1.excluirRestaurante)(parseInt(id, 10));
        res.json({ message: 'Restaurante excluído com sucesso' });
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao excluir restaurante' });
    }
});
exports.deleteRestaurante = deleteRestaurante;
//# sourceMappingURL=restauranteController.js.map