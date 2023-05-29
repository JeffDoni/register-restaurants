import { PrismaClient, Restaurante } from '@prisma/client';

const prisma = new PrismaClient();

export const listarRestaurantes = async (): Promise<Restaurante[]> => {
  return prisma.restaurante.findMany();
};

export const criarRestaurante = async (restauranteData: Restaurante): Promise<Restaurante> => {
  return prisma.restaurante.create({ data: restauranteData });
};

export const obterRestaurantePorId = async (id: number): Promise<Restaurante | null> => {
  return prisma.restaurante.findUnique({ where: { id } });
};

export const atualizarRestaurante = async (id: number, restauranteData: Restaurante): Promise<Restaurante> => {
  return prisma.restaurante.update({ where: { id }, data: restauranteData });
};

export const excluirRestaurante = async (id: number): Promise<void> => {
  await prisma.restaurante.delete({ where: { id } });
};
