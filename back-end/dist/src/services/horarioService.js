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
exports.excluirHorario = exports.atualizarHorario = exports.obterHorarioPorId = exports.criarHorario = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const criarHorario = (novoHorario) => __awaiter(void 0, void 0, void 0, function* () {
    const horario = yield prisma.horario.create({
        data: novoHorario,
    });
    return horario;
});
exports.criarHorario = criarHorario;
const obterHorarioPorId = (restauranteId) => __awaiter(void 0, void 0, void 0, function* () {
    const horarios = yield prisma.horario.findMany({
        where: {
            restauranteId,
        },
    });
    return horarios;
});
exports.obterHorarioPorId = obterHorarioPorId;
const atualizarHorario = (id, horarioAtualizado) => __awaiter(void 0, void 0, void 0, function* () {
    const horario = yield prisma.horario.update({
        where: {
            id,
        },
        data: horarioAtualizado,
    });
    return horario;
});
exports.atualizarHorario = atualizarHorario;
const excluirHorario = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const horario = yield prisma.horario.delete({
        where: {
            id,
        },
    });
    return horario;
});
exports.excluirHorario = excluirHorario;
//# sourceMappingURL=horarioService.js.map