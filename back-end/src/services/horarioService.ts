import { PrismaClient, Horario } from '@prisma/client';

const prisma = new PrismaClient();


enum DiasSemana {
  DOMINGO = 'DOMINGO',
  SEGUNDA = 'SEGUNDA',
  TERCA = 'TERCA',
  QUARTA = 'QUARTA',
  QUINTA = 'QUINTA',
  SEXTA = 'SEXTA',
  SABADO = 'SABADO',
}

export const getHorariosByRestauranteId = async (restauranteId: number) => {
  try {
    const horarios = await prisma.horario.findMany({
      where: {
        restauranteId,
      },
    });

    return horarios;
  } catch (error) {
    throw new Error('Erro ao buscar horários do restaurante');
  }
};

export const isHorarioDiaSemana = (horario: any, diaSemana: string) => {
  const horarioDiaSemana = horario.diaSemana.toUpperCase();

  return horarioDiaSemana === diaSemana.toUpperCase();
};

export const isHorarioAberto = (horario: any, data: string, hora: string) => {
  const diaSemana = new Date(data).toLocaleDateString('pt-BR', { weekday: 'long' }).toUpperCase();
  const horaAbertura = new Date(`${data} ${horario.horaAbertura}`);
  const horaFechamento = new Date(`${data} ${horario.horaFechamento}`);
  const horaAtual = new Date(`${data} ${hora}`);

  return (
    isHorarioDiaSemana(horario, diaSemana) &&
    horaAtual >= horaAbertura &&
    horaAtual <= horaFechamento
  );
};

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

export const excluirHorario = async (id: number): Promise<Horario | null> => {
  const horario = await prisma.horario.delete({
    where: {
      id,
    },
  });

  return horario;
}

