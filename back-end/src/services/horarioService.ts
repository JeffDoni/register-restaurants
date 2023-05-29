import { PrismaClient, Horario } from '@prisma/client';

const prisma = new PrismaClient();



export const criarHorario = async (novoHorario: Horario): Promise<Horario> => {
  const horario = await prisma.horario.create({
    data: novoHorario,
  });

  return horario;
}

export const obterHorarioPorId = async (restauranteId: number): Promise<Horario[]> => {
  const horarios = await prisma.horario.findMany({
    where: {
      restauranteId,
    },
  });

  return horarios;
}



export const atualizarHorario = async (id: number, horarioAtualizado: Horario): Promise<Horario | null>  => {
  const horario = await prisma.horario.update({
    where: {
      id,
    },
    data: horarioAtualizado,
  });

  return horario;
}

export const excluirHorario = async (id: number): Promise<Horario | null> => {
  const horario = await prisma.horario.delete({
    where: {
      id,
    },
  });

  return horario;
}

