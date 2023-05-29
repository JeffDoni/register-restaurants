"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.excluirHorario = exports.atualizarHorario = exports.obterHorarioPorId = exports.criarHorario = exports.checkIsOpen = exports.getHorariosByRestaurante = void 0;
const horarioService = __importStar(require("../services/horarioService"));
const getHorariosByRestaurante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { restauranteId } = req.params;
    try {
        const horarios = yield horarioService.getHorariosByRestauranteId(parseInt(restauranteId, 10));
        res.json(horarios);
    }
    catch (error) {
        console.error('Erro ao buscar horários do restaurante:', error);
        res.status(500).json({ error: 'Erro ao buscar horários do restaurante' });
    }
});
exports.getHorariosByRestaurante = getHorariosByRestaurante;
const checkIsOpen = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { restauranteId } = req.params;
    const { data, hora } = req.body;
    try {
        const horarios = yield horarioService.getHorariosByRestauranteId(parseInt(restauranteId));
        const isOpen = horarios.some((horario) => horarioService.isHorarioAberto(horario, data, hora));
        res.json({ isOpen });
    }
    catch (error) {
        console.error('Erro ao verificar se o restaurante está aberto:', error);
        res.status(500).json({ error: 'Erro ao verificar se o restaurante está aberto' });
    }
});
exports.checkIsOpen = checkIsOpen;
const criarHorario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const novoHorario = req.body;
        const horario = yield horarioService.criarHorario(novoHorario);
        res.status(201).json(horario);
    }
    catch (error) {
        res.status(500).json({ error: 'Ocorreu um erro ao criar o horário.' });
    }
});
exports.criarHorario = criarHorario;
const obterHorarioPorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const restauranteId = parseInt(req.params.restauranteId);
        const horarios = yield horarioService.obterHorarioPorId(restauranteId);
        res.json(horarios);
    }
    catch (error) {
        res.status(500).json({ error: 'Ocorreu um erro ao obter os horários do restaurante.' });
    }
});
exports.obterHorarioPorId = obterHorarioPorId;
const atualizarHorario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id, 10);
        const horarioAtualizado = req.body;
        const horario = yield horarioService.atualizarHorario(id, horarioAtualizado);
        if (horario) {
            res.json(horario);
        }
        else {
            res.status(404).json({ message: 'Horário não encontrado.' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Ocorreu um erro ao atualizar o horário.' });
    }
});
exports.atualizarHorario = atualizarHorario;
const excluirHorario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id, 10);
        const horario = yield horarioService.excluirHorario(id);
        if (horario) {
            res.json(horario);
        }
        else {
            res.status(404).json({ message: 'Horário não encontrado.' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Ocorreu um erro ao excluir o horário.' });
    }
});
exports.excluirHorario = excluirHorario;
//# sourceMappingURL=horarioController.js.map