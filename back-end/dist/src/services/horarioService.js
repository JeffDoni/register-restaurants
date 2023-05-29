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
exports.excluirHorario = exports.atualizarHorario = exports.obterHorarioPorId = exports.criarHorario = exports.isHorarioAberto = exports.isHorarioDiaSemana = exports.getHorariosByRestauranteId = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
var DiasSemana;
(function (DiasSemana) {
    DiasSemana["DOMINGO"] = "DOMINGO";
    DiasSemana["SEGUNDA"] = "SEGUNDA";
    DiasSemana["TERCA"] = "TERCA";
    DiasSemana["QUARTA"] = "QUARTA";
    DiasSemana["QUINTA"] = "QUINTA";
    DiasSemana["SEXTA"] = "SEXTA";
    DiasSemana["SABADO"] = "SABADO";
})(DiasSemana || (DiasSemana = {}));
const getHorariosByRestauranteId = (restauranteId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const horarios = yield prisma.horario.findMany({
            where: {
                restauranteId,
            },
        });
        return horarios;
    }
    catch (error) {
        throw new Error('Erro ao buscar horários do restaurante');
    }
});
exports.getHorariosByRestauranteId = getHorariosByRestauranteId;
const isHorarioDiaSemana = (horario, diaSemana) => {
    const horarioDiaSemana = horario.diaSemana.toUpperCase();
    return horarioDiaSemana === diaSemana.toUpperCase();
};
exports.isHorarioDiaSemana = isHorarioDiaSemana;
const isHorarioAberto = (horario, data, hora) => {
    const diaSemana = new Date(data).toLocaleDateString('pt-BR', { weekday: 'long' }).toUpperCase();
    const horaAbertura = new Date(`${data} ${horario.horaAbertura}`);
    const horaFechamento = new Date(`${data} ${horario.horaFechamento}`);
    const horaAtual = new Date(`${data} ${hora}`);
    return ((0, exports.isHorarioDiaSemana)(horario, diaSemana) &&
        horaAtual >= horaAbertura &&
        horaAtual <= horaFechamento);
};
exports.isHorarioAberto = isHorarioAberto;
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
// export const getHorariosByRestauranteId = async (restauranteId: number) => {
//   try {
//     const horarios = await prisma.horario.findMany({
//       where: {
//         restauranteId,
//       },
//     });
//     // Mapeia os dias da semana para o padrão da função getDay()
//     const horariosMapeados = horarios.map(horario => ({
//       ...horario,
//       diaSemana: horario.diaSemana === 7 ? 0 : horario.diaSemana,
//     }));
//     return horariosMapeados;
//   } catch (error) {
//     throw new Error('Erro ao buscar horários do restaurante');
//   }
// };
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