"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const restauranteController_1 = require("../controllers/restauranteController");
const router = express_1.default.Router();
router.get('/restaurantes', restauranteController_1.getRestaurantes);
router.post('/restaurantes', restauranteController_1.createRestaurante);
router.get('/restaurantes/:id', restauranteController_1.getRestauranteById);
router.put('/restaurantes/:id', restauranteController_1.updateRestaurante);
router.delete('/restaurantes/:id', restauranteController_1.deleteRestaurante);
exports.default = router;
//# sourceMappingURL=restauranteRoutes.js.map