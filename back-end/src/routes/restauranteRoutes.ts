import express from 'express';
import {
  getRestaurantes,
  createRestaurante,
  getRestauranteById,
  updateRestaurante,
  deleteRestaurante,
} from '../controllers/restauranteController';

const router = express.Router();

router.get('/restaurantes', getRestaurantes);
router.post('/restaurantes', createRestaurante);
router.get('/restaurantes/:id', getRestauranteById);
router.put('/restaurantes/:id', updateRestaurante);
router.delete('/restaurantes/:id', deleteRestaurante);

export default router;
