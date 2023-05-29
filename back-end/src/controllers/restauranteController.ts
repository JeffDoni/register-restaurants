import { Request, Response } from 'express';
import {
  listarRestaurantes,
  criarRestaurante,
  obterRestaurantePorId,
  atualizarRestaurante,
  excluirRestaurante,
} from '../services/restauranteService';
import { Restaurante } from '@prisma/client';

export const getRestaurantes = async (req: Request, res: Response): Promise<void> => {
  try {
    const restaurantes = await listarRestaurantes();
    res.json(restaurantes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter restaurantes' });
  }
};

export const createRestaurante = async (req: Request, res: Response): Promise<void> => {
  const restauranteData: Restaurante = req.body;
  try {
    const restaurante = await criarRestaurante(restauranteData);
    res.status(201).json(restaurante);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar restaurante' });
  }
};

export const getRestauranteById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const restaurante = await obterRestaurantePorId(parseInt(id, 10));
    if (restaurante) {
      res.json(restaurante);
    } else {
      res.status(404).json({ error: 'Restaurante não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter restaurante' });
  }
};

export const updateRestaurante = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const restauranteData: Restaurante = req.body;
    try {
      const restaurante = await atualizarRestaurante(parseInt(id, 10), restauranteData);
      res.json(restaurante);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar restaurante' });
    }
  };
  
  export const deleteRestaurante = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await excluirRestaurante(parseInt(id, 10));
      res.json({ message: 'Restaurante excluído com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao excluir restaurante' });
    }
  };