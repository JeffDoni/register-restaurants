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
exports.excluirRestaurante = exports.atualizarRestaurante = exports.obterRestaurantePorId = exports.criarRestaurante = exports.listarRestaurantes = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const listarRestaurantes = () => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.restaurante.findMany();
});
exports.listarRestaurantes = listarRestaurantes;
const criarRestaurante = (restauranteData) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.restaurante.create({ data: restauranteData });
});
exports.criarRestaurante = criarRestaurante;
const obterRestaurantePorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.restaurante.findUnique({ where: { id } });
});
exports.obterRestaurantePorId = obterRestaurantePorId;
const atualizarRestaurante = (id, restauranteData) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.restaurante.update({ where: { id }, data: restauranteData });
});
exports.atualizarRestaurante = atualizarRestaurante;
const excluirRestaurante = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.restaurante.delete({ where: { id } });
});
exports.excluirRestaurante = excluirRestaurante;
//# sourceMappingURL=restauranteService.js.map