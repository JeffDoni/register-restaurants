import { Request, Response } from 'express';
import { Horario } from '@prisma/client';
import * as horarioService from '../services/horarioService';

export const criarHorario = async(req: Request, res: Response): Promise<void> => {
  try {
    const novoHorario = req.body as Horario;

    const horario = await horarioService.criarHorario(novoHorario);

    res.status(201).json(horario);
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao criar o horário.' });
  }
}

export  const obterHorarioPorId = async (req: Request, res: Response): Promise<void> => {
  try {
    const restauranteId = parseInt(req.params.id, 10);

    const horarios = await horarioService.obterHorarioPorId(restauranteId);

    res.json(horarios);
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao obter os horários do restaurante.' });
  }
}

export const atualizarHorario = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id, 10);
    const horarioAtualizado = req.body as Horario;

    const horario = await horarioService.atualizarHorario(id, horarioAtualizado);

    if (horario) {
      res.json(horario);
    } else {
      res.status(404).json({ message: 'Horário não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao atualizar o horário.' });
  }
}

export const excluirHorario = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id, 10);

    const horario = await horarioService.excluirHorario(id);

    if (horario) {
        res.json(horario);
        } else {
        res.status(404).json({ message: 'Horário não encontrado.' });
        }
        } catch (error) {
        res.status(500).json({ error: 'Ocorreu um erro ao excluir o horário.' });
        }
        }
