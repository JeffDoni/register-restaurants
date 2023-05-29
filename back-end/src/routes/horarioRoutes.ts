import { Router } from 'express';
import * as horarioController from '../controllers/horarioController';

const router = Router();

router.post('/horarios', horarioController.criarHorario);
router.get('/horarios/:restauranteId/todos', horarioController.obterHorarioPorId);
router.put('/horarios/:id', horarioController.atualizarHorario);
router.delete('/horarios/:id', horarioController.excluirHorario);

export default router;